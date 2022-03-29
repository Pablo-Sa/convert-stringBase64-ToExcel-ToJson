import { writeFile } from "fs/promises";
import xlsx from "xlsx";

class ExcelService {
  static async createFileExcelFromStringBase64(
    base64String: string
  ): Promise<void> {
    await writeFile("test.xlsx", base64String, {
      encoding: "base64",
    });
  }

  static async covertFileExcelToJson(): Promise<void> {
    const file = xlsx.readFile("test.xlsx");
    const data = [];

    const sheets = file.SheetNames;

    for (let i = 0; i < sheets.length; i++) {
      const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => data.push(res));
    }

    console.log(data);
  }

  static async execute(base64String: string) {
    await ExcelService.createFileExcelFromStringBase64(base64String);
    await ExcelService.covertFileExcelToJson();
  }
}

export { ExcelService };
