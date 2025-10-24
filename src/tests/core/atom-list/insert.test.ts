import { AtomList } from "../../../core/AtomList.js";
import Assert from "../../Assert.js";

export default function() {
     const list = new AtomList();

    list.addAll([1, 2]);

    list.insert(1, 5);

    Assert.equals(5, list[1]);
}