import { Router } from "../createrouter/Router";
import { MouseEvent } from "react";
import { navigate } from "./navigate";
import { isModifiedEvent } from "./isModifiedEvent";

export function createclickhandler({
    onClick,
    target,
    router,
    to,
}: {
    onClick?: ((event: MouseEvent) => void) | undefined;
    target?: string | undefined;
    router: Router;
    to:
        | Record<string, string>
        | ((old: Record<string, string>) => Record<string, string>);
}) {
    return (event: MouseEvent) => {
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
}
