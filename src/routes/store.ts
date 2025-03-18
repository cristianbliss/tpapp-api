import { FastifyInstance } from "fastify";
import { AddStoreController, AddStoreSchema } from "../controller";
import { authMiddleware } from "../shared/middleware/auth-middleware";
import { authorizationSchema } from "../controller/schemas";
import { GetStoreController, GetStoreSchema } from "../controller/get-store";
import { GetStoresController, GetStoresSchema } from "../controller/get-stores";

export async function storeRoute(route: FastifyInstance) {
  route.get(
    "/getStore",
    {
      //preHandler: [authMiddleware()],
      schema: {
        //headers: authorizationSchema,
        security: [
          {
            Authorization: [],
          },
        ],
        ...GetStoreSchema,
      },
    },
    async (request: any, response) =>
      await GetStoreController(request, response)
  );
  route.post(
    "/addStore",
    {
      //preHandler: [authMiddleware()],
      schema: {
        //headers: authorizationSchema,
        security: [
          {
            Authorization: [],
          },
        ],
        ...AddStoreSchema,
      },
    },
    async (request: any, response) =>
      await AddStoreController(request, response)
  );

  route.get(
    "/getStores",
    {
      // preHandler: [authMiddleware()],
      schema: {
        // headers: authorizationSchema,
        security: [
          {
            Authorization: [],
          },
        ],
        ...GetStoresSchema,
      },
    },
    async (request: any, response) =>
      await GetStoresController(request, response)
  );
}
