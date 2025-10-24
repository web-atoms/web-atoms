import { PropertyBinding } from "../../../core/AtomControl.js";
import Assert from "../../Assert.js";

export default async function () {

    class SourceClass {

        public source: string = "5";
    }

    class DestinationClass {

        public destination: number;
    }

    const source = new SourceClass();
    const destination = new DestinationClass();

    const _pb = new PropertyBinding(
        destination,
        null,
        "destination",
        [["this", "source"]],
        true, {
            fromSource(v): any {
                return parseInt(v, 10);
            },
            fromTarget(v: any): any {
                return v + "";
            }
        }, source
    );

    Assert.equals(5, destination.destination);

    destination.destination = 10;
    Assert.equals("10", source.source);

    Assert.isNotEmpty(_pb);
}