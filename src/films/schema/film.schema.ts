import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Film extends Document {
  @Prop()
  title: string;

  @Prop()
  episode_id: number;

  @Prop()
  opening_crawl: string;

  @Prop()
  director: string;

  @Prop()
  producer: string;

  @Prop()
  release_date: Date;

  @Prop()
  characters: [string];

  @Prop()
  planets: [string];

  @Prop()
  starships: [string];

  @Prop()
  vehicles: [string];

  @Prop()
  species: [string];

  @Prop()
  created: Date;

  @Prop()
  edited: Date;

  @Prop()
  url: string;

  @Prop()
  role: string;
}

export const FilmSchema = SchemaFactory.createForClass(Film);
