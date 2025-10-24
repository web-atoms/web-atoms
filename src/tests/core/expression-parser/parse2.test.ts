import { parsePath } from "../../../core/ExpressionParser.js";
import Assert from "../../Assert.js";

 const p = parsePath(`function () {
            this.dateChange(this["month"], this.year);
        }`);

Assert.equals(1, p.length);