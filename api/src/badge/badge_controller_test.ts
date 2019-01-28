import { Test, TestingModule } from "@nestjs/testing";
import { Response } from "express";
import { BadgeController } from "./badge_controller";
import { DenomodService } from "../denomod/denomod_service";
import { badgeConfig, DENOLIB_JSON_URL } from "../common/tool";

const mockDenomodService = {
  tryToRegister: (scope: string, repo: string) => {}
};

describe("AppController", () => {
  let badgeController: BadgeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BadgeController]
    })
      .overrideProvider(DenomodService)
      .useValue(mockDenomodService)
      .compile();

    badgeController = app.get<BadgeController>(BadgeController);
  });

  describe("generate", () => {
    it("should redirect to shields", () => {
      let targetUrl = "";
      const res = {
        redirect: (url: string) => {
          targetUrl = url;
        }
      } as Response;
      badgeController.generate("zhmushan", "abc", res);
      expect(targetUrl).toBe(
        `https://img.shields.io/badge/dynamic/json.svg?label=${
          badgeConfig.label
        }&query=${badgeConfig.query}&style=${
          badgeConfig.style
        }&url=${DENOLIB_JSON_URL("zhmushan", "abc")}`
      );
    });
  });
});
