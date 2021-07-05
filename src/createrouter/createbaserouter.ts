//@ts-ignore

import EventEmitterTargetClass, {
    EventEmitterTarget,
} from "@masx200/event-emitter-target";
//@ts-ignore
import debounce from "lodash/debounce";
//@ts-ignore
import { gethashhref } from "./hashrouter/gethashhref";
//@ts-ignore
import { gethashparams } from "./hashrouter/gethashparams";
//@ts-ignore
import { sethashparams } from "./hashrouter/sethashparams";
//@ts-ignore
import { transformhashparams } from "./hashrouter/transformhashparams";
import { RawRouter } from "./Router";
//@ts-ignore
import { getsearchhref } from "./searchrouter/getsearchhref";
//@ts-ignore
import { getsearchparams } from "./searchrouter/getsearchparams"; //
//@ts-ignore
import { setsearchparams } from "./searchrouter/setsearchparams"; //@ts-ignore
import { transformsearchparams } from "./searchrouter/transformsearchparams";
export function createBaseRouter(
    type: "search" | "hash"
): EventEmitterTarget & RawRouter {
    let mountcount = 0;
    const eventname = "search" === type ? "popstate" : "hashchange";

    const emitter: EventEmitterTarget = EventEmitterTargetClass();

    const changelistener = debounce(() => {
        const params = "hash" === type ? gethashparams() : getsearchparams();
        instance.emit("params", params);
    });
    function mount() {
        window.addEventListener(eventname, changelistener);

        changelistener();
        mountcount++;
    }
    function unmount() {
        mountcount--;
        if (mountcount <= 0) {
            window.removeEventListener(eventname, changelistener);
        }
    }

    const router: RawRouter = {
        mount,
        unmount,
        paramshref: "hash" === type ? gethashhref : getsearchhref,

        setparams: "hash" === type ? sethashparams : setsearchparams,
        getparams: "hash" === type ? gethashparams : getsearchparams,
        transformparams:
            "hash" === type ? transformhashparams : transformsearchparams,
        [Symbol.toStringTag]: "search" === type ? "SearchRouter" : "HashRouter",
    };

    const instance = { ...emitter, ...router } as EventEmitterTarget &
        typeof router;

    return instance as EventEmitterTarget & typeof router;
}
