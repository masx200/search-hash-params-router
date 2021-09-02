import { deserilizeparams } from "../deserilizeparams";

export function getsearchparams() {
    return (
        (location.search && deserilizeparams(location.search.slice(1))) || {}
    );
}
