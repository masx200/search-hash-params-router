import { createSearchRouter, matchroute } from "../../../../dist/index";
import { routes } from "./routes";
const searchrouter = createSearchRouter();
console.log(searchrouter);
searchrouter.on("params", (p) => {
    console.log(p);

    console.log(matchroute(routes, p));
});
export { searchrouter };
