import { createElement, useCallback, useEffect, useState } from "react";
import { createReactView } from "../../../../dist/index";
import { searchrouter } from "./searchrouter";
const View = createReactView({
    router: searchrouter,
    createElement,
    useCallback,
    useEffect,
    useState,
});
export { View };
