import { parsePath } from "../../../../core/ExpressionParser.js";
import Assert from "../../../Assert.js";

const p = parsePath(" => this.firstName + ' ' + this.lastName");
Assert.equals(2, p.length);