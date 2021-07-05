import { createElement, forwardRef } from "react";
import { createReactLink } from "../../../../dist/index";
import { searchrouter } from "./searchrouter";
const Link = createReactLink({
    router: searchrouter,
    forwardRef,
    createElement,
});
export { Link };
