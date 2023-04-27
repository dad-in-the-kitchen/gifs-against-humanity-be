import mongoose from "mongoose";

export interface BaseRoomParams {
  userName: string;
  userId: string;
}

export interface CreatRoomParams extends BaseRoomParams {}

export interface JoinRoomParams extends BaseRoomParams {
  code: string;
}

enum RoomStatus {
  prepering = "prepering",
  playing = "playing",
  done = "done",
}

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  admin: Boolean,
  points: Number,
});

const roomSchema = new mongoose.Schema({
  code: String,
  status: { type: String, default: RoomStatus.prepering },
  currentUser: { type: String },
  users: [UserSchema],
});

export const roomModel = mongoose.model("room", roomSchema);
