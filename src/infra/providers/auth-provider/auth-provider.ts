import jwt, { SigningKeyCallback, VerifyOptions } from "jsonwebtoken";
import { client } from "./config";

export class AuthProvider {
  private client = client;

  async verify({
    options,
    token,
    kid,
  }: AuthProvider.VerifyToken): Promise<void> {
    try {
      const signingKey = await this.getKey({ kid });
      jwt.verify(token, signingKey, options);
    } catch (e) {
      if (e instanceof jwt.TokenExpiredError) {
        throw new Error("Token has expired");
      } else if (e instanceof jwt.JsonWebTokenError) {
        throw new Error("Invalid token");
      } else {
        throw new Error(e.message);
      }
    }
  }

  private async getKey({ kid }: AuthProvider.GetKey): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.getSigningKey(kid, (err, key) => {
        if (err) {
          return reject(new Error("Signing key not found"));
        } else {
          const signingKey = key?.getPublicKey();
          resolve(signingKey);
        }
      });
    });
  }
}

export namespace AuthProvider {
  export type VerifyToken = {
    token: string;
    kid: string;
    options: VerifyOptions;
  };

  export type GetKey = {
    kid: string;
  };
}
