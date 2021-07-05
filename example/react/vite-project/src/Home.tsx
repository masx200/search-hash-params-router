import React from "react";

export default function Home({ children }: React.PropsWithChildren<{}>) {
    return (
        <div>
            <h1>home</h1>
            <div>{children}</div>
        </div>
    );
}
