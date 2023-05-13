import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppServise } from "./app.service";
//import { Dialect } from "sequelize";
@Module({
	controllers: [AppController],
	providers: [AppServise],
  imports: [
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Vladik07',
    database: 'nest_course',
    models: [],
    synchronize: true
  }),
  ]
})

export class AppModule {}