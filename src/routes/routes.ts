import { Request, Response, Router } from "express";
import { ExcelService } from "../services/ExcelService";

const router = Router();

router.post("/createProcess", async (request: Request, response: Response) => {
  const { file } = request.body;
  await ExcelService.execute(file);

  response.json({ js: "estou aprendendo" });
});
export { router };
