const router = require("express").Router();

const articleRouter= require("./articles")
const categoriesRoute = require("./categories");
const authorsRoute = require("./authors");
const reviewsRoute = require("./reviews");

router.use("/categories", categoriesRoute);
router.use("/authors", authorsRoute);

router.use("/articles",articleRouter)
router.use("/reviews",reviewsRoute)

module.exports = router