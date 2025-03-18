export class EmailProvider {
  sendArchive({ archive, email }: EmailProvider.SendArchive) {
    return console.log("arquivo enviado para o email" + email);
  }
}

namespace EmailProvider {
  export type SendArchive = {
    archive: any;
    email: string;
  };
}
