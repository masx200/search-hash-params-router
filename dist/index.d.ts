import type { Component } from '@vue/runtime-core';
import type { ComponentType } from 'react';
import type { createElement } from 'react';
import { EventEmitterTarget } from '@masx200/event-emitter-target';
import type { FC } from 'react';
import type { forwardRef } from 'react';
import type { ForwardRefExoticComponent } from 'react';
import type { MouseEvent as MouseEvent_2 } from 'react';
import type { RefAttributes } from 'react';
import type { useCallback } from 'react';
import type { useEffect } from 'react';
import type { useState } from 'react';

export declare type ComponentReactOrVue = ComponentType<any> | Component;

export declare function createHashRouter(): Router;

export declare function createReactLink({ router, forwardRef, createElement, }: {
    router: Router;
    forwardRef: typeof forwardRef;
    createElement: typeof createElement;
}): ReactLinkComponent;

export declare function createReactView({ router, useCallback, createElement, useState, useEffect, }: {
    router: Router;
    useCallback: typeof useCallback;
    createElement: typeof createElement;
    useState: typeof useState;
    useEffect: typeof useEffect;
}): FC<{
    routes: RouteRecord[];
}>;

export declare function createSearchRouter(): Router;

export declare function createVueLink(): void;

export declare function createVueView(): void;

export declare type RawRouter = {
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

export declare type ReactLinkComponent = ForwardRefExoticComponent<Pick<{
    [key: string]: any;
    component?: string | ComponentType<any> | undefined;
    target?: string | undefined;
    onClick?: ((event: MouseEvent_2) => void) | undefined;
    to: Record<string, string> | ((old: Record<string, string>) => Record<string, string>);
}, string | number> & RefAttributes<unknown>>;

export declare interface RecordBase {
    name?: string | symbol | undefined;
    params: (opt: Record<string, string>) => boolean;
}

export declare interface RecordRedirect extends RecordBase {
    redirect: Record<string, string> | ((opt: Record<string, string>) => Record<string, string>);
}

export declare interface RecordRoute extends RecordBase {
    component: ComponentReactOrVue;
    props?: Record<string, any>;
    children?: Array<any>;
}

export declare type Router = EventEmitterTarget & RawRouter;

export declare type RouteRecord = RecordRoute | RecordRedirect;

export { }
