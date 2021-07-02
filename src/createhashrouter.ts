//@ts-ignore
import { sethashparams } from "./sethashparams.ts"; //@ts-ignore
import { gethashparams } from "./gethashparams.ts"; //@ts-ignore
import { transformhashparams } from "./transformhashparams.ts";
export function createHashRouter() {
    const eventname = "hashchange";
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
        let hashparams = gethashparams();
        listercallbacks.forEach((call) =>
            Promise.resolve().then(() => call(hashparams))
        );
    };

    window.addEventListener(eventname, changelistener);
    return {
        watch: watchparams,
        unwatch: unwatchparams,
        set: sethashparams,
        get: gethashparams,
        transform: transformhashparams,
    };
}
