import { serilizesortobjectkey } from "../sortobjectkey";

export function createurl(opt: Record<string, string>) {
    if (Object.keys(opt).length === 0) {
        let url = new URL("../", location.href);
        return url;
    }
    let url = new URL(serilizesortobjectkey({ ...opt }), location.href);
    return url;
}
