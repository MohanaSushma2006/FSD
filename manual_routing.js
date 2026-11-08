import http from 'http';
const server = http.createServer((req, res) => {
    //create student -post http://localhost:4000/students
    if(req.method === 'POST' && req.url === '/students') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Student Created</h1>");
        res.end();
    }
    //readstudents -get http://localhost:4000/students
    else if(req.method === 'GET' && req.url === '/students') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Student List</h1>");
        res.end();
    }
    //readstudents by id -get http://localhost:4000/students/1
    else if(req.method === 'GET' && req.url === '/students/1') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Student Details</h1>");
        res.end();
    }
    //update student by id -put http://localhost:4000/students/1
    else if(req.method === 'PUT' && req.url === '/students/1') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Student Updated</h1>");
        res.end();
    }
    //delete student by id -delete http://localhost:4000/students/1
    else if(req.method === 'DELETE' && req.url === '/students/1') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Student Deleted</h1>");
        res.end();
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 - Not Found');
    }
});
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/');
});
/**
 * create student -post http://localhost:4000/students
 * curl -X POST http://localhost:4000/students
 * readall students -get http://localhost:4000/students
 * curl -X GET http://localhost:4000/students
 * read student by id -get http://localhost:4000/students/1
 * curl -X GET http://localhost:4000/students/1
 * update student by id -put    http://localhost:4000/students/1
 * curl -X PUT http://localhost:4000/students/1
 * delete student by id -delete http://localhost:4000/students/1
 * curl -X DELETE http://localhost:4000/students/1
 *
 */