import express from 'express';
import{CreateUser,LoginUser, verifyToken,MyAccount} from '../controllers/UserController.js';
import { auth   } from '../middleware/auth.js';
const userRouter=express.Router();

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user account with name, phone number, and password.
 *     tags:
 *       - Users
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Abd Algabar"
 *                 minLength: 2
 *                 description: User's full name.
 *
 *               phone:
 *                 type: string
 *                 example: "0991234567"
 *                 pattern: '^09\d{8}$'
 *                 description: Syrian phone number starting with 09 and containing 10 digits.
 *
 *               password:
 *                 type: string
 *                 example: "123456"
 *                 minLength: 6
 *                 description: User password (minimum 6 characters).
 *
 *     responses:
 *       201:
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "User created successfully"
 *
 *       400:
 *         description: Validation error or phone number already exists.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               examples:
 *                 missingFields:
 *                   value: "جميع الحقول مطلوبة"
 *                 shortName:
 *                   value: "الاسم قصير جدا"
 *                 invalidPhone:
 *                   value: "رقم الهاتف غير صحيح"
 *                 existingPhone:
 *                   value: "لا يمكنك استخدام هذا الرقم حاول برقم اخر"
 *                 shortPassword:
 *                   value: "كلمة السر قصيرا جدا يجب ادخال 6 محارف على الاقل"
 *
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Internal Server Error"
 */
userRouter.post('/register',CreateUser);

userRouter.post('/login',LoginUser);

userRouter.get('/verify',auth,verifyToken);

userRouter.get("/me",auth,MyAccount)

export default userRouter;
