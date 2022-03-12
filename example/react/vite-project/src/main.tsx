import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./myfontandtextalign.css";
import { RouterTest } from "./routertest";

ReactDOM.render(<RouterTest />, document.getElementById("root"));
!(async () => {
    if (process.env.NODE_ENV === "production") {
        //@ts-ignore
        const { registerSW } = await import("virtual:pwa-register");

        registerSW({});
    }
})();
