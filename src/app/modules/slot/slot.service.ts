 
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { SelectedSlot} from "./slot.model";

import { TSlot } from "../service/service.interface";
import { Slot } from "../service/service.model";



const getAvailableSlots = async (serviceId: string, date: string) => {
  const slots = await Slot.find({
    service: serviceId,
    date: date,
    isBooked: "available",
  }).populate("service");

  return slots;
};
const createSelectedSlot = async (selectedSlotData: TSlot) => {
  const selectedSlot = await SelectedSlot.create(selectedSlotData);
  return selectedSlot;
};

const getAllSelectedSlots = async () => {
  const selectedSlotdata = await SelectedSlot.find().populate("service");
  return selectedSlotdata;
};
const getAllSlots = async () => {
  const slots = await Slot.find().populate("service");
  return slots;
};

const updateSlot = async (id: string, updatedData: Partial<TSlot>) => {
  const slot = await Slot.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  if (!slot) {
    throw new AppError(httpStatus.NOT_FOUND, "Slot not found");
  }
  return slot;
};

export const SlotServices = {
  getAvailableSlots,
  createSelectedSlot,
  getAllSelectedSlots,
  getAllSlots,
  updateSlot,
};