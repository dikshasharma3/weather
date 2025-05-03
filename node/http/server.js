const http= require("http");

const server=http.createServer((req,res)=>{
    if(req.url === "/")
    {
        res.write("welcome to home page");
        res.end();
    }
    if(req.url === "/info")
        {
            res.write("Hlo everyone");
            res.end();
        }

});
// .listen("3000");
const PORT=8000;
server.listen(PORT,()=>{
    console.log(`port is start ${PORT}`)
});

// run bu node --watch server.js