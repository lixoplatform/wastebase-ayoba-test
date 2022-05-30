const http = require('http');
const port = process.env.PORT || 3000;
const fs = require('fs');

/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
}); */

const server = http.createServer(function(req, resp){
  // Print the name of the file for which request is made.
  console.log("Request for demo file received.");
  fs.readFile("index.html",function(error, data){
    if (error) {
      resp.writeHead(404);
      resp.write('Contents you are looking for-not found');
      resp.end();
    }  else {
      resp.writeHead(200, {
        'Content-Type': 'text/html'
      });
      resp.write(data.toString());
      resp.end();
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
