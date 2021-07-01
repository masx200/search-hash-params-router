export function setsearchparams(
    opt: Record<string, string | number | boolean>
) {
    const oldsearch = location.search;
    let url = new URL(location.href);

    url.search = String(new URLSearchParams({ ...opt }));

    if (oldsearch === url.search) {
        return;
    }
    history.pushState(null, null, url.href);

    window.dispatchEvent(new Event("popstate"));
}
