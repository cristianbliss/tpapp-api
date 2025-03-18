export type TokenPayload = {
  aud: string;
  iss: string;
  iat: number;
  nbf: number;
  exp: number;
  upn: string;
  unique_name: string;
  winaccountname: string;
  apptype: string;
  appid: string;
  authmethod: string;
  auth_time: string;
  ver: string;
  Groups?: string[];
};
