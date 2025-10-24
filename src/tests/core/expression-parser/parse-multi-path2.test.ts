import { parsePathLists } from "../../../core/ExpressionParser.js";
import Assert from "../../Assert.js";

 const p = parsePathLists(`function () {
            return _this.viewModel && _this.viewModel.comboBox.searchText && _this.viewModel.comboBox.searchText1;
        }`);

Assert.equals(2, p.thisPath.length);