import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { SlotServices } from "./slot.service";

// ────────────────────────────────────────────────────────────────────────────────
// CONTROLLER FOR CREATING A NEW SLOT
// Handles the creation of a new slot and saves it to the database
// ────────────────────────────────────────────────────────────────────────────────
const getAvailableSlots = catchAsync(async (req, res) => {
  const { date, serviceId } = req.query;

  if (!date || !serviceId) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      statusCode: httpStatus.BAD_REQUEST,
      message: "Date and serviceId query parameters are  required",
    });
    return;
  }

  const slots = await SlotServices.getAvailableSlots(
    serviceId as string,
    date as string
  );

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Available slots retrieved successfully",
    data: slots,
  });
});

const createSelectedSlot = catchAsync(async (req, res) => {
  const selectedSlotData = req.body;
  const selectedSlot = await SlotServices.createSelectedSlot(selectedSlotData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Selected Slot created successfully",
    data: selectedSlot,
  });
});

const getAllSelectedSlots = catchAsync(async (req, res) => {
  const selectedSlots = await SlotServices.getAllSelectedSlots();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Selected  Slots retrieved successfully",
    data: selectedSlots,
  });
});

const getAllSlots = catchAsync(async (req, res) => {
  try {
    const slots = await SlotServices.getAllSlots();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Slots retrieved successfully",
      data: slots,
    });
  } catch (error) {
    console.log(error);
  }
});

const updateSlot = catchAsync(async (req, res) => {
  const slotId = req.params.id;
  const updatedData = req.body;
  const slot = await SlotServices.updateSlot(slotId, updatedData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "slot updated successfully",
    data: slot,
  });
});

export const SlotController = {
  getAvailableSlots,
  createSelectedSlot,
  getAllSelectedSlots,
  getAllSlots,
  updateSlot,
};
