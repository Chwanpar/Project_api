var express = require('express');
var router = express.Router();
const goodController = require("../controllers/goodsController")
const passport = require("../middleware/passportJWT")
const checkadmin = require("../middleware/checkAdmin")

router.post ("/",goodController.insertgroup);

router.post ("/:id",goodController.insert);

router.get("/:id", goodController.showOne);
router.delete ("/:id",goodController.delete);
router.put ('/:id',goodController.update)

router.get("/", goodController.group);
router.get("/pv",[passport.islogin], goodController.grouppv);

module.exports = router;