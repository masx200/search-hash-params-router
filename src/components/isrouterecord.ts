function isrouterecord(o) {
    return o && "object" === typeof o && "function" === typeof o.params;
}
export { isrouterecord };
