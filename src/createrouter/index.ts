//@ts-ignore
import { createBaseRouter } from "./createbaserouter";
import { createHashRouter } from "./hashrouter/createhashrouter"; //@ts-ignore
import { createPathRouter } from "./pathrouter/createpathrouter";
import { createSearchRouter } from "./searchrouter/createsearchrouter";

export { createHashRouter, createSearchRouter };
export * from "./Router";
export * from "./RouteRecord";
export { createBaseRouter };
export { createPathRouter };
