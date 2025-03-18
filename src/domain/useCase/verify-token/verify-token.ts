import { AuthProvider, JwtProvider } from "../../../infra/providers";

import { TokenPayload } from "../../../shared/types";
import { InvalidAccessTokenError } from "../../errors/invalid-access-token";

export class VerifyToken {
  constructor(
    private readonly jwtProvider: JwtProvider,
    private readonly authProvider: AuthProvider
  ) {}

  async verify(params: VerifyToken.Params) {
    const { accessToken } = params;
    let email: string | null = null;
    let user = null;
    let payload: TokenPayload | null = null;
    let kid: string | null = null;

    try {
      const response = this.jwtProvider.decode(accessToken, {
        complete: true,
      });

      if (!response || !response.payload || !response.header?.kid) {
        throw new InvalidAccessTokenError("Invalid token structure");
      }

      payload = response.payload as TokenPayload;
      kid = response.header.kid;
    } catch (e) {
      throw new InvalidAccessTokenError("Failed to decode access token");
    }

    try {
      const { upn, iss, aud } = payload;

      if (!upn || !iss || !aud) {
        throw new InvalidAccessTokenError(
          "Missing required fields in token payload"
        );
      }

      email = upn;

      await this.authProvider.verify({
        kid: kid!,
        options: { issuer: iss, audience: aud },
        token: accessToken,
      });
    } catch (e) {
      throw new InvalidAccessTokenError("Invalid access token");
    }

    if (!email)
      throw new InvalidAccessTokenError("Email not found in token payload");

    /*user = await this.userRepository.loadUserByEmail(email);

    if (!user) {
      throw new UserNotFoundError("User not found");
    }
    return user;*/
    return true;
  }
}

export namespace VerifyToken {
  export type Params = {
    accessToken: string;
  };
}
