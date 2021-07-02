export function setsearchparams(opt) {
    const oldsearch = location.search;
    let url = new URL(location.href);
    url.search = String(new URLSearchParams({ ...opt }));
    if (oldsearch === url.search) {
        return;
    }
    history.pushState({}, "", url.href);
    window.dispatchEvent(new Event("popstate"));
}
