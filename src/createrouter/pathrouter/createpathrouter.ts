import { createBaseRouter } from "../createbaserouter";
import { Router } from "../Router";
import { createurl } from "./createurl";
import { getparams } from "./getparams";

export function createPathRouter(): Router {
    const opts = {
        toStringTag: "PathRouter",
        eventname: "popstate",
        gethref: gethref,

        setparams: setparams,
        getparams: getparams,
        transformparams: transformparams,
    };
    return createBaseRouter(opts);
}
function gethref(
    to:
        | Record<string, string>
        | ((old: Record<string, string>) => Record<string, string>)
): string {
    if (!to) {
        throw new TypeError("object,function");
    }

    if ("function" === typeof to) {
        let params: {
            [k: string]: string;
        } = getparams();

        params = to(params);
        let url = createurl(params);

        return url.href;
    }
    if ("object" === typeof to) {
        let url = createurl(to);
        return url.href;
    }
    throw new TypeError("object,function");
}
function setparams(opt: Record<string, string>) {
    const oldpathname = location.pathname;

    let url = createurl(opt);
    if (oldpathname === url.pathname) {
        return;
    }
    history.pushState({}, "", url.href);

    window.dispatchEvent(new Event("popstate"));
}
function transformparams(
    opt: (old: Record<string, string>) => Record<string, string>
) {
    setparams(opt(getparams()));
}
