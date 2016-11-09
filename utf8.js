var http = require("http");

http.createServer(function (req, res) {
  res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8"
  });

  res.end("你好\n");
}).listen(8080);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8080/');

//接下来，打开浏览器访问 http://127.0.0.1:8080/，你会看到一个写着 "你好"的网页。