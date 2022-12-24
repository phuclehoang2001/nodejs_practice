const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes");
const sql = require("mssql");

app.use(express.static(path.join(__dirname, "public")));

//middleware submit
app.use(
  express.urlencoded({
    extended: true,
  })
); //form
app.use(express.json()); // json, ajax, fetch, axios....

//http logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  hbs.engine({
    // đuôi file
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
