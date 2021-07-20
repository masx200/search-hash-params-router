import type {
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
export type CustomVueViewProps = {
    component: Component<any>;
    params: Record<string, string>;
};

export type DefaultVueViewProps = {
    routes: RouteRecord[];
    render?: string | Component<CustomVueViewProps>;
};

function createVueView({
    readonly,
    onMounted,
    onUnmounted,
    router,
    resolveComponent,
    defineComponent,
    h: createElement,
    ref,
}: {
    readonly: typeof import("@vue/runtime-dom").readonly;
    onMounted: typeof import("@vue/runtime-dom").onMounted;
    onUnmounted: typeof import("@vue/runtime-dom").onUnmounted;
    resolveComponent: typeof resolveComponentType;
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
    ref: typeof refType;
}): Component<DefaultVueViewProps> {
    const useParams = createVueParamsHook({
        router,
        ref,
        onMounted,
        onUnmounted,
        readonly,
    });
    function viewrenderdefault({ component, params }: CustomVueViewProps) {
        //@ts-ignore
        return createElement(component, { params });
    }
    viewrenderdefault.props = ["params", "component"];
    viewrenderdefault.inheritAttrs = false;
    return defineComponent({
        props: ["routes", "render"],
        inheritAttrs: false,
        setup(props: DefaultVueViewProps) {
            //attrs不是响应式对象

            const params = useParams();
            return () => {
                const { routes, render = viewrenderdefault } = props;
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

                    return null;
                }
                if (isRecordRoute(currentroute)) {
                    const Component = currentroute.component as Component<any>;
                    let Resolvedcomponent =
                        "string" === typeof Component
                            ? resolveComponent(Component)
                            : Component;
                    let props = { component: Resolvedcomponent };
                    let oprops = Object.assign({}, props, {
                        params: params.value,
                    });

                    let rendercomponent =
                        "string" === typeof render
                            ? resolveComponent(render)
                            : render;

                    return createElement(
                        //@ts-ignore
                        rendercomponent,
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
