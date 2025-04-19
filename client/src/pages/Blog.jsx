import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Blog = () => {
    const navigate = useNavigate()
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:8080/blog');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogPosts(data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };
        fetchPosts();
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Blog</h1>
            <div className="max-w-3xl mx-auto space-y-6">
                {blogPosts.length === 0 ? (
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-lg text-gray-700">Loading...</p>
                    </div>
                ) : (
                    blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
                        >
                            <h2 className="text-2xl font-semibold text-blue-700">{post.title}</h2>
                            <p className="text-sm text-gray-500 mb-2">
                                By {post.author} • {post.date}
                            </p>
                            <p className="text-gray-700">{post.excerpt}</p>
                            <button
                                className="mt-4 text-blue-600 hover:underline"
                                onClick={() => navigate(`/blog/${post.id}`)}
                            >
                                Read more →
                            </button>
                        </div>
                    )))}
            </div>
        </div>
    );
};

export default Blog;
