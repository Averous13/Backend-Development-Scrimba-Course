import { isEmpty } from "./isEmpty.js";

export function omitEmptyObject(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([, value]) => !isEmpty(value))
    )
}