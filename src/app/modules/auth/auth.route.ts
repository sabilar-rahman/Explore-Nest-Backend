import express from 'express'
import { AuthValidation } from './auth.validation'
import { userControllers } from '../user/user.controller'
import { UserValidations } from '../user/user.validation'
import { multerUpload } from '../../config/multer.config'

import { parseBody } from '../../middlewares/bodyParser'
import ValidateRequest from '../../middlewares/ValidateRequest'
import { AuthControllers } from './auth.controller'
import validateImageFile from '../../middlewares/validateImageFile'
import { ImageFilesArrayZodSchema } from '../imageMultipleArrayzodSchema/image.validation'

const router = express.Router()

router.post(
  '/login',
  ValidateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
)
router.post(
  '/registration',
  multerUpload.fields([{ name: 'image' }]),
  validateImageFile(ImageFilesArrayZodSchema),
  parseBody,
  ValidateRequest(UserValidations.createUserValidationSchema),
  userControllers.createUser,
)
export const AuthRoutes = router