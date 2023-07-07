import http from 'node:http'

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários\n')
  }

   if (method === 'POST' && url === '/users') {
    return res.end('Criação de usuário\n')
   }
  
  return res.end('Hello World\n')
})

server.listen(3333)
