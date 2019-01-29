import { Module, HttpModule } from "@nestjs/common";
import { Denomod } from "./denomod_entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DenomodRepo } from "./denomod_repo";
import { DenomodService } from "./denomod_service";
import { DenomodController } from "./denomod_controller";
import { ElasticsearchModule } from "@nestjs/elasticsearch";

@Module({
  imports: [
    TypeOrmModule.forFeature([Denomod, DenomodRepo]),
    HttpModule,
    ElasticsearchModule.register({
      host: "localhost:9200",
      log: "trace"
    })
  ],
  controllers: [DenomodController],
  providers: [DenomodService],
  exports: [DenomodService]
})
export class DenomodModule {}
