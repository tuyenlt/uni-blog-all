const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

app.use(routes);

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
