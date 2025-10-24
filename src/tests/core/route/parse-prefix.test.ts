import Route from "../../../core/Route.js";
import Assert from "../../Assert.js";

let r = Route.create("/@{channel}/{tag}");

let p = r.matches("/@social/mail");
Assert.equals("social",p.channel);
Assert.equals("mail",p.tag);