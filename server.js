const http = require("http");

const server = http.createServer((req, res) => {
  console.log('lmmmmm', res)
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('x-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end('ok');
});

server.listen(8088);