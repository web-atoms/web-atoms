import { StringHelper } from "../../../core/StringHelper.js";
import Assert from "../../Assert.js";

Assert.equals("this", StringHelper.fromUnderscoreToCamel("this"));
Assert.equals("thisIsTest", StringHelper.fromUnderscoreToCamel("this_is_test"));
Assert.equals("thisIsSampleTest", StringHelper.fromUnderscoreToCamel("this_is_Sample_Test"));