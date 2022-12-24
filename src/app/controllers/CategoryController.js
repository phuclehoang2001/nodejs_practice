class CategoryController {
  // GET /categories
  index(req, res) {
    res.render("category");
  }

  // GET /categories/:slug: bien dong
  show(req, res) {
    res.send("Detail");
  }
}

module.exports = new CategoryController();
