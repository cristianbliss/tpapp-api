import { FastifyInstance } from "fastify";
import { storeRoute } from "../../routes";

export const setUpRoutes = (app: FastifyInstance) => {
  app.register(storeRoute);
};
