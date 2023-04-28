import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppServise } from "./app.service";


@Module({
	controllers: [AppController],
	providers: [AppServise]
})

export class AppModule {}