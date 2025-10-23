import { RegisterTransient } from "./di.js";

export default function DITransient(): ((target: any) => void) {
    return RegisterTransient;
}
