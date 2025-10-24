import { StringHelper } from "../../../core/StringHelper.js";
import Assert from "../../Assert.js";

Assert.isFalse(StringHelper.containsIgnoreCase("", "Web"));
Assert.isTrue(StringHelper.containsIgnoreCase("web atoms", "Web"));
Assert.isTrue(StringHelper.containsIgnoreCase("web atoms", ""));