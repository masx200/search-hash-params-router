import { createHashRouter } from "../../../../dist/index";
const hashrouter = createHashRouter();
hashrouter.on("params", (p) => {
    console.log(p);
});
export { hashrouter };
