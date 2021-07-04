import { Component } from '@vue/runtime-core';
import { ComponentType } from 'react';
import { createElement } from 'react';
import { EventEmitterTarget } from '@masx200/event-emitter-target';
import { forwardRef } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { MouseEvent as MouseEvent_2 } from 'react';
import { RefAttributes } from 'react';

export declare type ComponentReactOrVue = ComponentType<any> | Component;

export declare function createHashRouter({ routes }?: {
    routes?: RouteRecord[] | (() => RouteRecord[]);
}): Router;

export declare function createReactLink({ router, forwardRef, createElement }: {
    router: Router;
    forwardRef: typeof forwardRef;
    createElement: typeof createElement;
}): ReactLinkComponent;

export declare function createSearchRouter({ routes }?: {
    routes?: RouteRecord[] | (() => RouteRecord[]);
}): Router;

export declare type RawRouter = {
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

export declare type ReactLinkComponent = ForwardRefExoticComponent<Pick<{
    [key: string]: any;
    component?: string | ComponentType<any> | undefined;
    target?: string | undefined;
    onClick?: ((event: MouseEvent_2) => void) | undefined;
    to: Record<string, string> | ((old: Record<string, string>) => Record<string, string>);
}, string | number> & RefAttributes<unknown>>;

export declare interface RecordBase {
    name: string | symbol | undefined;
    params: (opt: Record<string, string>) => boolean;
}

export declare interface RecordRedirect extends RecordBase {
    redirect: Record<string, string> | ((opt: Record<string, string>) => Record<string, string>);
}

export declare interface RecordRoute extends RecordBase {
    component: ComponentReactOrVue;
}

export declare type Router = EventEmitterTarget & RawRouter;

export declare type RouteRecord = RecordRoute | RecordRedirect;

export { }
