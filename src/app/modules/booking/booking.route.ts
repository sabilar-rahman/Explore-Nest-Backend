import { Router } from "express";

import ValidateRequest from "../../middlewares/ValidateRequest";

import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import BookingSchema from "./booking.validation";
import { BookingControllers } from "./booking.controller";

const router = Router();

router.post(
  "/",

  ValidateRequest(BookingSchema),
  BookingControllers.createBooking
);

// router.get("/", auth(USER_ROLE.admin), BookingControllers.getAllBookings);
router.get("/", auth(USER_ROLE.admin), BookingControllers.getAllBookings);

router.get("/:email", BookingControllers.getBookingsByEmail);

export const bookingRoutes = router;