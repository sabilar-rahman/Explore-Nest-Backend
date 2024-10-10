
import httpStatus from "http-status";
// import { getMyBookingsFromDB } from "./myBooking.service";
import catchAsync from "../utils/catchAsync";
import { getMyBookingsFromDB } from "./myBooking.service";

export const getMyBookings = catchAsync(async (req, res) => {
  const myBookings = await getMyBookingsFromDB(
    req.headers.authorization as string
  );
  if (!myBookings.length) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "No Data Found",
      data: [],
    });
  }
  res.status(200).json({
    status: httpStatus.OK,
    message: "User bookings retrieved successfully",
    success: true,
    data: myBookings,
  });
});