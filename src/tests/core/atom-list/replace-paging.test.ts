import { AtomList } from "../../../core/AtomList.js";
import Assert from "../../Assert.js";

export default function() {
    const list = new AtomList<number>();

    const r = [1, 2] as any;
    r.total = 10;

    list.addAll(r);

    const a = [4, 5] as any;
    a.total = 10;

    list.replace(a, 2, 2);

    Assert.equals(2, list.start);
    Assert.equals(2, list.size);
    Assert.equals(10, list.total);

    list.next();

    Assert.equals(4, list.start);

    list.prev();

    Assert.equals(2, list.start);

    list.prev();

    Assert.equals(0, list.start);

    list.prev();

    Assert.equals(0, list.start);

    list.start = 0;

    list.size = 2;
}