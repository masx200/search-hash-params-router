export function setsearchparams(opt) {
    let url = new URL(location.href);

    url.search = String(new URLSearchParams({ ...opt }));
    history.pushState(null, null, url.href);

    window.dispatchEvent(new Event("popstate"));
}
