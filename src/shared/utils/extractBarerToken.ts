export function extractBearerToken(authorization: string): string {
  if (!authorization) {
    throw new Error("Invalid token");
  }

  const parts = authorization.split(" ");

  if (parts.length !== 2) {
    throw new Error("Invalid token");
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    throw new Error("Invalid token");
  }

  return token;
}
