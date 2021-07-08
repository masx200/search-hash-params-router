import type {
    // watch as watchType,
    Component as ComponentType,
    defineComponent as defineComponentType,
    h as hType,
    ref as refType,
    resolveComponent as resolveComponentType,
} from "@vue/runtime-dom";
import debounce from "lodash/debounce";
import { isRecordRedirect } from "../../createrouter/isRecordRedirect";
import { isRecordRoute } from "../../createrouter/isRecordRoute";
import { matchRoute } from "../../createrouter/matchRoute";
import { Router } from "../../createrouter/Router";
import { RouteRecord } from "../../createrouter/RouteRecord";
import { isrouterecord } from "../isrouterecord";
import { navigate } from "../navigate";
export { createVueView };
function createVueView({
    onMounted,
    onUnmounted,
    router,
    resolveComponent,
    defineComponent,
    h: createElement,
    ref,
}: // watch,
// Fragment,
{
    onMounted: typeof import("@vue/runtime-dom").onMounted;
    onUnmounted: typeof import("@vue/runtime-dom").onUnmounted;
    resolveComponent: typeof resolveComponentType;
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
    ref: typeof refType;
    // watch: typeof watchType;
    // Fragment: typeof import("@vue/runtime-core").Fragment;
}) {
    return defineComponent<{ routes: RouteRecord[] }>({
        inheritAttrs: false,
        setup(_, { attrs }) {
            //attrs不是响应式对象
            const { routes } = attrs;
            if (!Array.isArray(routes)) {
                throw new TypeError("array");
            }
            const params = ref(router.getparams());
            // const currentroute = ref(matchRoute(routes, params.value));
            const paramschange = debounce((p) => {
                params.value = p;
            });
            // watch([() => params.value], ([params]) => {
            //     const { routes } = attrs;
            //     if (!Array.isArray(routes)) {
            //         throw new TypeError("array");
            //     }
            //     currentroute.value = matchRoute(routes, params);
            // });
            // watch([() => currentroute.value], ([currentroute]) => {
            //     if (isRecordRedirect(currentroute)) {
            //         const redirect = currentroute.redirect;

            //         navigate(router, redirect);
            //     }
            // });
            function onmount() {
                router.mount();
                router.on("params", paramschange);
            }

            function onunmount() {
                router.unmount();

                router.off("params", paramschange);
                paramschange.cancel();
            }
            onMounted(onmount);
            onUnmounted(onunmount);
            return () => {
                const { routes } = attrs;
                //attrs可能属性有变化
                if (!Array.isArray(routes)) {
                    throw new TypeError("array");
                }
                if (
                    !routes.every((o) => {
                        return isrouterecord(o);
                    })
                ) {
                    throw new TypeError('{params:"function"}');
                }

                const currentroute = matchRoute(routes, params.value);
                if (isRecordRedirect(currentroute)) {
                    const redirect = currentroute.redirect;

                    navigate(router, redirect);
                }
                if (isRecordRedirect(currentroute)) {
                    return null;
                }
                if (isRecordRoute(currentroute)) {
                    const Component =
                        currentroute.component as ComponentType<any>;

                    const children = currentroute.children;

                    let props = currentroute.props || {};
                    let oprops = Object.assign({}, props, {
                        params: params.value,
                    });
                    let Resolvedcomponent =
                        "string" === typeof Component
                            ? resolveComponent(Component)
                            : Component;
                    // if (typeof Resolvedcomponent === "object") {
                    //     Resolvedcomponent = Object.assign(
                    //         {},
                    //         Resolvedcomponent
                    //     );
                    // }
                    return createElement(
                        // //@ts-ignore
                        // Fragment,
                        // {},
                        // createElement(
                        // @ts-ignore
                        Resolvedcomponent,
                        { ...oprops },
                        children
                        // )
                    );
                } else {
                    return null;
                }
            };
        },
    });
}
