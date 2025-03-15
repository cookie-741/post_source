import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-[#fcfbff] shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold text-[#382B83]">{post.title}</h2>
      <p className="text-[#241b54] mt-2">{post.body?.substring(0, 150) ?? "No content available"}...</p>
    </div>
  );
};

export default PostCard;
