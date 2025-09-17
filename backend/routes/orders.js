const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const controller = require('../controllers/orderController');
router.post('/', auth, controller.create);
router.get('/', auth, controller.list);
module.exports = router;
