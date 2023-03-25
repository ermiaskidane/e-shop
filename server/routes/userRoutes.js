import express from 'express'
// import Validate from '../middleware/valMiddleware.js'
import { body } from 'express-validator'
import { authUser, registerUser } from '../controllers/userControllers.js'

const router = express.Router()

router.post(
  '/',
  [
    body('name').not().isEmpty().withMessage('name should exist'),
    body('email').isEmail().withMessage('should be email'),
    body('password')
      .isLength({ min: 5 })
      .withMessage('password should be more than 5')
      .isNumeric()
      .withMessage('password should be only numbers'),
  ],
  registerUser
)

router.post('/login', authUser)

export default router
