import { StringHelper } from "../../../core/StringHelper.js";
import Assert from "../../Assert.js";

Assert.isFalse(StringHelper.containsAnyWordIgnoreCase("", "Web Atoms"));
Assert.isTrue(StringHelper.containsAnyWordIgnoreCase("web atoms", "Web Atoms"));
Assert.isTrue(StringHelper.containsAnyWordIgnoreCase("web atoms", ""));