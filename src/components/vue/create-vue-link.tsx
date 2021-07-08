import { Router } from "../../createrouter/Router";
import type {
    resolveComponent as resolveComponentType,
    Ref,
    Component as ComponentType,
    defineComponent as defineComponentType,
    h as hType,
} from "@vue/runtime-dom";
import { isModifiedEvent } from "../isModifiedEvent";
import { navigate } from "../navigate";
export { createVueLink };

function createVueLink({
    router,
    resolveComponent,
    defineComponent,
    h: createElement,
}: {
    resolveComponent: typeof resolveComponentType;
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
}) {
    return defineComponent<{
        component?: string | ComponentType;
        to:
            | Record<string, string>
            | ((old: Record<string, string>) => Record<string, string>);
        onClick?: (event: MouseEvent) => void;
        target?: string;
        innerRef?: (r: any) => void;
    }>({
        inheritAttrs: false,

        setup(_, { slots: children, attrs }) {
            return () => {
                const {
                    component: Component = "a",
                    to,
                    onClick,
                    target,
                    innerRef: forwardedRef,
                } = attrs;

                if (!to) {
                    throw new TypeError("object,function");
                }
                if (!("function" === typeof to || "object" === typeof to)) {
                    throw new TypeError("object,function");
                }
                const href: string = router.paramshref(to as any);
                const newclick = (event: MouseEvent) => {
                    try {
                        if ("function" === typeof onClick) {
                            onClick(event);
                        }
                    } catch (ex) {
                        event.preventDefault();
                        throw ex;
                    }
                    if (
                        !event.defaultPrevented &&
                        // onClick prevented default
                        event.button === 0 &&
                        // ignore everything but left clicks
                        (!target || target === "_self") &&
                        // let browser handle "target=_blank" etc.
                        !isModifiedEvent(event)
                        // ignore clicks with modifier keys
                    ) {
                        event.preventDefault();
                        navigate(router, to as any);
                    }
                };

                const reffun =
                    "function" === typeof forwardedRef
                        ? forwardedRef
                        : undefined;
                const oprops = {
                    ref: forwardedRef ? reffun : undefined,
                    href,
                    onClick: newclick,
                    target,
                };

                const Resolvedcomponent =
                    "string" === typeof Component
                        ? resolveComponent(Component)
                        : Component;

                return createElement(
                    //@ts-ignore
                    Resolvedcomponent,
                    { ...oprops },
                    children
                );
            };
        },
    });
}
