import { Module, HttpModule } from "@nestjs/common";
import { Denomod } from "./denomod_entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DenomodRepo } from "./denomod_repo";
import { DenomodService } from "./denomod_service";

@Module({
  imports: [TypeOrmModule.forFeature([Denomod, DenomodRepo]), HttpModule],
  providers: [DenomodService],
  exports: [DenomodService]
})
export class DenomodModule {}
