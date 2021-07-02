import { sethashparams } from "./sethashparams.ts";
import { gethashparams } from "./gethashparams.ts";
import { transformhashparams } from "./transformhashparams.ts";
import { gethashhref } from "./gethashhref.ts";
export function createHashRouter() {
    const eventname = "hashchange";
    const listercallbacks = new Set();
    function watchparams(callback) {
        listercallbacks.add(callback);
        if (listercallbacks.size > 0) {
            window.addEventListener(eventname, changelistener);
        }
    }
    function unwatchparams(callback) {
        listercallbacks.delete(callback);
        if (listercallbacks.size === 0) {
            window.removeEventListener(eventname, changelistener);
        }
    }
    const changelistener = () => {
        let hashparams = gethashparams();
        listercallbacks.forEach((call) => Promise.resolve().then(() => call(hashparams)));
    };
    window.addEventListener(eventname, changelistener);
    const router = {
        href: gethashhref,
        watch: watchparams,
        unwatch: unwatchparams,
        set: sethashparams,
        get: gethashparams,
        transform: transformhashparams,
        [Symbol.toStringTag]: "HashRouter",
    };
    return router;
}
