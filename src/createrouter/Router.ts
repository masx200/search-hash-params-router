import { EventEmitterTarget } from "@masx200/event-emitter-target";

export type Router = EventEmitterTarget & RawRouter;
export type RawRouter = {
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
};
