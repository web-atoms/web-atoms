import { parsePathLists } from "../../../core/ExpressionParser.js";
import Assert from "../../Assert.js";

const p = parsePathLists(`(x) => { var _a; return (_a = x.viewModel) === null
    || _a === void 0 ? void 0 : _a.cancel(); }) })`);
Assert.equals(0, p.thisPath.length);