import React from "react";
import { searchrouter } from "./searchrouter";

export function Programmaticnavigation() {
    function onclick() {
        searchrouter.setparams({ qqqqq: Math.random().toString() });
    }
    return <button onClick={onclick}>navigate </button>;
}
