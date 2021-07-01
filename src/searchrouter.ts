import { setsearchparams } from "./setsearchparams.ts";
import { getsearchparams } from "./getsearchparams.ts";
import { replacesearchparams } from "./replacesearchparams.ts";
export function createSearchRouter() {
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
