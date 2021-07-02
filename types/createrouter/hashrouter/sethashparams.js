export function sethashparams(opt) {
    const oldhash = location.hash;
    let url = new URL(location.href);
    url.hash = String(new URLSearchParams({ ...opt }));
    if (oldhash === url.hash) {
        return;
    }
    history.pushState({}, "", url.href);
    window.dispatchEvent(new Event("hashchange"));
}
