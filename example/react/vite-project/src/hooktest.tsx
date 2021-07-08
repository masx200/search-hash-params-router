import { createReactParamsHook } from "../../../../dist";
import { searchrouter } from "./searchrouter";
import { useEffect, useState } from "react";
import React from "react";
const useParams = createReactParamsHook({
    router: searchrouter,
    useEffect,
    useState,
});
export default function Hooktest() {
    const params = useParams();
    useEffect(() => {
        console.log(params);
    }, [params]);
    return <div>params:{JSON.stringify(params)}</div>;
}
