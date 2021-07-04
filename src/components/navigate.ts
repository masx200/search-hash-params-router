import { Router } from "../createrouter/Router";

export function navigate(
    router: Router,
    to:
        | Record<string, string>
        | ((old: Record<string, string>) => Record<string, string>)
) {
    if (!to) {
        throw new TypeError("object,function");
    }
    if ("function" === typeof to) {
        router.transformparams(to);
        return;
    }
    if ("object" === typeof to) {
        router.setparams(to);
        return;
    }
    throw new TypeError("object,function");
}
