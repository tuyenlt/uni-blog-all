const blogPosts = require('./blog.data');

const blogController = {
    getAllPosts: (req, res) => {
        res.status(200).json(blogPosts);
    },
    getPostById: (req, res) => {
        const postId = parseInt(req.params.id, 10);
        const post = blogPosts.find((p) => p.id === postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json(post);
    },
}

module.exports = blogController;