export function sethashparams(opt) {
    let url = new URL(location.href);

    url.hash = String(new URLSearchParams({ ...opt }));
    history.pushState(null, null, url.href);

    window.dispatchEvent(new Event("hashchange"));
}
