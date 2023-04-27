import { scenarioModel } from "./scenario.dto";

class ScenarioService {
  async createScenario(text: string) {
    return scenarioModel.create({ text });
  }

  async getScenarios() {
    return scenarioModel.find();
  }
}

export const scenarioService = new ScenarioService();
