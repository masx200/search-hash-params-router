//@ts-ignore
import { gethashparams } from "./gethashparams.ts";
import { createurl } from "./createurl";

export function gethashhref(
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
        } = gethashparams();

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
