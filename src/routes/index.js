const categoriesRouter = require("./categories");
const siteRouter = require("./site");
function route(app) {
  app.use("/categories", categoriesRouter);
  app.use("/", siteRouter);
}

module.exports = route;
