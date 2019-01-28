import { Module } from "@nestjs/common";
import { BadgeModule } from "./badge/badge_module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app_controller";

@Module({
  imports: [TypeOrmModule.forRoot(), BadgeModule],
  controllers: [AppController]
})
export class AppModule {}
