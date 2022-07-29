import { Response, Request, NextFunction } from "express";
import { ErrorResponse } from "../interfaces/ErrorResponse";

export function errorHandlerMiddleware(
  err: ErrorResponse | any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (isErrorResponse(err)) {
    const errTyped = err as ErrorResponse;

    res.json({
      err: {
        statusCode: errTyped.statusCode,
        message: errTyped.message,
      },
    });
  } else {
    res.json({
      err: {
        statusCode: 500,
        message: err,
      },
    });
  }
}

function isErrorResponse(error: ErrorResponse | any) {
  if (error.statusCode == undefined || error.message == undefined) return false;
  return true;
}
