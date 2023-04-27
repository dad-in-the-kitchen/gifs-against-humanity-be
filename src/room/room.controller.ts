import express from "express";
import { roomService } from "./room.service";
import { BaseRoomParams, CreatRoomParams, JoinRoomParams } from "./room.dto";

export const RoomController = express.Router();

// create room
RoomController.post("/rooms", async (req, res) => {
  const params: CreatRoomParams = req.body;
  const code = await roomService.createRoom(params);
  res.send(code);
});

// join room
RoomController.put("/rooms/:code", async (req, res) => {
  const code = req.params.code;
  const params: BaseRoomParams = req.body;
  await roomService.joinRoom({ ...params, code });

  res.send(`${params.userName} join room ${code}`);
});
