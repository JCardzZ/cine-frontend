import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PeliculasModule } from './peliculas/peliculas.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/dbcine"),
    PeliculasModule,
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
