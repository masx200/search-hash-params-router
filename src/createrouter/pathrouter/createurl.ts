import { serilizesortobjectkey } from "../sortobjectkey";
import { getparams } from "./getparams";

export function createurl(opt: Record<string, string>): URL {
    if (Object.keys(opt).length === 0) {
        let url = new URL("./", location.href);
        return url;
    }
    const pathname = location.pathname;
    const p = getparams();
    //如果路径以/结尾,并且前一个参数找到了,那么设置到上一级目录
    if (pathname.endsWith("/") && Object.keys(p).length > 0) {
        let url = new URL(
            "../" + serilizesortobjectkey({ ...opt }),
            location.href
        );
        return url;
    } else {
        let url = new URL(serilizesortobjectkey({ ...opt }), location.href);
        return url;
    }
}
