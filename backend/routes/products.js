const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const controller = require('../controllers/productController');


router.get('/', controller.list);
router.get('/:id', controller.get);
// admin routes (simple protection) - only allow if token and isAdmin
router.post('/', auth, async (req, res, next) => {
if (!req.user?.isAdmin) return res.status(403).json({ message: 'admin only' });
next();
}, controller.create);
router.put('/:id', auth, async (req, res, next) => {
if (!req.user?.isAdmin) return res.status(403).json({ message: 'admin only' });
next();
}, controller.update);
router.delete('/:id', auth, async (req, res, next) => {
if (!req.user?.isAdmin) return res.status(403).json({ message: 'admin only' });
next();
}, controller.remove);


module.exports = router;
