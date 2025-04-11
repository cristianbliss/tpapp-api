import { format } from "fast-csv";

export class CsvProvider {
  createCsvStream() {
    const csvStream = format({ headers: true });
    return csvStream;
  }
}
