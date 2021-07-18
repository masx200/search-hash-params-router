import type {
    // watch as watchType,
    Component,
    defineComponent as defineComponentType,
    h as hType,
    ref as refType,
    resolveComponent as resolveComponentType,
} from "@vue/runtime-dom";
import { isRecordRedirect } from "../../createrouter/isRecordRedirect";
import { isRecordRoute } from "../../createrouter/isRecordRoute";
import { matchRoute } from "../../createrouter/matchroute";
import { Router } from "../../createrouter/Router";
import { RouteRecord } from "../../createrouter/RouteRecord";
import { isrouterecord } from "../isrouterecord";
import { navigate } from "../navigate";
import { createVueParamsHook } from "./createVueParamsHook";
export { createVueView, createVueParamsHook };
function createVueView({
    readonly,
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
    readonly: typeof import("@vue/runtime-dom").readonly;
    onMounted: typeof import("@vue/runtime-dom").onMounted;
    onUnmounted: typeof import("@vue/runtime-dom").onUnmounted;
    resolveComponent: typeof resolveComponentType;
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
    ref: typeof refType;
    // watch: typeof watchType;
    // Fragment: typeof import("@vue/runtime-core").Fragment;
}): Component<{ routes: RouteRecord[] }> {
    const useParams = createVueParamsHook({
        router,
        ref,
        onMounted,
        onUnmounted,
        readonly,
    });
    return defineComponent({
        props: ["routes"],
        inheritAttrs: false,
        setup(props: { routes: RouteRecord[] }, {}) {
            //attrs不是响应式对象

            const params = useParams();
            return () => {
                const { routes } = props;
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
                    const Component = currentroute.component as Component;

                    let props = {};
                    let oprops = Object.assign({}, props, {
                        params: params.value,
                    });
                    let Resolvedcomponent =
                        "string" === typeof Component
                            ? resolveComponent(Component)
                            : Component;

                    return createElement(
                        //@ts-ignore
                        Resolvedcomponent,
                        { ...oprops }

                        // )
                    );
                } else {
                    return null;
                }
            };
        },
    });
}
