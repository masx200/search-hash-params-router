import React, { Suspense, useRef, useEffect } from "react";
import { Link } from "./link";
import { Loading } from "./loading";
import { Programmaticnavigation } from "./Programmaticnavigation";
import { routes } from "./routes";
import { View } from "./view";
import Hooktest from "./hooktest";
export function RouterTest() {
    const refelement = useRef<Element>();
    useEffect(() => {
        console.log(refelement.current);
    }, [refelement.current]);
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <Hooktest />
                <Programmaticnavigation />
                <br />
                <Link to={{}} ref={refelement}>
                    start
                </Link>
                <br />
                <Link to={{ p: "home" }}>home</Link>
                <br />
                <Link to={{ p: "app" }}>app</Link>
                <br />
                <Link to={{ p: "redirect" }}>redirect</Link>
                <br />
                <Link to={{ foo: "foo1" }}>foo</Link>
                <br />
                <Link to={{ bar: "bar1", other: Math.random().toString() }}>
                    bar
                </Link>
                <br />
                <Link to={{ 404: "not" }}>404</Link>
            </div>
            <hr></hr>
            <div style={{ textAlign: "center" }}>
                <Suspense fallback={<Loading />}>
                    <View routes={routes} />
                </Suspense>
            </div>
        </div>
    );
}
