import { StringHelper } from "../../../core/StringHelper.js";
import Assert from "../../Assert.js";

Assert.equals("This", StringHelper.fromCamelToPascal("this"));
Assert.equals("ThisIsTest", StringHelper.fromCamelToPascal("thisIsTest"));
Assert.equals("ThisIsSampleTest", StringHelper.fromCamelToPascal("thisIsSampleTest"));