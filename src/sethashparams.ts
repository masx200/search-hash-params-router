export function sethashparams(opt: Record<string, string>) {
    const oldhash = location.href;
    let url = new URL(location.href);

    url.hash = String(new URLSearchParams({ ...opt }));

    if (oldhash === url.hash) {
        return;
    }
    history.pushState({}, "", url.href);

    window.dispatchEvent(new Event("hashchange"));
}
