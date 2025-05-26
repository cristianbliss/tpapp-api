import nodemailer from "nodemailer";
import { envs } from "../../../shared/config/envs";
const {
  EMAIL_SENDER: {
    EMAIL_SENDER_PASSWORD,
    EMAIL_SENDER_USER,
    EMAIL_SENDER_HOST,
    EMAIL_SENDER_PORT,
    EMAIL_SENDER_SERVICE,
  },
} = envs;
export const transporter = nodemailer.createTransport({
  service: EMAIL_SENDER_SERVICE,
  host: EMAIL_SENDER_HOST,
  port: EMAIL_SENDER_PORT as unknown as number,
  auth: {
    user: EMAIL_SENDER_USER,
    pass: EMAIL_SENDER_PASSWORD,
  },
});
