export function createReactLink({ router, forwardRef, createElement, }) {
    function navigate(to) {
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
    console.log(router, forwardRef, createElement);
    return forwardRef(({ to, onClick, children, target, ...rest }, forwardedRef) => {
        const href = router.href(to);
        const newclick = (event) => {
            try {
                if (onClick) {
                    onClick(event);
                }
            }
            catch (ex) {
                event.preventDefault();
                throw ex;
            }
            if (!event.defaultPrevented &&
                event.button === 0 &&
                (!target || target === "_self") &&
                !isModifiedEvent(event)) {
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
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
