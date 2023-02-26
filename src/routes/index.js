const express = require("express");
const userRoutes = require("./user.route");
const { getUrl } = require("../controllers");

const router = express.Router();

router.use("/users", userRoutes);
router.get("/url", getUrl);

module.exports = router;
