const userController = require('../controller/userController');
const router = require('express').Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:username", userController.getByUsername);

module.exports = router;