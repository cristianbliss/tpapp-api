# TPapp

## Project Structure

## Prerequisites

1. **Node.js**: Ensure Node.js is installed (version 20 or higher recommended).

---

## Setup Instructions

### 1. Install Dependencies

Run the following command to install required dependencies:

```bash
yarn install
# or
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory and populate it with the following variables:

```env
SERVER_PORT=4000
SERVER_HOST ="127.0.0.1"
ACCESS_TOKEN_TTL="86400"
CRON_EXPRESSION_GENERATE_CSV_REPORT= '*/5 * * * *' # A CADA 5 MIN
REPORT_EMAIL = <email-to-report-csv>
FIREBASE_API_KEY= <your-firebase-env>
FIREBASE_AUTH_DOMAIN= <your-firebase-env>
FIREBASE_PROJECT_ID= <your-firebase-env>
FIREBASE_STORAGE_BUCKET= <your-firebase-env>
FIREBASE_MESSANGING_SENDER_ID= <your-firebase-env>
FIREBASE_APP_ID= <your-firebase-env>
FIREBASE_MEASUREMENT_ID= <your-firebase-env>
```

Replace `<your-firebase-env>`, and other placeholders with actual values.

## Running the Application

### Development Mode

To start the application in development mode, use:

```bash
yarn dev
# or
npm run dev
```

The application will be available at `http://localhost:4000`.

### Swagger

The swagger will be available at `http://localhost:4000/docs`
or you can use the doc `swagger.json` available in the source code

### Build and Production Mode

To build the application for production:

```bash
yarn build
# or
npm run build
```

Then, start the application in production mode:

```bash
yarn start
# or
npm run start
```
