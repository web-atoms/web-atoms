import { AtomBinder } from "../../../core/AtomBinder.js";
import Assert from "../../Assert.js";

export default function() {
    Assert.throws("Target Array to watch cannot be null", () =>
        AtomBinder.add_CollectionChanged(null, null));
    Assert.throws("Target handle to watch an Array cannot be null", () =>
        AtomBinder.add_CollectionChanged([], null));
}