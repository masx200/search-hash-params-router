//@ts-ignore
import { getsearchparams } from "./getsearchparams.ts";
import { createurl } from "./createurl";

export function getsearchhref(
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
        } = getsearchparams();

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
