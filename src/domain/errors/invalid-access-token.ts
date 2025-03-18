import { statusCode } from "../../shared/constants/statusCode";

export class InvalidAccessTokenError extends Error {
  statusCode: number;
  constructor(message: string) {
    super("INVALID_TOKEN");
    this.name = "INVALID_TOKEN";
    this.message = message ?? "invalid token";
    this.statusCode = statusCode.UNAUTHORIZED;
  }
}
