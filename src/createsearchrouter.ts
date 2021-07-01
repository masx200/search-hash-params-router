//@ts-ignore

import { setsearchparams } from "./setsearchparams.ts"; //@ts-ignore

import { getsearchparams } from "./getsearchparams.ts"; //@ts-ignore
import { replacesearchparams } from "./replacesearchparams.ts";
export function createSearchRouter() {
    const listercallbacks = new Set<(p: Record<string, string>) => void>();
    function watchparams(callback: (p: Record<string, string>) => void) {
        listercallbacks.add(callback);
    }

    function unwatchparams(callback: (p: Record<string, string>) => void) {
        listercallbacks.delete(callback);
    }
    const changelistener = () => {
        let searchparams = getsearchparams();

        listercallbacks.forEach((call) =>
            Promise.resolve().then(() => call(searchparams))
        );
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
