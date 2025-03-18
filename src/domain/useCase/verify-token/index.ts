import { AuthProvider, JwtProvider } from "../../../infra/providers";
import { VerifyToken } from "./verify-token";

export const makeVerifyToken = () => {
  const jwtProvider = new JwtProvider();
  const authProvider = new AuthProvider();

  return new VerifyToken(jwtProvider, authProvider);
};
