import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";
import { isString } from "util";


export type PeliculasDocument = Peliculas & Document


@Schema({collection: 'cine'})
export class Peliculas {

    @ApiProperty()
    @Prop()
    nombre:string;

    @ApiProperty()
    @Prop()
    poder:string;

    @ApiProperty()
    @Prop()
    productora:string;

    @ApiProperty()
    @Prop()
    imageUrl:string;

    @ApiProperty()
    @Prop()
    sinopsis:string;

    @ApiProperty()
    @Prop()
    observacion:string;
}

export const PeliculasSchema = SchemaFactory.createForClass(Peliculas)
