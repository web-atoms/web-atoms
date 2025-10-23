import { RegisterSingleton } from "./di.js";

export default function DISingleton(): ((target: any) => void) {
    return RegisterSingleton;
}
