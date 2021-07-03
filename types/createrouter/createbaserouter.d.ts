import { Router } from "./Router";
import { RouteRecord } from "./RouteRecord";
export declare function createBaseRouter({ routes, type, }: {
    routes: RouteRecord[];
    type: "search" | "hash";
}): Router;
