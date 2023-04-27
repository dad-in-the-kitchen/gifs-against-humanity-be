import { roomModel } from "./room.dto";

class RoomService {
  async createRoom(text: string) {
    return roomModel.create({ text });
  }

  async getRooms() {
    return roomModel.find();
  }
}

export const roomService = new RoomService();
