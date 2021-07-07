import { createElement, useEffect, useState } from "react";
import { createReactView } from "../../../../dist/index";
import { searchrouter } from "./searchrouter";
const View = createReactView({
    router: searchrouter,
    createElement,

    useEffect,
    useState,
});
export { View };
