//@ts-ignore

import EventEmitterTargetClass from "@masx200/event-emitter-target";
//@ts-ignore
import { gethashhref } from "./hashrouter/gethashhref";
//@ts-ignore
import { gethashparams } from "./hashrouter/gethashparams";
//@ts-ignore
import { sethashparams } from "./hashrouter/sethashparams";
//@ts-ignore
import { transformhashparams } from "./hashrouter/transformhashparams";
import { matchroute } from "./matchroute";
import { RecordRedirect, RecordRoute, RouteRecord } from "./RouteRecord";
//@ts-ignore
import { getsearchhref } from "./searchrouter/getsearchhref";
//@ts-ignore
import { getsearchparams } from "./searchrouter/getsearchparams"; //
//@ts-ignore
import { setsearchparams } from "./searchrouter/setsearchparams"; //@ts-ignore
import { transformsearchparams } from "./searchrouter/transformsearchparams";
import { EventEmitterTarget } from "@masx200/event-emitter-target";
import { RawRouter } from "./Router";
export function createBaseRouter(
    routes: RouteRecord[],
    type: "search" | "hash"
): EventEmitterTarget & RawRouter {
    const eventname = "search" === type ? "popstate" : "hashchange";

    const emitter: EventEmitterTarget = EventEmitterTargetClass();
    let lastroute: RecordRoute | RecordRedirect | undefined = undefined;

    let currentroute: RecordRoute | RecordRedirect | undefined = undefined;
    const changelistener = () => {
        const params = "hash" === type ? gethashparams() : getsearchparams();
        instance.emit("params", params);
    };
    const onparamschange = (params: Record<string, string>) => {
        currentroute = matchroute(routes, params);
        if (lastroute !== currentroute) {
            instance.emit("route");
        }
        lastroute = currentroute;
    };
    function mount() {
        window.addEventListener(eventname, changelistener);

        instance.on("params", onparamschange);
        changelistener();
    }
    function unmount() {
        window.removeEventListener(eventname, changelistener);
        instance.off("params", onparamschange);
    }
    function getcurrentroute() {
        const params = instance.getparams();
        onparamschange(params);
        return currentroute;
    }

    const router: RawRouter = {
        getcurrentroute,

        mount,
        unmount,
        paramshref: "hash" === type ? gethashhref : getsearchhref,

        setparams: "hash" === type ? sethashparams : setsearchparams,
        getparams: "hash" === type ? gethashparams : getsearchparams,
        transformparams:
            "hash" === type ? transformhashparams : transformsearchparams,
        [Symbol.toStringTag]: "search" === type ? "SearchRouter" : "HashRouter",
        routes: routes,
    };

    const instance = { ...emitter, ...router } as EventEmitterTarget &
        typeof router;

    return instance as EventEmitterTarget & typeof router;
}
