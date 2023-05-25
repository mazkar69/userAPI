const express = require("express")
const router = express.Router();


//Get users contrller
const getUserController = require("../controller/getUserController");

//Post users contrller
const postUserController = require("../controller/postUserController");
const deleteUserController = require("../controller/deleteUserController");

router.route("/users").get(getUserController);

router.route("/users").post(postUserController);

router.route("/users").delete(deleteUserController);




module.exports = router;