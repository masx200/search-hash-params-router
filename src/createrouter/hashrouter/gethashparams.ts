import { deserilizeparams } from "../deserilizeparams";

export function gethashparams() {
    return (
        (location.hash &&
            deserilizeparams ((location.hash.slice(1)))) ||
        {}
    );
}
