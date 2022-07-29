"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Middlewares
var errorHandlerMiddleware_1 = require("./middlewares/errorHandlerMiddleware");
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.Middlewares();
        this.Routes();
        this.ErrorHandler();
    }
    App.prototype.Middlewares = function () {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
    };
    App.prototype.Routes = function () {
        console.log("Routes !");
    };
    App.prototype.ErrorHandler = function () {
        this.app.use(errorHandlerMiddleware_1.errorHandlerMiddleware);
    };
    return App;
}());
exports.default = new App().app;
