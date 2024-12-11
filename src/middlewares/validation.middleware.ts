import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validateInput = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err: any) {
      res.status(400).json({
        error: err.errors ? err.errors : "Invalid input",
      });
    }
  };
};
