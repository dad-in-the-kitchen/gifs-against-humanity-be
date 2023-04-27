import express from "express";
import mongoose from "mongoose";
import { ScenarioController } from "./scenario/scenario.contoller";
import { RoomController } from "./room/room.controller";

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://admin:admin@localhost:27017/mydb?authSource=admin");

app.use(express.json());

app.use(ScenarioController);
app.use(RoomController);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
