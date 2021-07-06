import type {
    watch as watchType,
    Component as ComponentType,
    defineComponent as defineComponentType,
    h as hType,
    ref as refType,
    resolveComponent as resolveComponentType,
} from "@vue/runtime-dom";
import debounce from "lodash/debounce";
import { isRecordRedirect } from "../../createrouter/isRecordRedirect";
import { isRecordRoute } from "../../createrouter/isRecordRoute";
import { matchroute } from "../../createrouter/matchroute";
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
    watch,
}: {
    onMounted: typeof import("@vue/runtime-dom").onMounted;
    onUnmounted: typeof import("@vue/runtime-dom").onUnmounted;
    resolveComponent: typeof resolveComponentType;
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
    ref: typeof refType;
    watch: typeof watchType;
}) {
    console.log(
        onMounted,
        onUnmounted,
        watch,
        ref,
        resolveComponent,
        router,
        defineComponent,
        createElement
    );
    return defineComponent<{ routes: RouteRecord[] }>({
        setup(props) {
            const params = ref(router.getparams());
            const currentroute = ref(matchroute(props.routes, params.value));
            const paramschange = debounce((p) => {
                params.value = p;
            });
            watch(
                [() => props.routes, () => params.value],
                ([routes, params]) => {
                    currentroute.value = matchroute(routes, params);
                }
            );
            watch([() => currentroute.value], ([currentroute]) => {
                if (isRecordRedirect(currentroute)) {
                    const redirect = currentroute.redirect;

                    navigate(router, redirect);
                }
            });
            function onmount() {
                router.mount();
                router.on("params", paramschange);
            }

            function onunmount() {
                router.unmount();

                router.off("params", paramschange);
            }
            onMounted(onmount);
            onUnmounted(onunmount);
            return () => {
                const { routes } = props;
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

                if (isRecordRedirect(currentroute.value)) {
                    return null;
                }
                if (isRecordRoute(currentroute.value)) {
                    const Component = currentroute.value
                        .component as ComponentType<any>;

                    const children = currentroute.value.children;

                    const props = currentroute.value.props || {};
                    Object.assign(props, { params: params.value });
                    const Resolvedcomponent =
                        "string" === typeof Component
                            ? resolveComponent(Component)
                            : Component;

                    return (
                        //@ts-ignore
                        <Resolvedcomponent {...props}>
                            {children}
                        </Resolvedcomponent>
                    );
                } else {
                    return null;
                }
            };
        },
    });
}
