import jwksClient, { SigningKey } from "jwks-rsa";
import { envs } from "../../../shared/config/envs";

export const client = jwksClient({
  jwksUri: envs.AD.JWKS_URI,
});
