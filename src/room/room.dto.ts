import mongoose from "mongoose";

export interface CreatRoom {
  userName: string;
  userId: string;
}

export interface JoinRoom extends CreatRoom {}

const roomSchema = new mongoose.Schema({
  text: String,
});

export const roomModel = mongoose.model("room", roomSchema);
