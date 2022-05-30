

class Request {

}

class Response {

}

// const net = require("net");
// net.connect ({
//   address: '127.0.0.1',
//   port: 8088,
//   onread: {
//     buffer: Buffer.alloc(4 * 1024),
//     callback: function(nread, buf) {
//       console.log(buf.toString('utf', 0, nread));
//     }
//   }
// });

const net = require('net');

const client = net.createConnection({ 
  host: "127.0.0.1",
  port: 8888 
}, () => {
  client.write('world');
  // client.write('POST / HTTP/1.1\r\n');
});
client.on('data', (data) => {
  client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
})

// post / http/1.1
// host: 127.0.0.1 
// content-type: application/x-www-form-urlencoded