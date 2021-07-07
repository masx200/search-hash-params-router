import { createHashRouter } from "../../../../dist/index";
const hashrouter = createHashRouter();
console.log(hashrouter);
hashrouter.on("params", (p) => {
    console.log(p);
});
export { hashrouter };
