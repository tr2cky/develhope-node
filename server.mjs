import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  const JSONResponseBody = JSON.stringify({ Location: "Mars" });

  response.end(JSONResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
