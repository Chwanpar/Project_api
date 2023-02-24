var express = require('express');
var router = express.Router();
const goodController = require("../controllers/goodsController")
const passport = require("../middleware/passportJWT")
const checkadmin = require("../middleware/checkAdmin")
const {body}= require("express-validator")

router.post ("/",[passport.islogin,checkadmin.isAdmin],goodController.insertgroup);

router.post ("/:id",[passport.islogin,checkadmin.isAdmin],goodController.insert);


router.get("/one/:id", [passport.islogin,checkadmin.isAdmin],goodController.showOne);

router.delete ("/:id",[passport.islogin,checkadmin.isAdmin],goodController.delete);
router.put ('/:id',[passport.islogin,checkadmin.isAdmin],goodController.update)

router.get("/", goodController.group);
router.get("/private",[passport.islogin], goodController.grouppv)

module.exports = router;