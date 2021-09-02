import { deserilizeparams } from "../deserilizeparams";

export function getparams(): {
    [k: string]: string;
} {
    var a = location.pathname.split("/");
    var b = a[a.length - 1];
    return (b && deserilizeparams(b)) || {};
}
