//Cliente http padrão do Node
const http = require('node:http');

//Endereço da máquina local
const hostname = 'localhost';
const port = 3000;

//Criando um server http
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
      } else if (req.url === '/new-route') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('You have reached the new route!\n');
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found\n');
      }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});