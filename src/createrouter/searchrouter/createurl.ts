import { serilizesortobjectkey } from "../sortobjectkey";

export function createurl(opt: Record<string, string>) {
    let url = new URL(location.href);

    url.search = serilizesortobjectkey({ ...opt });
    return url;
}
