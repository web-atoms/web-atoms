import { StringHelper } from "../../../core/StringHelper.js";
import Assert from "../../Assert.js";

Assert.equals("This", StringHelper.fromPascalToTitleCase("This"));
Assert.equals("This Is Test", StringHelper.fromPascalToTitleCase("ThisIsTest"));
Assert.equals("This Is Sample Test", StringHelper.fromPascalToTitleCase("ThisIsSampleTest"));