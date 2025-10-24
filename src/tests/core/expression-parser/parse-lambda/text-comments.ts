import { parsePath } from "../../../../core/ExpressionParser.js";
import Assert from "../../../Assert.js";

const p = parsePath(`function(a) {
    // test a.firstName
    return a.firstName + ' ' + a.lastName;
}`);
Assert.equals(2, p.length);