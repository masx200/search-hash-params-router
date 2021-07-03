export interface RecordRoute {
    param: (opt: Record<string, string>) => boolean;
    component: ComponentReactOrVue;
}
export interface RecordRedirect {
    param: (opt: Record<string, string>) => boolean;
    redirect: (opt: Record<string, string>) => Record<string, string>;
}
export type RouteRecord = RecordRoute | RecordRedirect;
export type ComponentReactOrVue =
    | import("react").ComponentType<any>
    | import("@vue/runtime-core").Component;
