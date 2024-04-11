"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    /**
       * @param error.code
       * @param error.error
       * @param error.message
       * @param error.log
       * @param error.logStack
       */
    function ApiError(error) {
        var _a, _b, _c, _d, _e, _f;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        var _this = _super.call(this, (_a = error.error) !== null && _a !== void 0 ? _a : error.message) || this;
        _this.code = (_b = error.code) !== null && _b !== void 0 ? _b : 500;
        _this.message = (_d = (_c = error.error) !== null && _c !== void 0 ? _c : error.message) !== null && _d !== void 0 ? _d : undefined;
        console.log(error);
        _this.logStack = (_e = error.logStack) !== null && _e !== void 0 ? _e : false;
        _this.log = (_f = error.log) !== null && _f !== void 0 ? _f : false;
        return _this;
    }
    ApiError.prototype.toString = function () {
        var _a;
        return ((_a = this.logStack) !== null && _a !== void 0 ? _a : process.env.NODE_ENV === 'development') ? this.stack : _super.prototype.toString.call(this);
    };
    return ApiError;
}(Error));
exports.default = ApiError;
