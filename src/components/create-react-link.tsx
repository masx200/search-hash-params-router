import { Router } from "../createrouter/Router";
export function createReactLink({
    router,
    forwardRef,
    createElement,
}: {
    router: Router;
    forwardRef: typeof import("react").forwardRef;
    createElement: typeof import("react").createElement;
}) {
    function navigate(
        to:
            | Record<string, string>
            | ((old: Record<string, string>) => Record<string, string>)
    ) {
        if ("function" === typeof to) {
            router.transform(to);
            return;
        }
        if ("object" === typeof to) {
            router.set(to);
            return;
        }
        throw new TypeError(typeof to);
    }
    console.log(router, forwardRef, createElement);
    return forwardRef<
        HTMLAnchorElement,
        {
            target?: string;
            onClick?: (event: import("react").MouseEvent) => void;
            to:
                | Record<string, string>
                | ((old: Record<string, string>) => Record<string, string>);
        }
    >(({ to, onClick, children, target, ...rest }, forwardedRef) => {
        const href: string = "";
        const newclick = (event: import("react").MouseEvent) => {
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
                navigate(to);
            }
        };
        const props = {
            ...rest,
            ref: forwardedRef,
            href,
            onClick: newclick,
            target,
        };
        return <a {...props}>{children}</a>;
    });
}
function isModifiedEvent(event: import("react").MouseEvent) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
