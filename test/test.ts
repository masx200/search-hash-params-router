import {
    createPathRouter,
    deserilizeparams,
    serilizeparams,
} from "../dist/index";
const pathrouter = createPathRouter();
pathrouter.mount();
console.log(pathrouter);
pathrouter.on("params", console.log);
console.log(pathrouter.getparams());
console.log(pathrouter.gethref({ d: "2", a: "1" }));
pathrouter.setparams({ e: "6", p: "9" });
console.log(pathrouter.getparams());
pathrouter.setparams({ f: "6", n: "9" });
console.log(pathrouter.getparams());
setTimeout(() => {
    pathrouter.unmount();
}, 1000);
pathrouter.setparams({});
console.log(pathrouter.getparams());
let string = serilizeparams({ foo: "bar", baz: "12321" });
console.log(string);
let object = deserilizeparams("YmF6PTEyMzIxJmZvbz1iYXI=");
console.log(object);
