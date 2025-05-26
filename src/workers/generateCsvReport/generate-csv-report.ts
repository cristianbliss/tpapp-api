import { Writable } from "stream";
import { EmailProvider } from "../../infra/providers/email-provider/email-provider";
import { StoreRepository } from "../../infra/repositories/store-repository";
import { CsvProvider } from "../../infra/providers/csv-provider";

const emailTemplate = {
  subject: "Relatório CSV das Lojas",
  text: "Segue em anexo o relatório em CSV.",
  filename: "report.csv",
  contentType: "text/csv",
};

export class GenerateCsvReport {
  constructor(
    private readonly emailProvider: EmailProvider,
    private readonly csvProvider: CsvProvider,
    private readonly emailTo: string,
    private readonly emailFrom: string
  ) {}

  async execute() {
    const storeRepository = new StoreRepository();
    const data = await storeRepository.getStores();
    console.log(data);
    const csvStream = this.csvProvider.createCsvStream();

    const records = data.map((item) => ({
      uid: item?.uid,
      id: item?.id,
      store_name: item?.name,
      store_contact: item?.contact,
      store_notes: item.notes,
      store_mb: item?.mb,
      store_tpa: item?.tpa,
      store_additionalInfo: item?.additionalInfo,
      store_location: JSON.stringify(item?.location),
      store_acquirer: JSON.stringify(item?.acquirer),
    }));

    const chunks: Buffer[] = [];

    const writableStream = new Writable({
      write(chunk, _encoding, callback) {
        chunks.push(chunk);
        callback();
      },
    });

    csvStream.pipe(writableStream);

    for (const row of records) {
      csvStream.write(row);
    }

    csvStream.end();

    await new Promise((resolve) => writableStream.on("finish", resolve));

    const buffer = Buffer.concat(chunks);

    this.emailProvider.sendArchive({
      options: {
        from: this.emailFrom,
        to: this.emailTo,
        subject: emailTemplate.subject,
        text: emailTemplate.text,
        attachments: [
          {
            content: buffer,
            filename: emailTemplate.filename,
            contentType: emailTemplate.contentType,
          },
        ],
      },
    });
  }
}
