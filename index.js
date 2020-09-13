const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // // Check URL
  // if (req.url === '/')  {
  //     // Read HTML File
  //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
  //         // Check For Errors
  //         err ? console.log(err) :
  //         // Write HTML To Browser
  //         res.writeHead(200, { 'Content-Type' : 'text/html'})
  //         res.end(content);
  //     })
  // }

  // // Check URL
  // if (req.url === '/about')  {
  //     // Read HTML File
  //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //         // Check For Errors
  //         err ?  console.log(err) :
  //         // Write HTML To Browser
  //         res.writeHead(200, { 'Content-Type' : 'text/html'})
  //         res.end(content);
  //     })
  // }

  // // Check URL
  // if (req.url === '/api/users')  {
  //     const users = [
  //         { name: 'Richard', age: 30},
  //         { name: 'Matt', age: 23},
  //         { name: 'Emily', age: 34}
  //     ]

  //     res.writeHead(200, { 'Content-Type' : 'application/json'})
  //         res.end(JSON.stringify(users));
  // }

  // Build File Path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Extension of file
  let extname = path.extname(filePath);

  // Initial Content Type
  let contentType = 'text/html';

  // Check Ext and Set Content Tpe
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read File

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page Not Found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        // Server Error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
