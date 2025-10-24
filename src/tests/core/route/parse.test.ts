import Route from "../../../core/Route.js";
import Assert from "../../Assert.js";

let r = Route.create("/public/jobs/{id?}");
let p = r.matches("/public/jobs/3");
Assert.equals("3", p.id);

p = r.matches("/public/jobs/a%20b");
Assert.equals("a b", p.id);

r = Route.create("/public/jobs/{id:number?}");
p = r.matches("/public/jobs/3");
Assert.equals(3, p.id);

Assert.isNull(r.matches("/public/jobs/a"));

Assert.isNotNull(r.matches("/public/jobs"));

r = Route.create("/public/jobs/{id:number?}");
p = r.matches("/public/jobs/3-");
Assert.isNull(p);