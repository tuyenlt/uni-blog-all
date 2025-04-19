const router = require('express').Router();
const blogController = require('../controllers/blog.controller')

router.get('/blog', blogController.getAllPosts);
router.get('/blog/:id', blogController.getPostById);
module.exports = router;