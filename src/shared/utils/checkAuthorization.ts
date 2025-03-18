import { InvalidAccessTokenError } from "../../domain/errors";

export function checkAuthorization(
  userRoles: string[],
  allowedRoles: string[]
) {
  const hasRole = allowedRoles.some((role) => userRoles.includes(role));

  if (!hasRole) {
    throw new InvalidAccessTokenError("insufficient roles");
  }
}
