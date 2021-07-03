import type { Component } from '@vue/runtime-core';
import type { ComponentType } from 'react';
import type { createElement } from 'react';
import { EventEmitterTarget } from '@masx200/event-emitter-target';
import type { forwardRef } from 'react';
import type { ForwardRefExoticComponent } from 'react';
import type { MouseEvent as MouseEvent_2 } from 'react';
import type { RefAttributes } from 'react';

export declare type ComponentReactOrVue = ComponentType<any> | Component;

export declare function createHashRouter({ routes, }?: {
    routes?: RouteRecord[];
}): Router;

export declare function createReactLink({ router, forwardRef, createElement, }: {
    router: Router;
    forwardRef: typeof forwardRef;
    createElement: typeof createElement;
}): ReactLinkComponent;

export declare function createSearchRouter({ routes, }?: {
    routes?: RouteRecord[];
}): Router;

export declare type ReactLinkComponent = ForwardRefExoticComponent<Pick<{
    [key: string]: any;
    component?: string | ComponentType<any> | undefined;
    target?: string | undefined;
    onClick?: ((event: MouseEvent_2) => void) | undefined;
    to: Record<string, string> | ((old: Record<string, string>) => Record<string, string>);
}, string | number> & RefAttributes<unknown>>;

export declare interface RecordBase {
    name: string | symbol | undefined;
    param: (opt: Record<string, string>) => boolean;
}

export declare interface RecordRedirect extends RecordBase {
    redirect: Record<string, string> | ((opt: Record<string, string>) => Record<string, string>);
}

export declare interface RecordRoute extends RecordBase {
    component: ComponentReactOrVue;
}

export declare type Router = EventEmitterTarget & {
    on: (event: "param" | "route" | "redirect", callback: (p: Record<string, any>) => void) => void;
    off: (event: "param" | "route" | "redirect", callback: (p: Record<string, any>) => void) => void;
    set: (opt: Record<string, string>) => void;
    get: () => {
        [k: string]: string;
    };
    transform: (opt: (old: Record<string, string>) => Record<string, string>) => void;
    [Symbol.toStringTag]: string;
    href(opt: Record<string, string> | ((old: Record<string, string>) => Record<string, string>)): string;
    routes: Array<RouteRecord>;
};

export declare type RouteRecord = RecordRoute | RecordRedirect;

export { }
