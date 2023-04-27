import express from "express";
import { scenarioService } from "./scenario.service";

export const ScenarioController = express.Router();

ScenarioController.get("/scenarios", async (req, res) => {
  res.send(await scenarioService.getScenarios());
});

ScenarioController.post("/scenarios", async (req, res) => {
  const requestBody = req.body;
  console.log(requestBody);
  res.send(requestBody);
  // res.send(await scenarioService.createScenario("test"));
});
