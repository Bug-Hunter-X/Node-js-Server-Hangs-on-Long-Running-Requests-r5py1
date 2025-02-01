const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task using promises
  const start = Date.now();
  new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 5000);
  }).then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});