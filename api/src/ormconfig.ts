import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const ormconfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "registry",
  synchronize: true
};
