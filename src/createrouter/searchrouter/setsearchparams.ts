import { createurl } from "./createurl";

export function setsearchparams(opt: Record<string, string>) {
    const oldsearch = location.search;

    let url = createurl(opt);
    if (oldsearch === url.search) {
        return;
    }
    history.pushState({}, "", url.href);

    window.dispatchEvent(new Event("popstate"));
}
