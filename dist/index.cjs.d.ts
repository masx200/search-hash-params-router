import { EventEmitterTarget } from "@masx200/event-emitter-target";
import { ComponentType, ForwardRefExoticComponent, RefAttributes, MouseEvent } from "react";
import { forwardRef as forwardRefType } from "react";
import { createElement as createElementType } from "react";
import { Component } from "@vue/runtime-core";
type Router = EventEmitterTarget & RawRouter;
type RawRouter = {
    getcurrentroute: () => RecordRoute | RecordRedirect | undefined;
    mount: () => void;
    unmount: () => void;
    paramshref: (to: Record<string, string> | ((old: Record<string, string>) => Record<string, string>)) => string;
    setparams: (opt: Record<string, string>) => void;
    getparams: () => {
        [k: string]: string;
    };
    transformparams: (opt: (old: Record<string, string>) => Record<string, string>) => void;
    [Symbol.toStringTag]: string;
    getroutes: () => RouteRecord[];
};
interface RecordBase {
    name: string | symbol | undefined;
    params: (opt: Record<string, string>) => boolean;
}
interface RecordRoute extends RecordBase {
    component: ComponentReactOrVue;
}
interface RecordRedirect extends RecordBase {
    redirect: Record<string, string> | ((opt: Record<string, string>) => Record<string, string>);
}
type RouteRecord = RecordRoute | RecordRedirect;
type ComponentReactOrVue = ComponentType<any> | Component;
declare function createHashRouter({ routes }?: {
    routes?: RouteRecord[] | (() => RouteRecord[]);
}): Router;
declare function createSearchRouter({ routes }?: {
    routes?: RouteRecord[] | (() => RouteRecord[]);
}): Router;
type ReactLinkComponent = ForwardRefExoticComponent<Pick<{
    [key: string]: any;
    component?: string | ComponentType<any> | undefined;
    target?: string | undefined;
    onClick?: ((event: MouseEvent) => void) | undefined;
    to: Record<string, string> | ((old: Record<string, string>) => Record<string, string>);
}, string | number> & RefAttributes<unknown>>;
declare function createReactLink({ router, forwardRef, createElement }: {
    router: Router;
    forwardRef: typeof forwardRefType;
    createElement: typeof createElementType;
}): ReactLinkComponent;
export { createHashRouter, createSearchRouter, Router, RawRouter, RecordBase, RecordRoute, RecordRedirect, RouteRecord, ComponentReactOrVue, createReactLink, ReactLinkComponent };
