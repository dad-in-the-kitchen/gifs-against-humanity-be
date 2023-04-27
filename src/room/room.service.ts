import { CreatRoomParams, JoinRoomParams, roomModel } from "./room.dto";

class RoomService {
  async createRoom(createRoomParams: CreatRoomParams) {
    const code = this.generateRoomCode();
    const { userId: id, userName: name } = createRoomParams;
    await roomModel.create({
      code,
      users: [{ id, name, admin: true, points: 0 }],
    });
    return code;
  }

  async joinRoom(joinRoomParams: JoinRoomParams) {
    const { code, userId: id, userName: name } = joinRoomParams;
    await roomModel.updateOne(
      { code },
      { $push: { users: { id, name, admin: false, points: 0 } } }
    );
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
