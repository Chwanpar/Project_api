var express = require('express');
var router = express.Router();
const goodController = require("../controllers/goodsController")
const passport = require("../middleware/passportJWT")
const checkadmin = require("../middleware/checkAdmin")

router.post ("/",goodController.insertgroup);

router.post ("/:id",goodController.insert);

router.get("/one/:id", goodController.showOne);

router.delete ("/:id",goodController.delete);
router.put ('/:id',goodController.update)

router.get("/", goodController.group);
router.get("/private",[passport.islogin], goodController.grouppv)

module.exports = router;