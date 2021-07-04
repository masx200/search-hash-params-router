//@ts-ignore
import { createBaseRouter } from "../createbaserouter";
import { Router } from "../Router";
import { RouteRecord } from "../RouteRecord";
export function createHashRouter(): Router {
    return createBaseRouter("hash");
}
