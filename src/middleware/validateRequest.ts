import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";

// Validate user input request with schema.
export const validateRequest =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (err) {
      next(err);
    }
  };
