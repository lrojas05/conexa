import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Film extends Document {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true, unique: true })
  episode_id: number;

  @Prop({ required: true, unique: true })
  opening_crawl: string;

  @Prop({ required: true, unique: true })
  director: string;

  @Prop({ required: true, unique: true })
  producer: string;

  @Prop({ required: true, unique: true })
  release_date: Date;

  @Prop({ required: true, unique: true })
  characters: [string];

  @Prop({ required: true, unique: true })
  planets: [string];

  @Prop({ required: true, unique: true })
  starships: [string];

  @Prop({ required: true, unique: true })
  vehicles: [string];

  @Prop({ required: true, unique: true })
  species: [string];

  @Prop({ required: true, unique: true })
  created: Date;

  @Prop()
  edited: Date;

  @Prop({ required: true, unique: true })
  url: string;
}

export const FilmSchema = SchemaFactory.createForClass(Film);
