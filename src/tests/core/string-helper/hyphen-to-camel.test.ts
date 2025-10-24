import { StringHelper } from "../../../core/StringHelper.js";
import Assert from "../../Assert.js";

Assert.equals("this", StringHelper.fromHyphenToCamel("this"));
Assert.equals("thisIsTest", StringHelper.fromHyphenToCamel("this-is-test"));
Assert.equals("thisIsSampleTest", StringHelper.fromHyphenToCamel("this-is-sample-test"));