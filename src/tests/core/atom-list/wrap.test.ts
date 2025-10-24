import Assert from "../../Assert.js";
import "../../../core/AtomList.js";

export default function() {
    const list = [1, 2];

    list.watch((x) => {
        const a = x as [any, string, number, any];
        Assert.isTrue(typeof a[1] === "string");
    }, true);

    list.add(1);
}