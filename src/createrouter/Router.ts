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
    paramshref: (
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
    [Symbol.toStringTag]: string;
    routes: RouteRecord[];
};
