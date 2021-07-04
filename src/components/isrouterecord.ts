function isrouterecord(o: any): boolean {
    return !!(o && "object" === typeof o && "function" === typeof o.params);
}
export { isrouterecord };
