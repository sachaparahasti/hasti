const http = require("http");
const e = require('./lib/email');

function handleReqRes(req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  let sender = e.email(
    "reciver@gmail.com",
    "Hello Request",
    "Hello i want to connect with you on linkedin"
  );
  sender.send();
  res.write('Email sent');
  res.end();
}
const server = http.createServer(handleReqRes);
const port = 5000;
server.listen(port, () => {
  console.log("port 5000 is a listening...");
});
