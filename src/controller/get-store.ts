import { FastifyReply, FastifyRequest } from "fastify";
import { RequestError } from "./errors/request-error";
import { statusCode } from "../shared/constants/statusCode";
import { makeGetStore } from "../domain/useCase";
import { createSchema } from "./schemas";

export const GetStoreController = async (
  request: FastifyRequest<{ Querystring: GetStoreQueryString }>,
  response: FastifyReply
) => {
  const { id } = request.query;

  try {
    if (!id) throw new RequestError();
    const useCase = await makeGetStore().load({ id });

    return response.status(statusCode.OK).send(useCase);
  } catch (e) {
    response.status(e?.statusCode ?? 500).send(e);
  }
};

export type GetStoreQueryString = {
  id: string;
};

export type GetStoreResponse =
  | {
      uid: string;
      store: {
        name: string;
        contact?: string;
        location: {
          latitude: number;
          longitude: number;
        };
        additionalInfo?: string;
        tpa: boolean;
        mb: boolean;
        acquirer?: string[];
        notes?: string;
      };
    }
  | {};

export const GetStoreSchema = createSchema({
  querystring: "GetStoreQueryString",
  response: { 200: "GetStoreResponse" },
});
