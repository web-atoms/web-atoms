import { StringHelper } from "../../../core/StringHelper.js";
import Assert from "../../Assert.js";

Assert.equals("this", StringHelper.fromCamelToHyphen("this"));
Assert.equals("this-is-test", StringHelper.fromCamelToHyphen("thisIsTest"));
Assert.equals("this-is-sample-test", StringHelper.fromCamelToHyphen("thisIsSampleTest"));