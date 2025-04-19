const router = require('express').Router();
const blogRoutes = require('./blog.route');

router.use(blogRoutes);

module.exports = router