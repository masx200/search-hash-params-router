import type {
    Component,
    defineComponent as defineComponentType,
    h as hType,
    ref as refType,
    resolveComponent as resolveComponentType,
    SetupContext,
} from "@vue/runtime-dom";
import isEqual from "lodash/isEqual";
import { Router } from "../../createrouter/Router";
import { createclickhandler } from "../createclickhandler";
import { createVueParamsHook } from "./createVueParamsHook";
export { createVueLink };

export type CustomVueLinkProps = Record<string, any> & {
    innerRef?: { value: any } | ((value: any) => void);
    target?: string;
    href: string;
    isActive: boolean;
    navigate: (event?: MouseEvent) => void;
};
export type DefaultVueLinkProps = Record<string, any> & {
    component?: "string" | Component<CustomVueLinkProps>;
    to: Record<string, string>;
    onClick?: (event: MouseEvent) => void;
    target?: string;
    innerRef?:
        | ((r: any) => void)
        | {
              value: any;
          };
};

function createVueLink({
    router,
    resolveComponent,
    defineComponent,
    h: createElement,
    ref,
    onMounted,
    onUnmounted,
    readonly,
}: {
    ref: typeof refType;
    readonly: typeof import("@vue/runtime-dom").readonly;
    onMounted: typeof import("@vue/runtime-dom").onMounted;
    onUnmounted: typeof import("@vue/runtime-dom").onUnmounted;
    resolveComponent: typeof resolveComponentType;
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
}): Component<DefaultVueLinkProps> {
    const useParams = createVueParamsHook({
        router,
        ref,
        onMounted,
        onUnmounted,
        readonly,
    });

    function linkcomponentdefault(
        { innerRef, target, href, navigate, isActive }: CustomVueLinkProps,
        { slots: children }: SetupContext
    ) {
        return createElement(
            //@ts-ignore
            "a",
            {
                ref: innerRef,
                target,
                href,
                onClick: navigate,
                "aria-current": isActive ? "page" : "false",
            },
            children
        );
    }

    linkcomponentdefault.inheritAttrs = true;

    linkcomponentdefault.props = [
        "innerRef",
        "target",
        "href",
        "isActive",
        "navigate",
    ];

    //@ts-ignore
    const Link: Component<DefaultVueLinkProps> = defineComponent({
        inheritAttrs: true,
        props: ["component", "to", "target", "onClick", "innerRef"],
        setup(props: DefaultVueLinkProps, { slots: children }) {
            const params = useParams();
            return () => {
                const {
                    component = linkcomponentdefault,
                    to,
                    onClick,
                    target,
                    innerRef: innerRef,
                } = props;

                if (!to || !("object" === typeof to)) {
                    throw new TypeError("object");
                }
                const href: string = router.gethref(to);
                const navigate = createclickhandler({
                    //@ts-ignore
                    onClick,
                    //@ts-ignore
                    target,
                    router,
                    //@ts-ignore
                    to,
                });
                const isActive = isEqual(params.value, to);
                const reffun =
                    "function" === typeof innerRef
                        ? innerRef
                        : innerRef && "object" === typeof innerRef
                        ? (e: any) => {
                              Reflect.set(innerRef, "value", e);
                          }
                        : undefined;

                const Resolvedcomponent =
                    "string" === typeof component
                        ? resolveComponent(component)
                        : component;

                return createElement(
                    //@ts-ignore
                    Resolvedcomponent,
                    { isActive, innerRef: reffun, href, navigate, target },
                    children
                );
            };
        },
    }) as Component<DefaultVueLinkProps>;
    return Link;
}
