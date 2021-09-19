import { Request, Response, NextFunction } from "express";
import { get } from "lodash";

export const requireUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = get(req, "user");

  if (!user) {
    return res
      .status(401)
      .send("Unauthorized. Please sign in before accessing the resource.");
  }

  return next();
};
