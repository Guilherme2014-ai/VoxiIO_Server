"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
function errorHandlerMiddleware(err, req, res, next) {
    if (isErrorResponse(err)) {
        var errTyped = err;
        res.json({
            err: {
                statusCode: errTyped.statusCode,
                message: errTyped.message,
            },
        });
    }
    else {
        res.json({
            err: {
                statusCode: 500,
                message: err,
            },
        });
    }
}
exports.errorHandlerMiddleware = errorHandlerMiddleware;
function isErrorResponse(error) {
    if (error.statusCode == undefined || error.message == undefined)
        return false;
    return true;
}
