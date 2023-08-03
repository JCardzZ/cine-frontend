import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PeliculasSchema } from './schema/peliculas.schema';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Peliculas',
            schema: PeliculasSchema,
            collection: 'cine'

        }])
    ],
    providers: [PeliculasService],
    controllers: [PeliculasController]
})
export class PeliculasModule {}
