/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-undef */
import { Model, ObjectId } from "mongoose";

export interface ISlot {
  service: ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked" | "canceled";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SlotDocument extends ISlot, Document {}

export interface SlotModel extends Model<SlotDocument> {}


