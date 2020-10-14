const express =require('express');
const router = express.Router();

const user = require('../controller/controller');

//ROUTES si no entiendes esto ve a kinder xd ->>> go kinder

router.post('/',user.signup);
router.get('/',user.login);


module.exports = router;