import { sethashparams } from "./sethashparams";
import { gethashparams } from "./gethashparams";
import { replacehashparams } from "./replacehashparams";
export function createHashRouter() {
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
        replace: replacehashparams,
    };
}
