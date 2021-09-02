//@ts-ignore

import EventEmitterTargetClass, {
    EventEmitterTarget,
} from "@masx200/event-emitter-target";
//@ts-ignore
import debounce from "lodash/debounce.js";
import { Router } from "./Router";
import { RawRouter } from "./Router";
export type Routeroptions = {
    toStringTag: string;
    eventname: string;
    gethref: (
        to:
            | Record<string, string>
            | ((old: Record<string, string>) => Record<string, string>)
    ) => string;
    setparams: (opt: Record<string, string>) => void;
    getparams: () => {
        [k: string]: string;
    };
    transformparams: (
        opt: (old: Record<string, string>) => Record<string, string>
    ) => void;
};

export function createBaseRouter({
    toStringTag,
    eventname,
    gethref,
    setparams,
    getparams,
    transformparams,
}: Routeroptions): Router {
    let mountcount = 0;
    // const eventname = "search" === type ? "popstate" : "hashchange";

    const emitter: EventEmitterTarget = EventEmitterTargetClass();

    const changelistener = debounce(() => {
        const params = getparams();
        // const params = "hash" === type ? gethashparams() : getsearchparams();
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
            changelistener.cancel();
            instance.removeAllListeners("params");
        }
    }

    const router: RawRouter = {
        mount,
        unmount,
        gethref: gethref,
        // gethref: "hash" === type ? gethashhref : getsearchhref,

        setparams: setparams,
        // setparams: "hash" === type ? sethashparams : setsearchparams,
        getparams: getparams,
        transformparams,
        // getparams: "hash" === type ? gethashparams : getsearchparams,
        // transformparams:
        //     "hash" === type ? transformhashparams : transformsearchparams,
        [Symbol.toStringTag]: toStringTag,
        // [Symbol.toStringTag]: "search" === type ? "SearchRouter" : "HashRouter",
    };

    const instance: Router = {
        ...emitter,
        ...router,
        toStringTag,
        eventname,
        gethref,
        setparams,
        getparams,
        transformparams,
    } as Router;

    return instance as Router;
}
