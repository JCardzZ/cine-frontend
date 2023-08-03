import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { Peliculas } from './schema/peliculas.schema';

@Controller('peliculas')
export class PeliculasController {

    constructor(private peliculasService: PeliculasService) { }

    @Get('/listarPeliculas')
    async getAll() {
        return this.peliculasService.getAll();
    }

    @Post('/createMovie')
    async createMovie(@Body() peliculas: Peliculas) {
        return this.peliculasService.create(peliculas);

    }

    @Get("/:id")
    async getbyId(@Param('id') id:string){
        return this.peliculasService.getById(id);

    }

    @Put('/:id')
    async updateMovie(@Param('id') id:string,@Body() peliculas:Peliculas){
        return await this.peliculasService.update(id, peliculas);
    }

    @Delete("/:id")
    async deleteMovie(@Param('id') id:string){
    await this.peliculasService
    .delete(id);
    }
}
