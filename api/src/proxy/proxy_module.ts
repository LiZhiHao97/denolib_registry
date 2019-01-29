import { Module } from "@nestjs/common";
import { ProxyController } from "./proxy_controller";
import { DenomodModule } from "../denomod/denomod_module";

@Module({
  imports: [DenomodModule],
  controllers: [ProxyController]
})
export class ProxyModule {}
