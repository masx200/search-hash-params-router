//@ts-ignore

import EventEmitterTargetClass from "@masx200/event-emitter-target";
//@ts-ignore
import { gethashhref } from "./hashrouter/gethashhref.ts";
//@ts-ignore
import { gethashparams } from "./hashrouter/gethashparams.ts";
//@ts-ignore
import { sethashparams } from "./hashrouter/sethashparams.ts";
//@ts-ignore
import { transformhashparams } from "./hashrouter/transformhashparams.ts";
import { Router } from "./Router";
import { RouteRecord } from "./RouteRecord";
//@ts-ignore
import { getsearchhref } from "./searchrouter/getsearchhref.ts";
//@ts-ignore
import { getsearchparams } from "./searchrouter/getsearchparams.ts"; //
//@ts-ignore
import { setsearchparams } from "./searchrouter/setsearchparams.ts"; //@ts-ignore
import { transformsearchparams } from "./searchrouter/transformsearchparams.ts";

export function createBaseRouter({
    routes = [],
    type,
}: {
    routes: RouteRecord[];
    type: "search" | "hash";
}): Router {
    const eventname = "search" === type ? "popstate" : "hashchange";

    const emitter = EventEmitterTargetClass();

    const changelistener = () => {
        const params = "hash" === type ? gethashparams() : getsearchparams();
        instance.emit("param", params);
    };

    window.addEventListener(eventname, changelistener);
    const router = {
        href: "hash" === type ? gethashhref : getsearchhref,

        set: "hash" === type ? sethashparams : setsearchparams,
        get: "hash" === type ? gethashparams : getsearchparams,
        transform:
            "hash" === type ? transformhashparams : transformsearchparams,
        [Symbol.toStringTag]: "search" === type ? "SearchRouter" : "HashRouter",
        routes: routes,
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
