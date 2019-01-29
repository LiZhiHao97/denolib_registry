import { Module } from "@nestjs/common";
import { BadgeModule } from "./badge/badge_module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DenomodModule } from "./denomod/denomod_module";
import { ProxyModule } from "./proxy/proxy_module";

@Module({
  imports: [TypeOrmModule.forRoot(), BadgeModule, DenomodModule, ProxyModule]
})
export class AppModule {}
