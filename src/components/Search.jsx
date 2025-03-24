"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import  {FaTimes} from "react-icons/fa";

const Search = ({ navItems, toggleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const results = [];
      navItems.forEach((item) => {
        if (item.submenu) {
          item.submenu.forEach((sub) => {
            if (sub.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              results.push(sub);
            }
          });
        } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push(item);
        }
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, navItems]);

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <button
        className="absolute top-4 right-4 text-2xl"
        onClick={toggleSearch}
      >
        <FaTimes className="ml-2" />
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4"
      />
      {searchResults.length > 0 && (
        <ul className="max-h-60 overflow-y-auto">
          {searchResults.map((result, index) => (
            <li key={index} className="mb-2">
              <Link href={result.href}>
                <p className="block text-blue-600 hover:underline">
                  {result.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;