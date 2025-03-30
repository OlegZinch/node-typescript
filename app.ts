import { createServer } from 'node:http'

const server = createServer((req, res) => {
  console.log(`Request method: ${req.method}, URL: ${req.url}`)
  res.end('Hello, world!')
})

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})
