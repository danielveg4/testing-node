const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Wake up, Neo...');
})

server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en 127.0.0.1:1337'); 