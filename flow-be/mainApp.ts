import { Application, Request, Response } from "express";
import data from "./router/userRouter";
import staff from "./router/staffRouter";

export const mainApp = (app: Application) => {
  app.use("/api/v1", data);
  app.use("/api/v1", staff);
  app.get("/", (req: Request, res: Response) => {
    try {
      res.status(200).json({
        message: "working",
      });
    } catch (error) {
      res.status(404).json({
        message: "failed",
      });
    }
  });
};
