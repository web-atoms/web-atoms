import { AtomList } from "../../../core/AtomList.js";
import Assert from "../../Assert.js";

export default function() {
    const list = new AtomList<number>();

    list.add(2);

    const r = [1, 2];

    list.replace(r);

    Assert.equals(2, r.length);
}