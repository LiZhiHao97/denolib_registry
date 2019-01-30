import { Module } from "@nestjs/common";
import { BadgeModule } from "./badge/badge_module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DenomodModule } from "./denomod/denomod_module";
import { ProxyModule } from "./proxy/proxy_module";
import { ormconfig } from "./ormconfig";
import { CommonEntity } from "./common/common_entity";
import { Denomod } from "./denomod/denomod_entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...ormconfig, entities: [CommonEntity, Denomod] }),
    BadgeModule,
    DenomodModule,
    ProxyModule
  ]
})
export class AppModule {}
