import { Router } from "../../createrouter/Router";
import type {
    ComponentType,
    MouseEvent,
    forwardRef as forwardRefType,
    createElement as createElementType,
} from "react";
import { navigate } from "../navigate";
import { ReactLinkComponent } from "./ReactLinkComponent";
import { isModifiedEvent } from "../isModifiedEvent";
export type { ReactLinkComponent };
export function createReactLink({
    router,
    forwardRef,
    createElement,
}: {
    router: Router;
    forwardRef: typeof forwardRefType;
    createElement: typeof createElementType;
}): ReactLinkComponent {
    return forwardRef<
        unknown,
        {
            component?: string | ComponentType<any>;
            target?: string;
            onClick?: (event: MouseEvent) => void;
            to:
                | Record<string, string>
                | ((old: Record<string, string>) => Record<string, string>);
        }
    >(
        (
            { component: Component = "a", to, onClick, children, target },
            forwardedRef
        ) => {
            if (!to) {
                throw new TypeError("object,function");
            }
            const href: string = router.paramshref(to);
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
                    navigate(router, to);
                }
            };
            const props = {
                ref: forwardedRef,
                href,
                onClick: newclick,
                target,
            };
            return createElement(Component, { ...props }, children);
        }
    );
}
