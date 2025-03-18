import dotenv from "dotenv";
dotenv.config();

export const envs = {
  APP: {
    ACCESS_TOKEN_TTL: process.env.ACCESS_TOKEN_TTL,
    SECONDS_UNTIL_ARCHIVE_CLAIMS: process.env.SECONDS_UNTIL_ARCHIVE_CLAIMS,
    CRON_EXPRESSION_GENERATE_CSV_REPORT:
      process.env.CRON_EXPRESSION_GENERATE_CSV_REPORT,
  },
  SERVER: {
    SERVER_PORT: (process.env.SERVER_PORT as unknown as number) || 3000,
    SERVER_HOST: process.env.SERVER_HOST || "0.0.0.0",
  },

  AD: {
    JWKS_URI: process.env?.AD_AZURE_JWKS_URI,
  },
  SENDGRID: {
    REPORT_EMAIL: process.env.REPORT_EMAIL,
  },
  FIREBASE: {
    API_KEY: process.env.FIREBASE_API_KEY,
    AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    MESSANGIN_SENDER_ID: process.env.FIREBASE_MESSANGING_SENDER_ID,
    APP_ID: process.env.FIREBASE_APP_ID,
    MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
  },
};
