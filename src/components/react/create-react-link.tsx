import { Router } from "../../createrouter/Router";
import type {
    ComponentType,
    MouseEvent,
    forwardRef as forwardRefType,
    createElement as createElementType,
} from "react";
import { ReactLinkComponent } from "./ReactLinkComponent";
import { createclickhandler } from "../createclickhandler";
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
            if (!("function" === typeof to || "object" === typeof to)) {
                throw new TypeError("object,function");
            }
            const href: string = router.paramshref(to);
            const newclick = createclickhandler({
                onClick,
                target,
                router,
                to,
            });
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
