import {
    createPathRouter,
    deserializeParams,
    serializeParams,
} from "../dist/index";
import { test } from "vitest";
import assert from "assert";
test("pathrouter", async () => {
    history.pushState = function (a, b, c) {
        location.href = c.toString();
    };
    console.log(location.href);
    location.href = "http://localhost/";
    console.log(location.href);
    assert.equal(location.href, "http://localhost/");
    const pathrouter = createPathRouter();
    pathrouter.mount();
    console.log(pathrouter);
    pathrouter.on("params", console.log);
    console.log(pathrouter.getparams());
    assert.deepEqual({}, pathrouter.getparams());
    console.log(pathrouter.gethref({ d: "2", a: "1" }));
    assert.equal(
        "http://localhost/YT0xJmQ9Mg==",
        pathrouter.gethref({ d: "2", a: "1" })
    );
    pathrouter.setparams({ e: "6", p: "9" });
    console.log(location.href);
    assert.equal("http://localhost/ZT02JnA9OQ==", location.href);
    console.log(pathrouter.getparams());
    assert.deepEqual({ e: "6", p: "9" }, pathrouter.getparams());
    pathrouter.setparams({ f: "16", n: "99" });
    console.log(pathrouter.getparams());
    assert.deepEqual({ f: "16", n: "99" }, pathrouter.getparams());
    setTimeout(() => {
        pathrouter.unmount();
    }, 1000);
    pathrouter.setparams({});
    console.log(pathrouter.getparams());
    assert.deepEqual({}, pathrouter.getparams());
    let string = serializeParams({ foo: "bar", baz: "12321" });
    console.log(string);
    assert(typeof string === "string");
    assert(string.length > 0);
    assert.equal(string, "YmF6PTEyMzIxJmZvbz1iYXI=");
    let object = deserializeParams("YmF6PTEyMzIxJmZvbz1iYXI=");
    console.log(object);
    assert(typeof object === "object");
    assert.deepEqual(object, { baz: "12321", foo: "bar" });
});
