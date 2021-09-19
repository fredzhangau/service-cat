import { NextFunction, Request, Response } from "express";
import { createUser } from "../service/user.service";

export async function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await createUser(req.body);
    return next();
  } catch (e) {
    // Email address already used by another account
    return res.status(409).send(e.message);
  }
}
