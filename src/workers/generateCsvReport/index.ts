import { CsvProvider } from "../../infra/providers/csv-provider";
import { EmailProvider } from "../../infra/providers/email-provider/email-provider";
import { envs } from "../../shared/config/envs";
import { GenerateCsvReport } from "./generate-csv-report";

export const makeGenerateCsvReport = () => {
  const emailProvider = new EmailProvider();
  const emailTo = envs.EMAIL_SENDER.REPORT_EMAIL;
  const emailFrom = envs.EMAIL_SENDER.EMAIL_SENDER_USER;
  const csvProvider = new CsvProvider();

  return new GenerateCsvReport(emailProvider, csvProvider, emailTo, emailFrom);
};
