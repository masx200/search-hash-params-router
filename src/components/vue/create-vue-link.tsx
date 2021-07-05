import { Router } from "../../createrouter/Router";
import {
    Ref,
    Component as ComponentType,
    defineComponent as defineComponentType,
    h as hType,
} from "@vue/runtime-dom";
import { isModifiedEvent } from "../react/isModifiedEvent";
import { navigate } from "../navigate";
export { createVueLink };

function createVueLink({
    router,
    defineComponent,
    h: createElement,
}: {
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
}) {
    console.log(router, defineComponent, createElement);
    return defineComponent<{
        component?: string | ComponentType;
        to:
            | Record<string, string>
            | ((old: Record<string, string>) => Record<string, string>);
        onClick?: (event: MouseEvent) => void;
        target?: string;
        innerRef?: Ref;
    }>({
        setup(props, { slots: children }) {
            return () => {
                const {
                    component: Component = "a",
                    to,
                    onClick,
                    target,
                    innerRef,
                } = props;
                if (!to) {
                    throw new TypeError("object,function");
                }
                const href: string = router.paramshref(to);
                const newclick = (event: MouseEvent) => {
                    try {
                        if (onClick) {
                            onClick(event);
                        }
                    } catch (ex) {
                        event.preventDefault();
                        throw ex;
                    }
                    if (
                        !event.defaultPrevented &&
                        // onClick prevented default
                        event.button === 0 &&
                        // ignore everything but left clicks
                        (!target || target === "_self") &&
                        // let browser handle "target=_blank" etc.
                        !isModifiedEvent(event)
                        // ignore clicks with modifier keys
                    ) {
                        event.preventDefault();
                        navigate(router, to);
                    }
                };
                return;
            };
        },
    });
}
