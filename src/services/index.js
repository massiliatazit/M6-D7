const router = require("express").Router();

const articleRouter= require("./articles")

router.use("/articles",articleRouter)

module.exports = router