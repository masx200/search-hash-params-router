import { EventEmitterTarget } from "@masx200/event-emitter-target";
import { ComponentType, FC, MouseEvent } from "react";
import { createElement as createElementType } from "react";
import { useEffect as useEffectType } from "react";
import { useState as useStateType } from "react";
import { Component } from "@vue/runtime-dom";
import { defineComponent as defineComponentType } from "@vue/runtime-dom";
import { h as hType } from "@vue/runtime-dom";
import { ref as refType } from "@vue/runtime-dom";
import { resolveComponent as resolveComponentType } from "@vue/runtime-dom";
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
}
interface RecordRedirect extends RecordBase {
    redirect: Record<string, string> | ((opt: Record<string, string>) => Record<string, string>);
}
type RouteRecord = RecordRoute | RecordRedirect;
type ComponentReactOrVue = ComponentType<any> | Component<any>;
type CustomReactLinkProps = Record<string, any> & {
    innerRef?: {
        current: any;
    } | ((current: any) => void);
    target?: string;
    href: string;
    isActive: boolean;
    navigate: (event?: MouseEvent) => void;
};
declare function createReactLink({ router, useState, useEffect, createElement }: {
    router: Router;
    useState: typeof useStateType;
    useEffect: typeof useEffectType;
    createElement: typeof createElementType;
}): FC<Record<string, any> & {
    component?: ComponentType<CustomReactLinkProps>;
    target?: string;
    onClick?: (event: MouseEvent) => void;
    to: Record<string, string>;
    innerRef?: {
        current: any;
    } | ((current: any) => void);
}>;
declare function createReactParamsHook({ router, useState, useEffect }: {
    router: Router;
    useState: typeof useStateType;
    useEffect: typeof useEffectType;
}): () => Readonly<Record<string, string>>;
declare function createReactView({ router, createElement, useState, useEffect }: {
    router: Router;
    createElement: typeof createElementType;
    useState: typeof useStateType;
    useEffect: typeof useEffectType;
}): FC<{
    routes: RouteRecord[];
}>;
type CustomVueLinkProps = Record<string, any> & {
    innerRef?: {
        value: any;
    } | ((value: any) => void);
    target?: string;
    href: string;
    isActive: boolean;
    navigate: (event?: MouseEvent) => void;
};
declare function createVueLink({ router, resolveComponent, defineComponent, h: createElement, ref, onMounted, onUnmounted, readonly }: {
    ref: typeof refType;
    readonly: typeof import("@vue/runtime-dom").readonly;
    onMounted: typeof import("@vue/runtime-dom").onMounted;
    onUnmounted: typeof import("@vue/runtime-dom").onUnmounted;
    resolveComponent: typeof resolveComponentType;
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
}): Component<Record<string, any> & {
    component?: "string" | Component<CustomVueLinkProps>;
    to: Record<string, string>;
    onClick?: (event: MouseEvent) => void;
    target?: string;
    innerRef?: ((r: any) => void) | {
        value: any;
    };
}>;
declare function createVueParamsHook({ router, ref, onMounted, onUnmounted, readonly }: {
    readonly: typeof import("@vue/runtime-dom").readonly;
    onMounted: typeof import("@vue/runtime-dom").onMounted;
    router: Router;
    ref: typeof refType;
    onUnmounted: typeof import("@vue/runtime-dom").onUnmounted;
}): () => {
    readonly value: {
        readonly [x: string]: string;
    };
};
declare function createVueView({ readonly, onMounted, onUnmounted, router, resolveComponent, defineComponent, h: createElement, ref }: {
    readonly: typeof import("@vue/runtime-dom").readonly;
    onMounted: typeof import("@vue/runtime-dom").onMounted;
    onUnmounted: typeof import("@vue/runtime-dom").onUnmounted;
    resolveComponent: typeof resolveComponentType;
    router: Router;
    defineComponent: typeof defineComponentType;
    h: typeof hType;
    ref: typeof refType;
}): Component<{
    routes: RouteRecord[];
}>;
export { createHashRouter, createSearchRouter, Router, RawRouter, RecordBase, RecordRoute, RecordRedirect, RouteRecord, ComponentReactOrVue, CustomReactLinkProps, createReactLink, createReactView, createReactParamsHook, createVueLink, CustomVueLinkProps, createVueView, createVueParamsHook };
