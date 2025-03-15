import React, { useState } from "react";
import { PostList } from "./PostList";
import { ArrowLeft } from "lucide-react";
import { useHistory } from "react-router-dom";

const PostsOverviewPage = () => {
  const [searching, setSearching] = useState(false);
  const history = useHistory();

  const handleBackClick = () => {
    setSearching(false);
    history.push("/"); // Navigate back to the main page
  };

  return (
    <section className="max-w-4xl mx-auto p-4">
      <button
        onClick={handleBackClick}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft size={20} />
        Back to Main Page
      </button>
      
      <PostList setSearching={setSearching} />
    </section>
  );
};

export default PostsOverviewPage;
