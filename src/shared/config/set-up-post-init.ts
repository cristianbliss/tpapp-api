import { FastifyInstance } from "fastify";
import { archiveClaimsJob } from "../jobs/generate-csv-report";
import fs from "fs";

export const setUpPostInit = (app: FastifyInstance) => {
  const swaggerJSON = app.swagger();
  //fs.writeFileSync("./swagger.json", JSON.stringify(swaggerJSON, null, 2));
  app.scheduler.addCronJob(archiveClaimsJob);
};
