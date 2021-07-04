function isrouterecord(o: any) {
    return o && "object" === typeof o && "function" === typeof o.params;
}
export { isrouterecord };
