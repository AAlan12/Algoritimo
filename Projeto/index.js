const http =  require('http');
const fs = require('fs');

const hostname ='localhost';
const port = 3000;

const serve = http.createServer((req,res) => 
{
    if(req.url === '/.http200.jpg'){
        fs.readFile('.http200', null, (err, data) => {
            if(err){
                res.statusCode = 500;
                res.end(err.message);
            }else{
                res.statusCode = 200;
                res.setHeader('Cotent-Type','image/jpg');
                res.write(data);
                req.end();
            }
    }
);
    if(req.url === '/' || req.url === '/index.html'){
        fs.readFile('./static/index.html', null, (err, data) => {
         if(err){
            res.statusCode = 500;
            res.end(err.message);            
            
         }else{           
            res.StatusCode = 200;
            res.setHeader('Content-Type','text/plain');
            res.write(data);
            res.end();
         }   
        });
    }else{
        res.statusCode = 404;
        res.end('Página não encontrada');               
    }    
    };
  
            
server.listen(port,hostname, function(){
    console.log('Serber is running at http://${hostname}:${port}/');
});