export interface Router {
    watch: (callback: (p: Record<string, string>) => void) => void;
    unwatch: (callback: (p: Record<string, string>) => void) => void;
    set: (opt: Record<string, string>) => void;
    get: () => {
        [k: string]: string;
    };
    transform: (opt: (old: Record<string, string>) => Record<string, string>) => void;
    [Symbol.toStringTag]: string;
    href(opt: Record<string, string> | ((old: Record<string, string>) => Record<string, string>)): string;
}
