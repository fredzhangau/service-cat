import { Request, Response } from "express";

export const handleUndefined = async (req: Request, res: Response) => {
  res
    .status(404)
    .send(
      "The requested resource cannot be found. Please double-check the URI in the documentation on https://github.com/myco001/service-cat."
    );
};
