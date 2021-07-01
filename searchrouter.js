import { setsearchparams } from "./setsearchparams";
import { getsearchparams } from "./getsearchparams";
import { replacesearchparams } from "./replacesearchparams";
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
        replace: replacesearchparams,
    };
}
