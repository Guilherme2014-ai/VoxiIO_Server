import "reflect-metadata";

import http from "http";
import app from "./server";
import { SocketIO } from "./libs/SocketIO";
const server = http.createServer(app);

const PORT = process.env.PORT || 80;

const IO = new SocketIO(server);
IO.init()
  .then(() => console.log("Socket IO Working"))
  .catch((e) => console.error(e));

server.listen(PORT, () => console.log(`Running on Port: ${PORT}`));
