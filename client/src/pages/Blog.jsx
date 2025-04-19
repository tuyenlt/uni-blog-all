import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      console.log("fetching data");
      const response = await fetch("https://localhost:8080/blog");
      const posts = await response.json();
      setBlogPosts(posts);
    };
    fetchPost();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
        Blog
      </h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {blogPosts.length > 0
          ? blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded shadow hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold text-blue-700">
                  {post.title}
                </h2>
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
            ))
          : "loading"}
      </div>
    </div>
  );
};

export default Blog;
