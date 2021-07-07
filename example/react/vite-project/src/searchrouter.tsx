import { createSearchRouter } from "../../../../dist/index";

const searchrouter = createSearchRouter();
console.log(searchrouter);
console.log(searchrouter.getparams());
searchrouter.on("params", (p) => {
    console.log(p);
});
export { searchrouter };
