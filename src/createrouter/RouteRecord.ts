import type { ComponentType } from "react";
import type { Component } from "@vue/runtime-dom";
export interface RecordBase {
    name?: string | symbol | undefined;
    params: (opt: Record<string, string>) => boolean;
}
export interface RecordRoute extends RecordBase {
    component: ComponentReactOrVue | string;
}
export interface RecordRedirect extends RecordBase {
    redirect:
        | Record<string, string>
        | ((opt: Record<string, string>) => Record<string, string>);
}
export type RouteRecord = RecordRoute | RecordRedirect;
export type ComponentReactOrVue = ComponentType<any> | Component<any>;
