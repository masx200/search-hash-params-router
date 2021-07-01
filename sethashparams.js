export function sethashparams(opt) {
    const oldhash = location.href;
    let url = new URL(location.href);

    url.hash = String(new URLSearchParams({ ...opt }));

    if (oldhash === url.hash) {
        return;
    }
    history.pushState(null, null, url.href);

    window.dispatchEvent(new Event("hashchange"));
}
