import { createurl } from "./createurl";

export function setparams(opt: Record<string, string>) {
    const oldpathname = location.pathname;

    let url = createurl(opt);
    if (oldpathname === url.pathname) {
        return;
    }
    history.pushState({ }, "", url.href);

    window.dispatchEvent(new Event("popstate"));
}
