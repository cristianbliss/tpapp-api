import { EmailProvider } from "../../infra/providers/email-provider/email-provider";

export class GenerateCsvReport {
  constructor(
    private readonly emailProvider: EmailProvider,
    private readonly email: string
  ) {}

  async execute() {
    this.emailProvider.sendArchive({ archive: {}, email: this.email });
  }
}
