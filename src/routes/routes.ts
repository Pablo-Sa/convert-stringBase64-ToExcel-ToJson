import { Request, Response, Router } from 'express'
import excelService from '../services/ExcelService'

const router = Router()

router.post('/createProcess', (request:Request, response:Response) => {
  const { file } = request.body
  excelService.executeProcess(file)
  response.json({ js: 'estou aprendendo' })
})
export { router }
