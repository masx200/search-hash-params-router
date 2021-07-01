//@ts-ignore
import { sethashparams } from "./sethashparams.ts"; //@ts-ignore
import { gethashparams } from "./gethashparams.ts"; //@ts-ignore
import { replacehashparams } from "./replacehashparams.ts";
export function createHashRouter() {
    const listercallbacks = new Set<(p: Record<string, string>) => void>();
    function watchparams(callback: (p: Record<string, string>) => void) {
        listercallbacks.add(callback);
    }

    function unwatchparams(callback: (p: Record<string, string>) => void) {
        listercallbacks.delete(callback);
    }
    const changelistener = () => {
        let hashparams = gethashparams();
        listercallbacks.forEach((call) =>
            Promise.resolve().then(() => call(hashparams))
        );
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
