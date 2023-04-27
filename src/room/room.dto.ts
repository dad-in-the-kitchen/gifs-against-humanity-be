import mongoose from "mongoose";

export interface BaseRoomParams {
  userName: string;
  userId: string;
}

export interface CreatRoomParams extends BaseRoomParams {}

export interface JoinRoom extends BaseRoomParams {
  code: string;
}

enum RoomStatus {
  prepering = "prepering",
  playing = "playing",
  done = "done",
}

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  admin: Boolean,
  points: Number,
});

const roomSchema = new mongoose.Schema({
  users: [UserSchema],
  code: String,
  status: { type: String, default: RoomStatus.prepering },
});

export const roomModel = mongoose.model("room", roomSchema);
