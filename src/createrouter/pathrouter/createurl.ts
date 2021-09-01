import { serilizesortobjectkey } from "../sortobjectkey";

export function createurl(opt: Record<string, string>) {
    let url = new URL(serilizesortobjectkey({ ...opt }), location.href);
    return url;
}
