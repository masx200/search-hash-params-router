import isEqual from "lodash/isEqual";
import type {
    ComponentType,
    createElement as createElementType,
    FC,
    MouseEvent,
    PropsWithChildren,
    useEffect as useEffectType,
    useState as useStateType,
} from "react";
import { Router } from "../../createrouter/Router";
import { createclickhandler } from "../createclickhandler";
import { createReactParamsHook } from "./createReactParamsHook";
export function createReactLink({
    router,
    useState,
    useEffect,
    createElement,
}: {
    router: Router;
    useState: typeof useStateType;
    useEffect: typeof useEffectType;
    createElement: typeof createElementType;
}): FC<{
    component?: ComponentType<{
        innerRef?: { current: any } | ((current: any) => void);
        target?: string;
        href: string;
        isActive: boolean;
        navigate: (event?: MouseEvent) => void;
    }>;
    target?: string;
    onClick?: (event: MouseEvent) => void;
    to: Record<string, string>;
    innerRef?: { current: any } | ((current: any) => void);
}> {
    const useParams = createReactParamsHook({
        router,
        useState,
        useEffect,
    });
    return function ({
        component = linkcomponentdefault,
        target,
        to,
        onClick,
        innerRef,
        children,
        ...rest
    }) {
        const params = useParams();
        if (!to || !("object" === typeof to)) {
            throw new TypeError("object");
        }
        const href: string = router.paramshref(to);

        const isActive = isEqual(params, to);
        const navigate = createclickhandler({
            onClick,
            target,
            router,
            to,
        });
        return createElement(
            component,
            { innerRef, target, href, isActive, navigate, ...rest },
            children
        );
    };
    function linkcomponentdefault({
        innerRef,
        target,
        children,
        href,
        isActive,
        navigate,
        ...rest
    }: PropsWithChildren<{
        innerRef?: { current: any } | ((current: any) => void);
        target?: string;
        href: string;
        isActive: boolean;
        navigate: (event?: MouseEvent) => void;
    }>) {
        return createElement(
            "a",
            {
                ref: innerRef,
                target,
                href,
                onClick: navigate,
                "aria-current": isActive ? "page" : "false",
                ...rest,
            },
            children
        );
    }
}
