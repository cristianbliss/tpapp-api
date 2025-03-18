import { statusCode } from "../../shared/constants/statusCode";

export class RequestError extends Error {
  statusCode: number;
  constructor() {
    super("BAD_REQUEST");
    this.name = "BAD_REQUEST";
    this.message = "bad request";
    this.statusCode = statusCode.BAD_REQUEST;
  }
}
