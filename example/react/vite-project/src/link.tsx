import { createElement, useEffect, useState } from "react";
import { createReactLink } from "../../../../dist/index";
import { searchrouter } from "./searchrouter";
const Link = createReactLink({
    router: searchrouter,
    useEffect,
    useState,
    createElement,
});
export { Link };
