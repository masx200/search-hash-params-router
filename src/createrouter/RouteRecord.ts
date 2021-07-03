import type { ComponentType } from "react";
import type { Component } from "@vue/runtime-core";
export interface RecordRoute {
    param: (opt: Record<string, string>) => boolean;
    component: ComponentReactOrVue;
}
export interface RecordRedirect {
    param: (opt: Record<string, string>) => boolean;
    redirect:
        | Record<string, string>
        | ((opt: Record<string, string>) => Record<string, string>);
}
export type RouteRecord = RecordRoute | RecordRedirect;
export type ComponentReactOrVue = ComponentType<any> | Component;
