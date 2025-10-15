const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {

    let filePath = req.url === '/' ? 'Portfolio/index.html' : 'Portfolio' + req.url;
    const extname = path.extname(filePath)

    let contentType = 'text/html';
    switch(extname)
    {
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.png':
            contentType = 'image/png'
            break
        case 'jpg':
            contentType = 'image/jpg'
        case 'jpeg':
            contentType = 'image/jpeg'        
        default:
            contentType = 'text/html' 
    }

    fs.readFile(filePath, (err, data) => {
        
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 Internal Server Error</h1>');
            }
            return;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}).listen(3000);