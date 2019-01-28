import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app_controller";
import { Response } from "express";
import { DenomodService } from "./denomod/denomod_service";

const mockDenomodService = {
  updateWeeplyDownloads: (scope: string, repo: string) => {}
};

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController]
    })
      .overrideProvider(DenomodService)
      .useValue(mockDenomodService)
      .compile();

    appController = app.get<AppController>(AppController);
  });

  describe("master", () => {
    it("should redirect to download", () => {
      let targetUrl = "";
      const res = {
        redirect: (url: string) => {
          targetUrl = url;
        }
      } as Response;
      appController.master("zhmushan", "abc", "mod.ts", res);
      expect(targetUrl).toBe("/proxy/zhmushan/abc@master/mod.ts");
    });
  });

  describe("download", () => {
    it("should redirect to github", () => {
      let targetUrl = "";
      const res = {
        redirect: (url: string) => {
          targetUrl = url;
        }
      } as Response;
      appController.download("zhmushan", "abc", "master", "mod.ts", res);
      expect(targetUrl).toBe(
        "https://raw.githubusercontent.com/zhmushan/abc/master/mod.ts"
      );
    });
  });
});
