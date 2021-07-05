import type {
    ForwardRefExoticComponent,
    RefAttributes,
    ComponentType,
    MouseEvent,
    PropsWithChildren,
} from "react";

export type ReactLinkComponent = ForwardRefExoticComponent<
    PropsWithChildren<{
        component?: string | ComponentType<any> | undefined;
        target?: string | undefined;
        onClick?: ((event: MouseEvent) => void) | undefined;
        to:
            | Record<string, string>
            | ((old: Record<string, string>) => Record<string, string>);
    }> &
        RefAttributes<unknown>
>;
