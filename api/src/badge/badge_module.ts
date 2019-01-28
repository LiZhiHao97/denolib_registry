import { Module } from "@nestjs/common";
import { BadgeController } from "./badge_controller";
import { DenomodModule } from "../denomod/denomod_module";

@Module({
  imports: [DenomodModule],
  controllers: [BadgeController],
  providers: []
})
export class BadgeModule {}
