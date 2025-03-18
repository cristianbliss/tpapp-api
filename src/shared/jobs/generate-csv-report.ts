import { AsyncTask, CronJob } from "toad-scheduler";
import { makeGenerateCsvReport } from "../../workers/generateCsvReport";
import { envs } from "../config/envs";

const task = new AsyncTask("generate-csv-report", async (taskId) => {
  try {
    console.log(
      `job generate csv report is running  taskid:${taskId}  at`,
      Date.now()
    );
    await makeGenerateCsvReport().execute();
  } catch (e) {
    console.log(
      `something went wrong while try execute job generate csv report ${taskId}`
    );
  }
});

export const archiveClaimsJob = new CronJob(
  {
    cronExpression: envs.APP.CRON_EXPRESSION_GENERATE_CSV_REPORT,
  },
  task,
  {
    preventOverrun: true,
  }
);
