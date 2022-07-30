import http from "http";
import { Server } from "socket.io";

export class SocketIO {
  constructor(private httpServer: http.Server) {}

  async init() {
    try {
      const io = this.getNewIO();
      io.on("connection", (socket) => {
        socket.on("message_join", (chatIds: any[]) => {
          if (chatIds)
            chatIds.map((chat) => {
              const createdRoom = `chat:${chat.id}`;

              socket.join(createdRoom);
            });
        });

        socket.on("new_message", (chatId, messageData, contactName: string) => {
          if (chatId && messageData) {
            socket
              .to(`chat:${chatId}`)
              .emit("message_receive", messageData, contactName);
          }
        });

        socket.on("contactConnect", (contactName: string, chats: any[]) => {
          if (chats && contactName)
            chats.map((chat) => {
              const chatId = chat.id;
              socket.to(`chat:${chatId}`).emit("contactGetOn", contactName);
            });
        });

        socket.on("message_action", (chatId: string, message: string) => {
          socket.to(`chat:${chatId}`).emit("message_receive", message);
        });

        socket.on("disconnect", (contactName: string) => {
          socket.broadcast.emit(contactName);
          socket.emit(contactName);
        });
      });
    } catch (e) {
      throw e;
    }
  }
  getNewIO() {
    try {
      return new Server(this.httpServer, { cors: { origin: "*" } });
    } catch (e) {
      throw e;
    }
  }
}
