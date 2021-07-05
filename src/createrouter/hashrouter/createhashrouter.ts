//@ts-ignore
import { createBaseRouter } from "../createbaserouter";
import { Router } from "../Router";
export type { Router };
export function createHashRouter(): Router {
    return createBaseRouter("hash");
}
