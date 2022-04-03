import { EventEmitterTarget } from "@masx200/event-emitter-target";
import { Routeroptions } from "./createbaserouter";

export type Router = EventEmitterTarget<{ params: Record<string, string> }> &
    RawRouter &
    Routeroptions;
export type RawRouter = {
    mount: () => void;
    unmount: () => void;
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
    [Symbol.toStringTag]: string;
};
