import { createurl } from "./createurl";

export function sethashparams(opt: Record<string, string>) {
    const oldhash = location.hash;
    let url = createurl(opt);

    if (oldhash === url.hash) {
        return;
    }
    history.pushState({}, "", url.href);

    window.dispatchEvent(new Event("hashchange"));
}
