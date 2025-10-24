import { StringHelper } from "../../../core/StringHelper.js";
import Assert from "../../Assert.js";

Assert.equals("this", StringHelper.fromPascalToCamel("This"));
Assert.equals("thisIsTest", StringHelper.fromPascalToCamel("ThisIsTest"));
Assert.equals("thisIsSampleTest", StringHelper.fromPascalToCamel("ThisIsSampleTest"));