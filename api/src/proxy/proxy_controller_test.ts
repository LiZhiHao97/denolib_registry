import { Test, TestingModule } from "@nestjs/testing";
import { ProxyController } from "./proxy_controller";
import { Response } from "express";
import { DenomodService } from "../denomod/denomod_service";

const mockDenomodService = {
  updateWeeplyDownloads: (scope: string, repo: string) => {}
};

describe("ProxyController", () => {
  let proxyController: ProxyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProxyController]
    })
      .overrideProvider(DenomodService)
      .useValue(mockDenomodService)
      .compile();

    proxyController = app.get<ProxyController>(ProxyController);
  });

  describe("master", () => {
    it("should redirect to download", () => {
      let targetUrl = "";
      const res = {
        redirect: (url: string) => {
          targetUrl = url;
        }
      } as Response;
      proxyController.master("zhmushan", "abc", "mod.ts", res);
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
      proxyController.download("zhmushan", "abc", "master", "mod.ts", res);
      expect(targetUrl).toBe(
        "https://raw.githubusercontent.com/zhmushan/abc/master/mod.ts"
      );
    });
  });
});
