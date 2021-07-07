import { EventEmitterTarget } from "@masx200/event-emitter-target";
import { ComponentType, ForwardRefExoticComponent, RefAttributes, MouseEvent, PropsWithChildren, FC } from "react";
import { forwardRef as forwardRefType } from "react";
import { createElement as createElementType } from "react";
import { useState as useStateType } from "react";
import { useEffect as useEffectType } from "react";
import { Component } from "@vue/runtime-core";
import { Ref } from "@vue/runtime-dom";
import { resolveComponent as resolveComponentType } from "@vue/runtime-dom";
import { Component as ComponentType$0 } from "@vue/runtime-dom";
import { defineComponent as defineComponentType } from "@vue/runtime-dom";
import { h as hType } from "@vue/runtime-dom";
import { watch as watchType } from "@vue/runtime-dom";
import { ref as refType } from "@vue/runtime-dom";
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
    component: ComponentReactOrVue | string;
    props?: Record<string, any>;
    children?: Array<any>;
}
interface RecordRedirect extends RecordBase {
    redirect: Record<string, string> | ((opt: Record<string, string>) => Record<string, string>);
}
type RouteRecord = RecordRoute | RecordRedirect;
type ComponentReactOrVue = ComponentType<any> | Component;
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
declare function createReactView({ router, createElement, useState, useEffect }: {
    router: Router;
    createElement: typeof createElementType;
    useState: typeof useStateType;
    useEffect: typeof useEffectType;
}): FC<{
    routes: RouteRecord[];
}>;
declare function createVueLink({ router, resolveComponent, defineComponent, h: createElement }: {
    resolveComponent: typeof resolveComponentType;
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
}): import("@vue/runtime-core").DefineComponent<{
    component?: string | ComponentType$0<any, any, any, import("@vue/runtime-core").ComputedOptions, import("@vue/runtime-core").MethodOptions> | undefined;
    to: Record<string, string> | ((old: Record<string, string>) => Record<string, string>);
    onClick?: ((event: MouseEvent) => void) | undefined;
    target?: string | undefined;
    innerRef?: Ref<any> | undefined;
}, {}, {}, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").EmitsOptions, string, import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    component?: unknown;
    to?: unknown;
    onClick?: unknown;
    target?: unknown;
    innerRef?: unknown;
} & {} & {
    component?: string | ComponentType$0<any, any, any, import("@vue/runtime-core").ComputedOptions, import("@vue/runtime-core").MethodOptions> | undefined;
    to?: Record<string, string> | ((old: Record<string, string>) => Record<string, string>) | undefined;
    onClick?: ((event: MouseEvent) => void) | undefined;
    target?: string | undefined;
    innerRef?: Ref<any> | undefined;
}>, {}>;
declare function createVueView({ onMounted, onUnmounted, router, resolveComponent, defineComponent, h: createElement, ref, watch, Fragment }: {
    onMounted: typeof import("@vue/runtime-dom").onMounted;
    onUnmounted: typeof import("@vue/runtime-dom").onUnmounted;
    resolveComponent: typeof resolveComponentType;
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
    ref: typeof refType;
    watch: typeof watchType;
    Fragment: typeof import("@vue/runtime-core").Fragment;
}): import("@vue/runtime-core").DefineComponent<{
    routes: RouteRecord[];
}, {}, {}, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").EmitsOptions, string, import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    routes?: unknown;
} & {} & {
    routes?: RouteRecord[] | undefined;
}>, {}>;
export { createHashRouter, createSearchRouter, Router, RawRouter, RecordBase, RecordRoute, RecordRedirect, RouteRecord, ComponentReactOrVue, ReactLinkComponent, createReactLink, createReactView, createVueLink, createVueView };
