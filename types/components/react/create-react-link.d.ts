/// <reference types="react" />
import { Router } from "../../createrouter/Router";
export declare function createReactLink({ router, forwardRef, createElement, }: {
    router: Router;
    forwardRef: typeof import("react").forwardRef;
    createElement: typeof import("react").createElement;
}): import("react").ForwardRefExoticComponent<{
    target?: string | undefined;
    onClick?: ((event: import("react").MouseEvent) => void) | undefined;
    to: Record<string, string> | ((old: Record<string, string>) => Record<string, string>);
} & import("react").RefAttributes<HTMLAnchorElement>>;
