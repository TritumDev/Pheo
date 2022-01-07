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
exports.__esModule = true;
exports.Client = void 0;
var events_1 = require("events");
var socket_io_client_1 = require("socket.io-client");
var Discord_1 = require("./src/Discord");
var API_URL = "https://pheonixapi.com/api";
var WEBSOCKET_URL = "https://pheonixapi.com/";
var Pheo = /** @class */ (function (_super) {
    __extends(Pheo, _super);
    function Pheo(master) {
        var _this = _super.call(this) || this;
        _this.io = (0, socket_io_client_1.connect)(WEBSOCKET_URL, {
            auth: {
                token: WEBSOCKET_URL
            }
        });
        _this.io.on("connect", function () { return _this.emit("connected", { id: _this.io.id }); });
        _this.discord = new Discord_1["default"](_this);
        return _this;
    }
    return Pheo;
}(events_1.EventEmitter));
exports.Client = Pheo;
