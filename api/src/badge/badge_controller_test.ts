import { Test, TestingModule } from "@nestjs/testing";
import { BadgeController } from "./badge_controller";

describe("Badge Controller", () => {
  let controller: BadgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BadgeController]
    }).compile();

    controller = module.get<BadgeController>(BadgeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
