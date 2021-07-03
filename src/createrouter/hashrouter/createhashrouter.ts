//@ts-ignore
import { sethashparams } from "./sethashparams.ts"; //@ts-ignore
import { gethashparams } from "./gethashparams.ts"; //@ts-ignore
import { transformhashparams } from "./transformhashparams.ts";
import { Router } from "../Router";
//@ts-ignore
import { gethashhref } from "./gethashhref.ts";
import EventEmitterTargetClass from "@masx200/event-emitter-target";
export function createHashRouter(): Router {
    const eventname = "hashchange";
    const emitter = EventEmitterTargetClass();

    const changelistener = () => {
        const hashparams = gethashparams();
        instance.emit("params", hashparams);
    };

    window.addEventListener(eventname, changelistener);

    const router = {
        href: gethashhref,

        set: sethashparams,
        get: gethashparams,
        transform: transformhashparams,
        [Symbol.toStringTag]: "HashRouter",
        routes: [],
    };
    const instance: Router = (() => {
        const ins = {};
        const objarr = [emitter, router];

        objarr.forEach((obj) => {
            Reflect.ownKeys(obj).forEach((key) => {
                Reflect.set(ins, key, Reflect.get(obj, key));
            });
        });

        return ins as Router;
    })();

    return instance as Router;
}
