import { FastifyReply, FastifyRequest } from "fastify";
import { statusCode } from "../shared/constants/statusCode";
import { createSchema } from "./schemas";
import { makeGetStores } from "../domain/useCase/get-stores";

export const GetStoresController = async (
  request: FastifyRequest<{ Body: GetStoresBody }>,
  response: FastifyReply
) => {
  try {
    const useCase = await makeGetStores().load();

    return response.status(statusCode.OK).send(useCase);
  } catch (e) {
    response.status(e?.statusCode ?? 500).send(e);
  }
};

export type GetStoresBody = {};

export type GetStoresResponse = {
  uid?: string;
  store?: {
    name?: string;
    contact?: string;
    location?: {
      latitude?: number;
      longitude?: number;
    };
    additionalInfo?: string;
    tpa?: boolean;
    mb?: boolean;
    acquirer?: string[];
    notes?: string;
  };
}[];

export const GetStoresSchema = createSchema({
  response: { 200: "GetStoresResponse" },
});
