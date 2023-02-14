var express = require('express');
var router = express.Router();
const goodController = require("../controllers/goodsController")


// router.get ("/", goodController.good);
router.post ("/",goodController.insert);
router.delete ("/:id",goodController.delete);
router.put ('/:id',goodController.update)

router.get("/", goodController.group);

module.exports = router;