import { EventEmitterTarget } from "@masx200/event-emitter-target";
import { RouteRecord } from "./RouteRecord";
export type Router = EventEmitterTarget & {
    on: (
        event: "param" | "route" | "redirect",
        callback: (p: Record<string, any>) => void
    ) => void;
    off: (
        event: "param" | "route" | "redirect",
        callback: (p: Record<string, any>) => void
    ) => void;
    set: (opt: Record<string, string>) => void;
    get: () => {
        [k: string]: string;
    };
    transform: (
        opt: (old: Record<string, string>) => Record<string, string>
    ) => void;
    [Symbol.toStringTag]: string;
    href(
        opt:
            | Record<string, string>
            | ((old: Record<string, string>) => Record<string, string>)
    ): string;
    routes: Array<RouteRecord>;
};
