import Mail from "nodemailer/lib/mailer";
import { transporter } from "./config";

export class EmailProvider {
  async sendArchive({ options }: EmailProvider.SendArchive) {
    await transporter.sendMail(options);
  }
}

namespace EmailProvider {
  export type SendArchive = {
    options: Mail.Options;
  };
}
