import Route from "../../../core/Route.js";
import Assert from "../../Assert.js";

 let r = Route.create("/preview/{*all}");
let p = r.matches("/preview/posts/3/5");
Assert.equals("posts/3/5", p.all);