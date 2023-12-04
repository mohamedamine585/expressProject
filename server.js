import http from 'http'

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Welcome to home page');
        res.end()
    }
    else{
        res.end(`
        <h1> Oops ! </h1>
        `)
    }
 
})


server.listen(5000)