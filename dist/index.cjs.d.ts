import { EventEmitterTarget } from "@masx200/event-emitter-target";
import { ComponentType, ForwardRefExoticComponent, RefAttributes, MouseEvent, PropsWithChildren, FC } from "react";
import { forwardRef as forwardRefType } from "react";
import { createElement as createElementType } from "react";
import { useCallback as useCallbackType } from "react";
import { useState as useStateType } from "react";
import { useEffect as useEffectType } from "react";
import { Component } from "@vue/runtime-core";
type Router = EventEmitterTarget & RawRouter;
type RawRouter = {
    mount: () => void;
    unmount: () => void;
    paramshref: (to: Record<string, string> | ((old: Record<string, string>) => Record<string, string>)) => string;
    setparams: (opt: Record<string, string>) => void;
    getparams: () => {
        [k: string]: string;
    };
    transformparams: (opt: (old: Record<string, string>) => Record<string, string>) => void;
    [Symbol.toStringTag]: string;
};
declare function createHashRouter(): Router;
declare function createSearchRouter(): Router;
interface RecordBase {
    name?: string | symbol | undefined;
    params: (opt: Record<string, string>) => boolean;
}
interface RecordRoute extends RecordBase {
    component: ComponentReactOrVue;
    props?: Record<string, any>;
    children?: Array<any>;
}
interface RecordRedirect extends RecordBase {
    redirect: Record<string, string> | ((opt: Record<string, string>) => Record<string, string>);
}
type RouteRecord = RecordRoute | RecordRedirect;
type ComponentReactOrVue = ComponentType<any> | Component;
declare function matchroute(routes: RouteRecord[], params: Record<string, string>): RouteRecord | undefined;
type ReactLinkComponent = ForwardRefExoticComponent<PropsWithChildren<{
    component?: string | ComponentType<any> | undefined;
    target?: string | undefined;
    onClick?: ((event: MouseEvent) => void) | undefined;
    to: Record<string, string> | ((old: Record<string, string>) => Record<string, string>);
}> & RefAttributes<unknown>>;
declare function createReactLink({ router, forwardRef, createElement }: {
    router: Router;
    forwardRef: typeof forwardRefType;
    createElement: typeof createElementType;
}): ReactLinkComponent;
declare function createReactView({ router, useCallback, createElement, useState, useEffect }: {
    router: Router;
    useCallback: typeof useCallbackType;
    createElement: typeof createElementType;
    useState: typeof useStateType;
    useEffect: typeof useEffectType;
}): FC<{
    routes: RouteRecord[];
}>;
declare function createVueLink(): void;
declare function createVueView(): void;
export { createHashRouter, createSearchRouter, Router, RawRouter, RecordBase, RecordRoute, RecordRedirect, RouteRecord, ComponentReactOrVue, matchroute, ReactLinkComponent, createReactLink, createReactView, createVueLink, createVueView };
