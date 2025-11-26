import { Router } from "express";
import upload from "../config/multer.js";
import authMiddleware from "../middlewares/auth.middleware.js";
// import {} from "../middlewares/validators/auth.validator.js";

const userRouter = Router();

userRouter.get("/",)
userRouter.get("/:id", authMiddleware,)
userRouter.put("/:id", authMiddleware, upload.single("avatar"),)
userRouter.delete("/:id", authMiddleware)

export default userRouter