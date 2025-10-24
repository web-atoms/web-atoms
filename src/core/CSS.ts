export type CssNumber = number | string;

export function cssNumberToString(n: CssNumber, unit: string = "px"): string {
    if (typeof n === "number") {
        if (n === 0) {
            return n + "";
        }

        return n + unit;
    }
    return n;

}

export type ObjectPositionType = "" | "default" | "fill" | "contain" | "cover" | "none" | "scale-down" |
    "initial" | "inherit";