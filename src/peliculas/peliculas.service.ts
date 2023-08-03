import { Injectable } from '@nestjs/common';
import { Peliculas, PeliculasDocument } from './schema/peliculas.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PeliculasService {
    constructor(@InjectModel(Peliculas.name)
    private peliculasModel: Model<PeliculasDocument>,

    ) { }

    async getAll(): Promise<Peliculas[]> {
        return this.peliculasModel.find().exec();
    }

    async create(peliculas: Peliculas) {
        const newMovie = new this.peliculasModel(peliculas);
        return newMovie.save();
    }

    async getById(id:string){
        return this.peliculasModel.findById(id).exec();
    }

    async update(id:string, peliculas:Peliculas){
        return await this.peliculasModel.findByIdAndUpdate(id, peliculas, {
            new: true,
        });
    }

    async delete(id: string){
        await this.peliculasModel.findByIdAndDelete(id);
    }
}
