import { Schema, model } from "mongoose";

const SlotSchema = new Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      default: "available",
    },
  },
  { timestamps: true }
);
const SelectedSlotSchema = new Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      default: "available",
    },
  },
  { timestamps: true }
);

// export const Slot = model("Slot", SlotSchema);
export const SelectedSlot = model("SelectedSlot", SelectedSlotSchema);