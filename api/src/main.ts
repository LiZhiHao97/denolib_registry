import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app_module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8888);
}
bootstrap();
