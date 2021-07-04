//@ts-ignore

import { createBaseRouter } from "../createbaserouter";
import { Router } from "../Router";
import { RouteRecord } from "../RouteRecord";

export function createSearchRouter(): Router {
    return createBaseRouter("search");
}
