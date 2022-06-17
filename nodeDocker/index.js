const express = require("express"); //use hapi when in prod

const app = express();

app.get("/", (req, res) => {
  res.send("<h2> Docker Rocks!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));