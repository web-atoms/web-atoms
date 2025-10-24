import Route from "../../../core/Route.js";
import Assert from "../../Assert.js";

 let r = Route.create("/feed/post/{id?}", ["a"]);
let p = r.matches("/feed/post/3", new URLSearchParams("a=4"));
Assert.equals("3", p.id);
Assert.equals("4", p.a);
p = r.matches("/feed/posts/3", new URLSearchParams("a=4"));
Assert.isNull(p);

let url = r.substitute({ id: 2, a: 9});
Assert.equals("/feed/post/2?a=9&", url);

r = Route.create("/feed/post/{id?}", ["a={anchor}"]);
p = r.matches("/feed/post/3", new URLSearchParams("a=4"));
Assert.equals("3", p.id);
Assert.equals("4", p.anchor);
p = r.matches("/feed/posts/3", new URLSearchParams("a=4"));
Assert.isNull(p);

url = r.substitute({ id: 2, anchor: 9});
Assert.equals("/feed/post/2?a=9&", url);