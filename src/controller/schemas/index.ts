import { JSONSchema7Definition } from "json-schema";
import { schemaGenerator } from "../../shared/utils/schemaGenerator";

export type Authorization = {
  Authorization: string;
};

type SchemasNames = {
  body?: string;
  response?: { 200?: string };
  querystring?: string;
};
type CreateSchemaResponse = { [key: string]: JSONSchema7Definition };

export const createSchema = (typeNames: SchemasNames) => {
  var schema: CreateSchemaResponse = {};
  if (typeNames?.body) {
    schema.body = schemaGenerator.createSchema(typeNames.body).definitions[
      typeNames.body
    ];
  }

  if (typeNames.response) {
    schema.response = {};
    if (typeNames.response[200]) {
      schema.response[200] = schemaGenerator.createSchema(
        typeNames.response[200]
      ).definitions[typeNames.response[200]];
    }
  }

  if (typeNames?.querystring) {
    schema.querystring = schemaGenerator.createSchema(
      typeNames.querystring
    ).definitions[typeNames.querystring];
  }

  return schema;
};

export const authorizationSchema =
  schemaGenerator.createSchema("Authorization").definitions["Authorization"];
