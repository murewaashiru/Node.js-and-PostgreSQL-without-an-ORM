const express = require("express");
const router = express.Router();
const {
  getArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle
} = require("./controller");

router
    .post("/", createArticle)
    .get("/", getArticles);
router.get("/:id", getArticleById);
router.patch("/:id", updateArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
