import React from "react";
import { searchrouter } from "./searchrouter";
function onclick() {
    searchrouter.setparams({ qqqqq: Math.random().toString() });
}
export function Programmaticnavigation() {
    return <button onClick={onclick}>navigate </button>;
}
