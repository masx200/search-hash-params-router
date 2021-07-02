import { getsearchhref } from "./getsearchhref.ts";
import { getsearchparams } from "./getsearchparams.ts";
import { setsearchparams } from "./setsearchparams.ts";
import { transformsearchparams } from "./transformsearchparams.ts";
export function createSearchRouter() {
    const eventname = "popstate";
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
        let searchparams = getsearchparams();
        listercallbacks.forEach((call) => Promise.resolve().then(() => call(searchparams)));
    };
    window.addEventListener(eventname, changelistener);
    const router = {
        href: getsearchhref,
        watch: watchparams,
        unwatch: unwatchparams,
        set: setsearchparams,
        get: getsearchparams,
        transform: transformsearchparams,
        [Symbol.toStringTag]: "SearchRouter",
    };
    return router;
}
