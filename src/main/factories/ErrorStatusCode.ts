import { ErrorResponse } from "../interfaces/ErrorResponse";

class ErrorStatusCode implements ErrorResponse {
  constructor(public statusCode, public message) {}
}
