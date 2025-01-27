// import mongoose, * as monogoose from 'mongoose';

// export const ManagerSchema = new mongoose.Schema({
//   first_name: { type: String, required: true },
//   last_name: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   avatar: { type: String },
// });

// import mongoose from 'mongoose';

// export const ManagerSchema = new mongoose.Schema({
//   first_name: { type: String, required: true },
//   last_name: { type: String, required: true },
//   email: { type: String, unique: true, required: true, lowercase: true },
//   password: { type: String, required: true },
//   avatar: { type: String }, // Optional, no required field
// }, { timestamps: true });

// schemas/manager.schema.ts
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type ManagerDocument = Manager & Document;

// @Schema()
// export class Manager {
//   @Prop({ required: true })
//   name: string;

//   @Prop({ required: true, unique: true })
//   email: string;

//   @Prop({ required: true })
//   password: string;
// }

// export const ManagerSchema = SchemaFactory.createForClass(Manager);

// schemas/manager.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum ManagerRole {
  CODER = 'Coder',
  MANAGER = 'Manager',
}

export type ManagerDocument = Manager & Document;

@Schema()
export class Manager {
  /**
   * Integer primary key for the manager (unique).
   * Make sure each Manager document has a unique 'id'.
   */
  @Prop({ type: Number, required: true, unique: true })
  id: number;

  @Prop({ type: String, required: true })
  first_name: string;

  @Prop({ type: String, required: true })
  last_name: string;

  /**
   * Email must be unique to avoid duplicates.
   */
  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  /**
   * Optional avatar field.
   */
  @Prop({ type: String, required: false })
  avatar?: string;

  /**
   * Role is restricted to 'Coder' or 'Manager'.
   */
  @Prop({ type: String, enum: ManagerRole, required: true })
  role: ManagerRole;
}

export const ManagerSchema = SchemaFactory.createForClass(Manager);
