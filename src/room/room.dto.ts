import mongoose from "mongoose";

export interface CreatRoom {
  userName: string;
  userId: string;
}

export interface JoinRoom extends CreatRoom {}

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
