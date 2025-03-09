"use client";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import Link from "next/link";
import getBlogs from "@/lib/strapi";

const FAQSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 6; // Number of visible items at a time

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const nextSlide = () => {
    if (currentIndex + visibleItems < blogs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="my-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions...
      </h2>

      <div className="border-t border-gray-300"></div>

      <div className="relative mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs
            .slice(currentIndex, currentIndex + visibleItems)
            .map((blog, index) => (
              <Link key={index} href={`/blogs/${blog.slug}`}>
                <div className="p-3 bg-blue-50 rounded-lg shadow-md h-40 flex flex-col justify-between">
                  <h3 className="font-semibold text-lg text-gray-800">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {blog.author} - {new Date(blog.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-0 bottom-[-50px] flex gap-4">
          <button
            onClick={prevSlide}
            className={`p-3 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all duration-500 ${
              currentIndex === 0 && "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentIndex === 0}
          >
            <IoMdArrowBack />
          </button>
          <button
            onClick={nextSlide}
            className={`p-3 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400 transition-all ${
              currentIndex + visibleItems >= blogs.length &&
              "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentIndex + visibleItems >= blogs.length}
          >
            <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;