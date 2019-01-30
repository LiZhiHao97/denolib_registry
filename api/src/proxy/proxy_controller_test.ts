import { Test, TestingModule } from "@nestjs/testing";
import { ProxyController } from "./proxy_controller";
import { DenomodService } from "../denomod/denomod_service";
import { InvalidUrlException } from "../common/http_error";
import { HttpModule } from "@nestjs/common";

const mockDenomodService = {
  updateWeeplyDownloads: (scope: string, repo: string) => {}
};

describe("ProxyController", () => {
  let proxyController: ProxyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ProxyController]
    })
      .overrideProvider(DenomodService)
      .useValue(mockDenomodService)
      .compile();

    proxyController = app.get<ProxyController>(ProxyController);
  });

  describe("download", () => {
    it("should throw InvalidUrlException", () => {
      const invalidUrls = [
        "/proxy/zhmushan/abc",
        "/proxy/zhmushan",
        "/zhmushan/abc"
      ];
      for (const url of invalidUrls) {
        const req = { url };
        expect(proxyController.download(req as any, null)).rejects.toEqual(
          new InvalidUrlException()
        );
      }
    });
  });
});
