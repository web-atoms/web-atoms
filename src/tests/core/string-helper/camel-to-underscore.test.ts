import { StringHelper } from "../../../core/StringHelper.js";
import Assert from "../../Assert.js";

Assert.equals("this", StringHelper.fromCamelToUnderscore("this"));
Assert.equals("this_is_test", StringHelper.fromCamelToUnderscore("thisIsTest"));
Assert.equals("this_is_sample_test", StringHelper.fromCamelToUnderscore("thisIsSampleTest"));