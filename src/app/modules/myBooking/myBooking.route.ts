import { Router } from "express";

import { USER_ROLE } from "../user/user.constant";
import { getMyBookings } from "./myBooking.controller";
import auth from "../../middlewares/auth";

const router = Router();

router.get("/", auth(USER_ROLE.user), getMyBookings);

export const myBookingRoutes = router;