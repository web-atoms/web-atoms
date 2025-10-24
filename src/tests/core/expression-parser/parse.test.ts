import { parsePath } from "../../../core/ExpressionParser.js";
import Assert from "../../Assert.js";

export default function() {
    // tslint:disable-next-line:variable-name
    const _this: any = {};

    const p = parsePath(() => {

        _this.value = _this.v1 + _this.m2 ( _this.v2, _this.m4( _this.v3, _this.v4 ));
        for (const _iterator of _this.v5) {
            _this.av = _this.v1 + _this.v2;
            // tslint:disable-next-line
            if (_this.v6 == _this.v7 && _this.v8=== _this.v9) {
                // tslint:disable-next-line:no-console
                console.log("ok");
            }
        }

    });

    // tslint:disable-next-line:no-console
    // console.log(JSON.stringify(p, undefined, 2));
    Assert.equals(9, p.filter( (px) => /^v/.test(px[0]) ).length );
    Assert.equals(0, p.filter( (px) => !/^v/.test(px[0]) ).length);
}