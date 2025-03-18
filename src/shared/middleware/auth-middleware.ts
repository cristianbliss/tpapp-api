import { FastifyRequest, FastifyReply } from "fastify";

import { extractBearerToken } from "../utils/extractBarerToken";

import { makeVerifyToken } from "../../domain/useCase";

export function authMiddleware(allowedRoles?: string[]) {
  return async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      const authorization = request.headers["authorization"];
      const accessToken = extractBearerToken(authorization);
      await makeVerifyToken().verify({ accessToken });
    } catch (e) {
      reply.code(e?.statusCode ?? 500).send(e);
    }
  };
}
export { extractBearerToken };
