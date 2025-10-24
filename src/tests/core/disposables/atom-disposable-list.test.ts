import { AtomDisposableList } from "../../../core/AtomDisposableList.js";
import Assert from "../../Assert.js";

export default function() {
    let b: boolean = false;
    let e: boolean = false;
    const d = new AtomDisposableList();
    d.add(() => {
        b = true;
    });
    d.add({
        dispose() {
            e = true;
        }
    });
    d.dispose();

    Assert.isTrue(b);

    Assert.isTrue(e);

}