//@ts-ignore
import { createBaseRouter } from "../createbaserouter";
import { Router } from "../Router";
import { gethashhref } from "./gethashhref";
import { gethashparams } from "./gethashparams";
import { sethashparams } from "./sethashparams";
import { transformhashparams } from "./transformhashparams";
export type { Router };
export function createHashRouter(): Router {
    const opts = {
        toStringTag: "HashRouter",
        eventname: "hashchange",
        gethref: gethashhref,

        setparams: sethashparams,
        getparams: gethashparams,
        transformparams: transformhashparams,
    };
    return createBaseRouter(opts);
}
