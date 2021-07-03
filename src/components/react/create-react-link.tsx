import { Router } from "../../createrouter/Router";
import type {
    ForwardRefExoticComponent,
    RefAttributes,
    ComponentType,
    MouseEvent,
    forwardRef as forwardRefType,
    createElement as createElementType,
} from "react";

export type ReactLinkComponent = ForwardRefExoticComponent<
    Pick<
        {
            [key: string]: any;
            component?: string | ComponentType<any> | undefined;
            target?: string | undefined;
            onClick?: ((event: MouseEvent) => void) | undefined;
            to:
                | Record<string, string>
                | ((old: Record<string, string>) => Record<string, string>);
        },
        string | number
    > &
        RefAttributes<unknown>
>;

export function createReactLink({
    router,
    forwardRef,
    createElement,
}: {
    router: Router;
    forwardRef: typeof forwardRefType;
    createElement: typeof createElementType;
}): ReactLinkComponent {
    console.log(router, forwardRef, createElement);
    return forwardRef<
        unknown,
        {
            component?: string | ComponentType<any>;
            target?: string;
            onClick?: (event: MouseEvent) => void;
            to:
                | Record<string, string>
                | ((old: Record<string, string>) => Record<string, string>);

            [key: string]: any;
        }
    >(
        (
            {
                component: Component = "a",
                to,
                onClick,
                children,
                target,
                ...rest
            },
            forwardedRef
        ) => {
            const href: string = router.href(to);
            const newclick = (event: MouseEvent) => {
                try {
                    if (onClick) {
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
                ...rest,
                ref: forwardedRef,
                href,
                onClick: newclick,
                target,
            };
            return <Component {...props}>{children}</Component>;
        }
    );
}
function isModifiedEvent(event: MouseEvent) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function navigate(
    router: Router,
    to:
        | Record<string, string>
        | ((old: Record<string, string>) => Record<string, string>)
) {
    if (!to) {
        throw new TypeError(to);
    }
    if ("function" === typeof to) {
        router.transform(to);
        return;
    }
    if ("object" === typeof to) {
        router.set(to);
        return;
    }
    throw new TypeError(to);
}
