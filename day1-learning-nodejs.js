// ES5

const express = require("express");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");
const app = express();

axios
  .get("https://mocki.io/v1/1fbd2b4e-6ecd-4851-a99e-a7244396113e")
  .then((res) => {
    console.log(res);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Section Jakarta");
});

app.post("/books", (request, response) => {
  console.log(request.body);
  const { name: author } = request.body;

  response.json({
    data: {
      author,
      releaseYear: 1994,
      title: "The Art of War",
    },
    message: "Successfully retrieved data",
  });
});

app.listen(3000, () => {
  console.log("Application Running on Port 3000");
});
