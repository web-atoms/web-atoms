import { AtomList } from "../../../core/AtomList.js";
import Assert from "../../Assert.js";

export default function() {
    const a = new AtomList();

    let modified = false;

    const d = a.watch(() => {
        modified = true;
    });

    a.add(1);

    Assert.isTrue(modified);

    modified = false;

    a.clear();

    Assert.isTrue(modified);

    a.add(4);
    a.add(5);

    modified = false;
    a.remove(5);

    Assert.isTrue(modified);

    d.dispose();
}