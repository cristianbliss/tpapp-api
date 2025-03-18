import jwt from "jsonwebtoken";
export class JwtProvider {
  verify(token: string, secret: string) {
    return jwt.verify(token, secret);
  }
  decode(token: string, options: jwt.DecodeOptions & { complete: true }) {
    return jwt.decode(token, options);
  }
}
