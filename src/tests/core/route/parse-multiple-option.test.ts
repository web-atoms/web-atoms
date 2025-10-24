import Route from "../../../core/Route.js";
import Assert from "../../Assert.js";

 let r = Route.create("/feed/posts/{id}/{c?}");
let p = r.matches("/feed/posts/3/5");
Assert.equals("3", p.id);
Assert.equals("5", p.c);

p = r.matches("/feed/posts/4");
Assert.equals("4", p.id);
Assert.equals(void 0, p.c);