const http = require("http");
const port = process.env.PORT || 8080;
console.log("[smoke] simulating slow boot — 10s delay before listen");
setTimeout(() => {
  http.createServer((req, res) => {
    console.log(`[smoke-hit] ${req.method} ${req.url}`);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({ status: "ok", pid: process.pid, port }));
  }).listen(port, "0.0.0.0", () => {
    console.log(`smoke listening on 0.0.0.0:${port} (after delay)`);
  });
}, 10000);
