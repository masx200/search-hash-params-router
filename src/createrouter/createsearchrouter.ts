//@ts-ignore

import { setsearchparams } from "./setsearchparams.ts"; //@ts-ignore

import { getsearchparams } from "./getsearchparams.ts"; //@ts-ignore
import { transformsearchparams } from "./transformsearchparams.ts";
import { Router } from "./Router";
export function createSearchRouter(): Router {
    const eventname = "popstate";
    const listercallbacks = new Set<(p: Record<string, string>) => void>();
    function watchparams(callback: (p: Record<string, string>) => void) {
        listercallbacks.add(callback);
        if (listercallbacks.size > 0) {
            window.addEventListener(eventname, changelistener);
        }
    }

    function unwatchparams(callback: (p: Record<string, string>) => void) {
        listercallbacks.delete(callback);
        if (listercallbacks.size === 0) {
            window.removeEventListener(eventname, changelistener);
        }
    }
    const changelistener = () => {
        let searchparams = getsearchparams();

        listercallbacks.forEach((call) =>
            Promise.resolve().then(() => call(searchparams))
        );
    };

    window.addEventListener(eventname, changelistener);
    return {
        watch: watchparams,
        unwatch: unwatchparams,
        set: setsearchparams,
        get: getsearchparams,
        transform: transformsearchparams,
        [Symbol.toStringTag]: "SearchRouter",
    };
}
