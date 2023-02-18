var express = require('express');
var router = express.Router();
var usercon = require('../controllers/usersController')
const passport = require("../middleware/passportJWT")
const checkadmin = require("../middleware/checkAdmin")
const { body } = require('express-validator')


router.get("/", [passport.islogin, checkadmin.isAdmin], usercon.showuser);

router.post("/", [
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อ").isLength({ min: 5 }).withMessage("ชื่อต้องมีค่ามากกว่า5ตัวอักษรขึ้นไป"),
    body('email').not().isEmpty().withMessage("กรุณาป้อนอีเมล").isEmail().withMessage("รูปแบบอีเมลไม่ถูกต้อง"),
    body('password').not().isEmpty().withMessage("กรุณากรอกรหัสผ่าน").isLength({ min: 5 }).withMessage("รหัสผ่านต้องมีค่ามากกว่า5ตัวอักษรขึ้นไป")], usercon.register)

router.post("/login", [
    body('email').not().isEmpty().withMessage("กรุณาป้อนอีเมล").isEmail().withMessage("รูปแบบอีเมลไม่ถูกต้อง"),
    body('password').not().isEmpty().withMessage("กรุณากรอกรหัสผ่าน").isLength({ min: 5 }).withMessage("รหัสผ่านต้องมีค่ามากกว่า5ตัวอักษรขึ้นไป")]
    , usercon.log)




module.exports = router;
