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
import { createclickhandler } from "../createclickhandler";
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
        innerRef?: ((r: any) => void) | { value?: any };
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
                const newclick = createclickhandler({
                    //@ts-ignore
                    onClick,
                    //@ts-ignore
                    target,
                    router,
                    //@ts-ignore
                    to,
                });

                const reffun =
                    "function" === typeof forwardedRef
                        ? forwardedRef
                        : forwardedRef && "object" === typeof forwardedRef
                        ? (e: any) => {
                              Reflect.set(forwardedRef, "value", e);
                          }
                        : undefined;

                const oprops = {
                    ref: reffun,
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
