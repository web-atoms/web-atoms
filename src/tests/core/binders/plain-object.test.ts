import { IWatchableObject, symbolBindable } from "../../../core/AtomBinder.js";
import { AtomWatcher } from "../../../core/AtomWatcher.js";
import Assert from "../../Assert.js";

interface ICustomer {
    firstName: string;
    lastName: string;
    name?: string;
    time?: number;
}


export default function() {
    const c: ICustomer = {
        firstName: "Akash",
        lastName: "Kava"
    };

    const bindable = c as IWatchableObject;
    let ba = bindable[symbolBindable];

    Assert.isTrue(!ba);

    const w = new AtomWatcher(c, [["firstName"], ["lastName"]], (firstName, lastName) => {
        c.name = `${firstName} ${lastName}`;
    });

    w.init(true);

    Assert.equals("Akash Kava", c.name);

    ba =  bindable[symbolBindable];
    Assert.isTrue(ba ? true : false);

    const i = ba.firstName;
    Assert.equals(1, i);

    c.firstName = "Simmi";
    Assert.equals("Simmi Kava", c.name);
}