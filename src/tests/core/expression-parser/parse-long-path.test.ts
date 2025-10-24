import { parsePathLists } from "../../../core/ExpressionParser.js";
import Assert from "../../Assert.js";

const p = parsePathLists(`function () {
            return _this.viewModel.comboBox.searchText;
        }`);

Assert.equals(1, p.thisPath.length);