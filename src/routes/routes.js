const express = require("express");
const { login } = require("../functions/login");
const { verify } = require("../middleware/verifyToken");
const { userData } = require("./../functions/userData");

const router = express.Router();

router.use("/", express.static(__dirname + "/client"));
router.use("/dashboard", express.static(__dirname + "/client"));
router.use("/dashboard/*", express.static(__dirname + "/client"));

router.get("/", (req, res) => {
  res.status(200).send("Página de inicio");
});
router.get("/dashboard", (req, res) => {
  res.status(200).send("Página de dashboard");
});
router.get("/dashboard/*", (req, res) => {
  res.status(200).send("Página de dashboard");
});

router.get("/verify", verify, userData);

router.post("/getuser", login);

router.get("/usersList", verify, (req, res) => {
  res.send("LISTA DE USUSARIOS");
});

module.exports = router;
