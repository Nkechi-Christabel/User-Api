const express = require("express");
const apiController = require("../controllers/apiController");
const router = express.Router();

router.get("/", apiController.api_user);
router.post("/register", apiController.api_register);
router.delete("/delete/:id", apiController.api_delete);

module.exports = router;
