import { deserializeParams } from "../deserializeParams";

export function getparams(): {
    [k: string]: string;
} {
    const pathname = location.pathname;
    var a = pathname.split("/");
    var b = pathname.endsWith("/") ? a[a.length - 2] : a[a.length - 1];
    return (b && deserializeParams(b)) || {};
}
