import { setUpRoutes } from "./shared/config/set-up-routes";
import Fastify from "fastify";
import { envs } from "./shared/config/envs";
import { setUpPlugins } from "./shared/config/set-up-plugins";
import { setUpPostInit } from "./shared/config/set-up-post-init";

const {
  SERVER: { SERVER_HOST, SERVER_PORT },
} = envs;

const server = Fastify({ logger: true });

setUpPlugins(server);

setUpRoutes(server);

server.listen({ port: SERVER_PORT, host: SERVER_HOST });

server.ready().then(() => setUpPostInit(server));
