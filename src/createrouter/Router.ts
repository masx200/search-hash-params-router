import { RecordRoute, RecordRedirect, RouteRecord } from ".";
import { createBaseRouter } from "./createbaserouter";
import { gethashhref } from "./hashrouter/gethashhref";
import { gethashparams } from "./hashrouter/gethashparams";
import { sethashparams } from "./hashrouter/sethashparams";
import { transformhashparams } from "./hashrouter/transformhashparams";
export type Router = ReturnType<typeof createBaseRouter>;
export type RawRouter = {
    getcurrentroute: () => RecordRoute | RecordRedirect | undefined;
    mount: () => void;
    unmount: () => void;
    paramshref: typeof gethashhref;
    setparams: typeof sethashparams;
    getparams: typeof gethashparams;
    transformparams: typeof transformhashparams;
    [Symbol.toStringTag]: string;
    routes: RouteRecord[];
};
