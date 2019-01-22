import { Module } from "@nestjs/common";
import { BadgeModule } from "./badge/badge_module";

@Module({
  imports: [BadgeModule]
})
export class AppModule {}
