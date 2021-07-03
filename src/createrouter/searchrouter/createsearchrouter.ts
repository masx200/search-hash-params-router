//@ts-ignore

import { getsearchhref } from "./getsearchhref.ts";
//@ts-ignore
import { getsearchparams } from "./getsearchparams.ts"; //@ts-ignore
import { Router } from "../Router";
//@ts-ignore
import { setsearchparams } from "./setsearchparams.ts"; //@ts-ignore
import { transformsearchparams } from "./transformsearchparams.ts";

import EventEmitterTargetClass from "@masx200/event-emitter-target";
export function createSearchRouter(): Router {
    const eventname = "popstate";

    const emitter = EventEmitterTargetClass();

    const changelistener = () => {
        const searchparams = getsearchparams();
        instance.emit("params", searchparams);
    };

    window.addEventListener(eventname, changelistener);
    const router = {
        href: getsearchhref,

        set: setsearchparams,
        get: getsearchparams,
        transform: transformsearchparams,
        [Symbol.toStringTag]: "SearchRouter",
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
