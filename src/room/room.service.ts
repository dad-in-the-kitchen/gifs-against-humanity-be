import { CreatRoom, roomModel } from "./room.dto";

class RoomService {
  async createRoom(createRoom: CreatRoom) {
    const code = this.generateRoomCode();
    const { userId: id, userName: name } = createRoom;
    await roomModel.create({
      code,
      users: [{ id, name, admin: true, points: 0 }],
    });
    return code;
  }

  async getRooms() {
    return roomModel.find();
  }

  private generateRoomCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      code += chars[randomIndex];
    }
    return code;
  }
}

export const roomService = new RoomService();
