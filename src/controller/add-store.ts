import { FastifyReply, FastifyRequest } from "fastify";
import { RequestError } from "./errors/request-error";
import { statusCode } from "../shared/constants/statusCode";
import { makeAddStore } from "../domain/useCase";
import { createSchema } from "./schemas";

export const AddStoreController = async (
  request: FastifyRequest<{ Body: AddStoreBody }>,
  response: FastifyReply
) => {
  const store = request?.body;

  try {
    if (!store) throw new RequestError();
    const useCase = await makeAddStore().create({ ...store });

    return response.status(statusCode.OK).send(useCase);
  } catch (e) {
    response.status(e?.statusCode ?? 500).send(e);
  }
};

export type AddStoreBody = {
  name: string;
  contact?: string;
  location: {
    latitude: number;
    longitude: number;
  };
  additionalInfo?: string;
  tpa: boolean;
  mb: boolean | null;
  acquirer?: string[];
  notes?: string;
};

export type AddStoreResponse = { id: string };

export const AddStoreSchema = createSchema({
  body: "AddStoreBody",
  response: { 200: "AddStoreResponse" },
});
