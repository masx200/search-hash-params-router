import { gethashparams } from "./gethashparams.ts";
export function gethashhref(to) {
    if (!to) {
        throw new TypeError(to);
    }
    let params = gethashparams();
    let url = new URL(location.href);
    if ("function" === typeof to) {
        params = to(params);
        url.hash = String(new URLSearchParams({ ...to }));
        return url.href;
    }
    if ("object" === typeof to) {
        params = to;
        url.hash = String(new URLSearchParams({ ...to }));
        return url.href;
    }
    throw new TypeError(to);
}
