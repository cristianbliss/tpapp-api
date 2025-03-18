import cors from "@fastify/cors";
import fastifyFormbody from "@fastify/formbody";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { fastifySchedule } from "@fastify/schedule";
import { FastifyInstance } from "fastify";
import appInfo from "../../../package.json";

export const setUpPlugins = (app: FastifyInstance) => {
  app.register(fastifyFormbody);
  app.register(fastifySchedule);
  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: appInfo.name,
        version: appInfo.version,
      },
      components: {
        securitySchemes: {
          Authorization: {
            type: "apiKey",
            description: "Insert here your API Key",
            name: "Authorization",
            in: "header",
          },
        },
      },
    },
  });
  app.register(fastifySwaggerUi, {
    routePrefix: "/docs",
  });
  app.register(cors, {
    origin: "*",
  });
};
