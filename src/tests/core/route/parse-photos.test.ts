import Route from "../../../core/Route.js";
import Assert from "../../Assert.js";

let r = Route.create("/@{channel}/photos/{start?}");

let p = r.matches("/@joren-duskeye-social/photoshoot-event-dmet");
Assert.isNull(p);