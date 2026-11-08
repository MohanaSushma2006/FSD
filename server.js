import http from 'http';
const server=http.createServer((req, res)=> {
    res.writeHead(200,{"content-Type":"text/html"});
    res.write("<h1>My Server</h1>");
    res.write("<p> This is response from server</p>");
    res.end();
});
server.listen(3000, ()=>{
    console.log("server running at http://Localhost:3000");
});