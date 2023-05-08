// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// const getCharDetail = require("./controllers/getCharDetail");

// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const {url} = req;

//     if (url.includes("onsearch/")) {
//       const urlId = url.split("/").pop();
//       getCharById(res, urlId);
//     }
//     if (url.includes("detail/")) {
//       const urlId = url.split("/").pop();
//       getCharDetail(res, urlId);
//     }
//   })
//   .listen(PORT, "localhost");

const express = require("express");
const server = express();
const router = require("./routes/index");

const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log(`Server listenig on port ${PORT}`);
});
