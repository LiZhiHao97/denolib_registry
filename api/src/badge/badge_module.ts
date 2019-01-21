import { Module } from "@nestjs/common";
import { BadgeController } from "./badge_controller";
import { BadgeService } from "./badge_service";

@Module({
  controllers: [BadgeController],
  providers: [BadgeService]
})
export class BadgeModule {}
