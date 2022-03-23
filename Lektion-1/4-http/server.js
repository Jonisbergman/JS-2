const http = require('http');

const server = http.createServer((request, response) => {
  console.log('request made');
  console.log(request.url);
  // response.write('HELLO');
  // response.write('<h1>HELLO</h1>');
  // response.end();
  
  if(request.url === '/') {
    response.end('<h1>HELLO</h1>')
  }
  else if(request.url === '/about') {
    response.end('<h1>ABOUT</h1>')
  }
})

server.listen(9999, () => console.log('Server is running on http://localhost:9999'))