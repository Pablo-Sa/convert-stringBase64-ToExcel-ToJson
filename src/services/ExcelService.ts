import fs from 'fs'
import xlsx from 'xlsx'

const createFileExcelFromStringBase64 = (base64String: string) => {
  fs.writeFile('test.xlsx', base64String, { encoding: 'base64' }, (error) => {
    if (error) return console.log(error)
    console.log('File Excel Created Success')
  })
}

const convertFileExcelToJson = () => {
  // Coloquei esse setTimeout porque O arquivo excel é criado
  // e o Script já passa para esta função de ler antes de o arquivo estar disponível na pasta para leitura
  // onde ocorre o erro na tentativa da leitura, sou Javeiro e estou aprendeno as nuancias do JS ainda.
  // Como Single Thread, Worker Thread, Event Looping etc, não me julgue kkkkkk
  setTimeout(() => {
    const file = xlsx.readFile('./test.xlsx')
    const data = []

    const sheets = file.SheetNames

    for (let i = 0; i < sheets.length; i++) {
      const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
      temp.forEach((res) => data.push(res))
    }

    console.log(data)
  }, 1000)
}

const executeProcess = (base64String: string) => {
  createFileExcelFromStringBase64(base64String)
  convertFileExcelToJson()
}

export default { executeProcess }
