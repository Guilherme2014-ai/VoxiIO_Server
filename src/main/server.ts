import express, { Application } from "express";

// Middlewares
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";

class App {
  app: Application = express();

  constructor() {
    this.Middlewares();
    this.Routes();
    this.ErrorHandler();
  }

  Middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  Routes() {
    console.log("Routes !");
  }
  ErrorHandler() {
    this.app.use(errorHandlerMiddleware);
  }
}

export default new App().app;
