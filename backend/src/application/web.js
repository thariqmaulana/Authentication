import express from "express";
import cors from "cors"
import { publicRouter } from "../route/public-api.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { userRouter } from "../route/api.js";

export const web = new express();
web.use(cors())
web.use(express.json());

web.use(publicRouter);
web.use(userRouter)

web.use(errorMiddleware);