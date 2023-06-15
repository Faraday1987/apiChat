
const { Router } = require('express');
const { contactPost } = require('../controllers/chatavatar');
const router = Router();

router.post('/contact', contactPost)

module.exports = router;