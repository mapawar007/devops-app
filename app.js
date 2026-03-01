const http = require("http");
const server = http.createServer((req,res)=>{
  res.end("CI/CD working 🚀");
});
server.listen(3000);