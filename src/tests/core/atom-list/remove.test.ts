import { AtomList } from "../../../core/AtomList.js";
import Assert from "../../Assert.js";

export default function() {
    const list = new AtomList();

    Assert.isFalse(list.remove(4));

    Assert.isFalse(list.remove((item) => 5));

    list.addAll([1, 2]);

    Assert.isFalse(list.remove(4));

    Assert.isFalse(list.remove((item) => item === 5));

    Assert.isTrue(list.remove(1));

    Assert.isTrue(list.remove((item) => item === 2));

    Assert.isEmpty(list.length);
}