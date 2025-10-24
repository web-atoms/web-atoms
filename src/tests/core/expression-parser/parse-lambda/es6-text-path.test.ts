import { parsePath } from "../../../../core/ExpressionParser.js";
import Assert from "../../../Assert.js";

const p = parsePath("(x) => x.data.messages");
Assert.equals(1, p.length);