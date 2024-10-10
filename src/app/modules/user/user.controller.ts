/* eslint-disable no-undef */
import httpStatus from "http-status";
// import catchAsync from "../../utils/catchAsync";
// import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";
import { NextFunction, Request, Response } from "express";
import config from "../../config";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import { TUser } from "./user.interface";

const createUser = catchAsync(async (req, res) => {
  const userData = req.body
  const userInfo = req.body
  const files = req.files as { avatar?: Express.Multer.File[] }
  const userAvatar = files?.avatar?.[0]?.path

  const userData: TUser = {
    ...userInfo,
    avatar: userAvatar,
  }

  const result = await userServices.createUserIntoDb(userData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  })
})
const getAllUser = catchAsync(async (req, res) => {
  const result = await User.find()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  })
})
const getUserByEmail = catchAsync(async (req, res) => {
  const token = req.headers.authorization
  const { email } = getUserInfoFromToken(token as string)
  const result = await userServices.getUserFromDB(email)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  })
})
const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const payload = req.body
  const result = await userServices.updateUserIntoDB(id, payload)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  })
})
const getMyBookings = catchAsync(async (req, res) => {
  const token = req.headers.authorization
  const { email } = getUserInfoFromToken(token as string)
  const result = await userServices.getMyBookingsFromDb(email)
  if (!result || result?.length === 0) {
    return handleNoDataResponse(res)
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User bookings retrieved successfully',
    data: result,
  })
})
export const userControllers = {
  createUser,
  getMyBookings,
  getAllUser,
  getUserByEmail,
  updateUser,
}