import { createHashRouter, matchRoute } from "../../../../dist/index";
const hashrouter = createHashRouter();
import { routes } from "./routes";
hashrouter.on("params", (p) => {
    console.log(p);
    console.log(matchRoute(routes, p));
});
export { hashrouter };
