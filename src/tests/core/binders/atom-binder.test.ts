import { AtomBinder } from "../../../core/AtomBinder.js";
import Assert from "../../Assert.js";


export default function() {

    const a = [1, 2];
    AtomBinder.clear(a);
    Assert.equals(0, a.length);

    AtomBinder.addItem(a, 1);
    Assert.equals(1, a.length);

    AtomBinder.removeItem(a, 4);
    Assert.equals(1, a.length);

    AtomBinder.removeItem(a, 1);
    Assert.equals(0, a.length);

    AtomBinder.removeItem(a, 4);

}