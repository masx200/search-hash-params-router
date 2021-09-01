//@ts-ignore
//@ts-ignore

import { createBaseRouter } from "../createbaserouter";
import { Router } from "../Router";
//@ts-ignore
import { getsearchhref } from "./getsearchhref";
//@ts-ignore
import { getsearchparams } from "./getsearchparams"; //
//@ts-ignore
import { setsearchparams } from "./setsearchparams"; //@ts-ignore
import { transformsearchparams } from "./transformsearchparams";
export type { Router };

export function createSearchRouter(): Router {
    const opts = {
        toStringTag: "SearchRouter",
        eventname: "popstate",
        gethref: getsearchhref,

        setparams: setsearchparams,
        getparams: getsearchparams,
        transformparams: transformsearchparams,
    };
    return createBaseRouter(opts);
}
