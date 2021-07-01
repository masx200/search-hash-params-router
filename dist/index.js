function sethashparams(opt) {
    const oldhash = location.href;
    let url = new URL(location.href);

    url.hash = String(new URLSearchParams({ ...opt }));

    if (oldhash === url.hash) {
        return;
    }
    history.pushState(null, null, url.href);

    window.dispatchEvent(new Event("hashchange"));
}

function gethashparams() {
    return (
        (location.hash &&
            Object.fromEntries(new URLSearchParams(location.hash.slice(1)))) ||
        {}
    );
}

function replacehashparams(opt) {
    sethashparams(opt(gethashparams()));
}

function createHashRouter() {
    const listercallbacks = new Set();
    function watchparams(callback) {
        listercallbacks.add(callback);
    }

    function unwatchparams(callback) {
        listercallbacks.delete(callback);
    }
    const changelistener = () => {
        let hashparams = gethashparams();

        listercallbacks.forEach(async (call) => call(hashparams));
    };

    window.addEventListener("hashchange", changelistener);
    return {
        watch: watchparams,
        unwatch: unwatchparams,
        set: sethashparams,
        get: gethashparams,
        transform: replacehashparams,
    };
}

function setsearchparams(opt) {
    const oldsearch = location.search;
    let url = new URL(location.href);

    url.search = String(new URLSearchParams({ ...opt }));

    if (oldsearch === url.search) {
        return;
    }
    history.pushState(null, null, url.href);

    window.dispatchEvent(new Event("popstate"));
}

function getsearchparams() {
    return (
        (location.search &&
            Object.fromEntries(new URL(location.href).searchParams)) ||
        {}
    );
}

function replacesearchparams(opt) {
    setsearchparams(opt(getsearchparams()));
}

function createSearchRouter() {
    const listercallbacks = new Set();
    function watchparams(callback) {
        listercallbacks.add(callback);
    }

    function unwatchparams(callback) {
        listercallbacks.delete(callback);
    }
    const changelistener = () => {
        let searchparams = getsearchparams();

        listercallbacks.forEach(async (call) => call(searchparams));
    };

    window.addEventListener("popstate", changelistener);
    return {
        watch: watchparams,
        unwatch: unwatchparams,
        set: setsearchparams,
        get: getsearchparams,
        transform: replacesearchparams,
    };
}

export { createHashRouter, createSearchRouter };
