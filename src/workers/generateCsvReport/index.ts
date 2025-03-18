import { EmailProvider } from "../../infra/providers/email-provider/email-provider";
import { envs } from "../../shared/config/envs";
import { GenerateCsvReport } from "./generate-csv-report";

export const makeGenerateCsvReport = () => {
  const emailProvider = new EmailProvider();
  const email = envs.SENDGRID.REPORT_EMAIL;

  return new GenerateCsvReport(emailProvider, email);
};
