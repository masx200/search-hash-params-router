import { getsearchparams } from "./getsearchparams.ts";
export function getsearchhref(to) {
    if (!to) {
        throw new TypeError(to);
    }
    let params = getsearchparams();
    let url = new URL(location.href);
    if ("function" === typeof to) {
        params = to(params);
        url.search = String(new URLSearchParams({ ...to }));
        return url.href;
    }
    if ("object" === typeof to) {
        params = to;
        url.search = String(new URLSearchParams({ ...to }));
        return url.href;
    }
    throw new TypeError(to);
}
