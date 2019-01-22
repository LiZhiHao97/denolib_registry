import { Module, HttpModule } from "@nestjs/common";
import { BadgeController } from "./badge_controller";
import { BadgeService } from "./badge_service";

@Module({
  imports: [HttpModule],
  controllers: [BadgeController],
  providers: [BadgeService]
})
export class BadgeModule {}
