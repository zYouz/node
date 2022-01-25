'test'
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, data) => {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(data)
})

server.listen(Number(process.argv[2]))