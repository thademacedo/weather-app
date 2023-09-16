const http = require("https");

const options = {
  method: "GET",
  hostname: "dark-sky.p.rapidapi.com",
  port: null,
  path: "/37.774929,-122.419418,2019-02-20",
  headers: {
    "X-RapidAPI-Key": "42e9775b1fmshbae084fb66b9cf3p166f07jsne75b7df7f12c",
    "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
