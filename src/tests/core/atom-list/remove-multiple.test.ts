import Assert from "../../Assert.js";
import "../../../core/AtomList.js";

export default function() {
    let list = [1, 2, 3, 4, 5];

    // remove all even numbers...
    list.remove((x) => x <= 2);

    Assert.equals(3, list.length);



    list = [1, 2, 3, 4, 5];

    // remove all even numbers...
    list.remove((x) => (x % 2) === 0);

    Assert.equals(3, list.length);
}