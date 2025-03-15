import { useState, useEffect } from "react";
import { getPosts } from "@/services/api";
import SearchBar from "./SearchBar";
import PostCard from "./PostCard";
import { ArrowLeft } from "lucide-react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getPosts();
        const firstTenPosts = data.slice(0, 10);
        setPosts(firstTenPosts);
        setFilteredPosts(firstTenPosts);
      } catch (err) {
        setError("Failed to fetch posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const applySearch = () => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) {
      setFilteredPosts(posts);
      setIsSearching(false);
      return;
    }

    const titleMatches = posts.filter((post) => post.title.toLowerCase().includes(term));
    const bodyMatches = posts.filter(
      (post) => !titleMatches.includes(post) && post.body.toLowerCase().includes(term)
    );

    setFilteredPosts([...titleMatches, ...bodyMatches]);
    setIsSearching(true);
  };

  const resetSearch = () => {
    setSearchTerm("");
    setFilteredPosts(posts);
    setIsSearching(false);
  };
  if (loading) 
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500 animate-pulse">Loading posts...</p>
      </div>
    );
    
  if (error) 
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-lg text-[#be0303]">{error}</p>
      </div>
    );
  

  return (
    <section className="px-20 py-10">
      <h1 className="text-5xl mb-4">Blog</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSubmit={applySearch}
        searchResults={{
          titles: posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase())),
          bodies: posts.filter(
            (post) =>
              !post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
              post.body.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }}
      />
        <p className="text-[#382B83] text-xl font-semibold underline underline-offset-6 my-5">Latest Trending Blog</p>
      {isSearching && (
        <button
          onClick={resetSearch}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mt-4"
        >
          <ArrowLeft size={20} />
          Back to Main Page
        </button>
      )}

      {posts.length > 0 && filteredPosts.length === 0 ? (
        <p className="text-center text-lg text-gray-500 mt-6">No matching posts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PostList;
