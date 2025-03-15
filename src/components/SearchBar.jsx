import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm, onSubmit, searchResults }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (text) => {
    setSearchTerm(text);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full max-w-lg">
      <div className="flex items-center border border-gray-300 rounded-lg shadow-sm p-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          placeholder="Search posts..."
          className="w-full p-2 focus:outline-none"
        />
        <button onClick={onSubmit} className="ml-2 p-2 bg-[#F3F2FC] text-white rounded-lg">
          <div ><Search size={20} absoluteStrokeWidth={2} className="text-[#382B83]" /></div>
        </button>
      </div>

      {showDropdown && searchTerm && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-56 overflow-auto">
          {searchResults.titles.length > 0 && (
            <div>
              <p className="px-3 py-2 text-gray-700 font-semibold bg-gray-100">Title Matches</p>
              {searchResults.titles.map((post) => (
                <p
                  key={post.id}
                  onClick={() => handleSelect(post.title)}
                  className="px-3 py-2 cursor-pointer hover:bg-blue-100"
                >
                  {post.title}
                </p>
              ))}
            </div>
          )}
          {searchResults.bodies.length > 0 && (
            <div>
              <p className="px-3 py-2 text-gray-700 font-semibold bg-gray-100">Body Matches</p>
              {searchResults.bodies.map((post) => (
                <p
                  key={post.id}
                  onClick={() => handleSelect(post.body.substring(0, 50) + "...")}
                  className="px-3 py-2 cursor-pointer hover:bg-blue-100"
                >
                  {post.body.substring(0, 50)}...
                </p>
              ))}
            </div>
          )}
          {searchResults.titles.length === 0 && searchResults.bodies.length === 0 && (
            <p className="px-3 py-2 text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
