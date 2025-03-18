import path from "path";
import { createGenerator } from "ts-json-schema-generator";

const config = {
  tsconfig: path.resolve(__dirname, "..", "..", "..", "tsconfig.json"),
};

export const schemaGenerator = createGenerator(config);
