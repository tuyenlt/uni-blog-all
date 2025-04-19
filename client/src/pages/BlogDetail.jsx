import { Link, useLocation } from 'react-router-dom';

const BlogDetail = () => {
    const location = useLocation()
    const post = location.state?.post

    if (!post) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-2xl text-red-600">Post not found</h2>
                <Link to="/blog" className="text-blue-500 hover:underline">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded mt-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-4">By {post.author} • {post.date}</p>
            <p className="whitespace-pre-line text-gray-800 leading-relaxed">
                {post.content}
            </p>
            <Link to="/blog" className="inline-block mt-6 text-blue-600 hover:underline">
                ← Back to Blog
            </Link>
        </div>
    );
};

export default BlogDetail;
