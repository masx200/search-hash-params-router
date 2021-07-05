import type {
    ForwardRefExoticComponent,
    RefAttributes,
    ComponentType,
    MouseEvent,
} from "react";

export type ReactLinkComponent = ForwardRefExoticComponent<
    Pick<
        {
            [key: string]: any;
            component?: string | ComponentType<any> | undefined;
            target?: string | undefined;
            onClick?: ((event: MouseEvent) => void) | undefined;
            to:
                | Record<string, string>
                | ((old: Record<string, string>) => Record<string, string>);
        },
        string | number
    > &
        RefAttributes<unknown>
>;
