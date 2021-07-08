//@ts-ignore
import { getsearchparams } from "./getsearchparams.ts";

export function getsearchhref(
    to:
        | Record<string, string>
        | ((old: Record<string, string>) => Record<string, string>)
): string {
    if (!to) {
        throw new TypeError("object,function");
    }
    let params: {
        [k: string]: string;
    } = getsearchparams();
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
    throw new TypeError("object,function");
}
