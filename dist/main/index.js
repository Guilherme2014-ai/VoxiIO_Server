"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var http_1 = __importDefault(require("http"));
var server_1 = __importDefault(require("./server"));
var SocketIO_1 = require("./libs/SocketIO");
var server = http_1.default.createServer(server_1.default);
var PORT = process.env.PORT || 80;
var IO = new SocketIO_1.SocketIO(server);
IO.init()
    .then(function () { return console.log("Socket IO Working"); })
    .catch(function (e) { return console.error(e); });
server.listen(PORT, function () { return console.log("Running on Port: ".concat(PORT)); });
