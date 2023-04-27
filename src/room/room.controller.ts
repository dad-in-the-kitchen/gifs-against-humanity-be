import express from "express";
import { roomService } from "./room.service";
import { CreatRoom, JoinRoom } from "./room.dto";

export const RoomController = express.Router();

RoomController.post("/rooms", async (req, res) => {
  const params: CreatRoom = req.body;
  console.log(params);
  const code = await roomService.createRoom(params);
  res.send(`create room ${code}`);
});

RoomController.put("/rooms/:code", async (req, res) => {
  const code = req.params.code;
  console.log(code);
  const params: JoinRoom = req.body;
  console.log(params);
  res.send("join room");
});
