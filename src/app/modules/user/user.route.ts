import express from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from './user.constant'
import { userControllers } from './user.controller'

import { UserValidations } from './user.validation'
import { multerUpload } from '../../config/multer.config'
import validateImageFile from '../../middlewares/validateImageFile'
import { ImageFilesArrayZodSchema } from '../imageMultipleArrayzodSchema/image.validation'
import ValidateRequest from '../../middlewares/ValidateRequest'

const router = express.Router()
// user routes

router.post(
  '/create-user',
  multerUpload.fields([{ name: 'avatar' }]),
  validateImageFile(ImageFilesArrayZodSchema),
  userControllers.createUser,
)

router.get('/my-bookings', auth(USER_ROLE.user), userControllers.getMyBookings)
router.get('/users', auth(USER_ROLE.admin), userControllers.getAllUser)
router.get('/user-info', userControllers.getUserByEmail)
router.put(
  '/update-user/:id',
  ValidateRequest(UserValidations.updateUserValidationSchema),
  userControllers.updateUser,
)

export const UserRoutes = router