var express = require("express");
var router = express.Router();
var NewsController = require("../controllers/newsController");

// Get news list
router.get("/", NewsController.list);

// Get news detail
router.get("/:id", NewsController.detail);

// Create news
router.post("/", NewsController.create);

// Update news
router.put("/:id", NewsController.update);

// Delete news
router.delete("/:id", NewsController.delete);

module.exports = router;
