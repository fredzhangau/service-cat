import { Express, Request, Response } from "express";
import { getCatBreedHandler } from "./controller/cat.controller";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  invalidateUserSessionHandler,
} from "./controller/session.controller";
import { createUserHandler } from "./controller/user.controller";
import {
  errorHandler,
  handleUndefined,
  validateRequest,
  requireUser,
} from "./middleware";
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schema/user.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // Register user
  app.post(
    "/api/users",
    validateRequest(createUserSchema),
    createUserHandler,
    createUserSessionHandler
  );

  // Sign in
  app.post(
    "/api/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  // Get the user's sessions
  app.get("/api/sessions", requireUser, getUserSessionsHandler);

  // Logout
  app.delete("/api/sessions", requireUser, invalidateUserSessionHandler);

  // Get cat breeds
  app.get("/api/cats/topfriendliness", requireUser, getCatBreedHandler);

  // Handle invalid routes
  app.get("/*", handleUndefined);
  app.post("/*", handleUndefined);
  app.put("/*", handleUndefined);
  app.delete("/*", handleUndefined);

  app.use(errorHandler);
}
