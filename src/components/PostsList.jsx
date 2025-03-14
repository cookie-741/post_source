import { useState, useEffect } from 'react';
import { getPosts } from '@/services/api';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getPosts();
        const firstTenPosts = data.slice(0, 10);
        setPosts(firstTenPosts);
        setFilteredPosts(firstTenPosts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(results);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerm, posts]);

  if (loading) return <p className="text-center text-xl text-gray-500">⏳ Loading posts...</p>;
  if (error) return <p className="text-center text-xl text-red-500">❌ Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 text-lg rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-600">📌 List of Posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
