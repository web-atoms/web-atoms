import { AtomBinder } from "../../../core/AtomBinder.js";

export default function() {

    AtomBinder.refreshValue(undefined, "key");
    AtomBinder.refreshValue(null, "key");

    AtomBinder.add_WatchHandler(null, "", null);
    AtomBinder.invokeItemsEvent([], "", 0, {});
    AtomBinder.remove_WatchHandler(null, "", null);
    AtomBinder.remove_WatchHandler({}, "a", null);

    // tslint:disable-next-line: no-empty
    const f = () => {};
    const a = {};
    AtomBinder.add_WatchHandler(a, "a", f);
    AtomBinder.remove_WatchHandler(a, "b", f);
    AtomBinder.remove_WatchHandler(a, "a", f);

    AtomBinder.remove_CollectionChanged(null, null);
    AtomBinder.remove_CollectionChanged([], null);

    const ar = [];
    AtomBinder.invokeItemsEvent(null, "", 0, {});
    AtomBinder.add_WatchHandler(ar, "length", f);
    AtomBinder.invokeItemsEvent(ar, "", 0, {});
    AtomBinder.remove_CollectionChanged(ar, null);
}