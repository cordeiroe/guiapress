const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("Rota de artigos")
});

router.get("/admin/articles/new", (req, res) => {
    res.send("Rota para criação de nova categoria via admin")
});

module.exports = router;