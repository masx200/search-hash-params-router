import React from "react";
import { Link } from "./link";
import { routes } from "./routes";
import { View } from "./view";

export function RouterTest() {
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <Link to={{}}>start</Link>
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
            <div style={{ textAlign: "center" }}>
                <View routes={routes} />
            </div>
        </div>
    );
}
