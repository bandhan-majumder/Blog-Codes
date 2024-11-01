const http = require('http'); 
 
// Create a server for port 3000 
const server1 = http.createServer((req, res) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 
    res.end('Hello from server on port 3000\n'); 
}); 
 
// Create a server for port 5000 
const server2 = http.createServer((req, res) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 
    res.end('Hello from server on port 5000\n'); 
}); 
 
// Start listening on port 3000 
server1.listen(3000, () => { 
    console.log('Server listening on port 3000'); 
}); 
 
// Start listening on port 5000 
server2.listen(5000, () => { 
    console.log('Server listening on port 5000'); 
});