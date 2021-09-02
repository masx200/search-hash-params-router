import { deserializeParams } from "../deserializeParams";

export function getparams(): {
    [k: string]: string;
} {
    const pathname = location.pathname;
    var a = pathname.split("/");
    //如果路径以/结尾,找前一个参数
    var b = pathname.endsWith("/") ? a[a.length - 2] : a[a.length - 1];
    return (b && deserializeParams(b)) || {};
}
