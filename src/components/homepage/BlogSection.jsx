"use client";
import Image from "next/image";
import { FaRegCalendarAlt, FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import getBlogs from "@/lib/strapi";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data.slice(0, 3)); // Fetch only the first 3 blogs
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900">Latest news & articles</h2>
        <p className="text-gray-600 uppercase mt-2">from the blog</p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              
              {/* Image */}
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                {/* Date & Comments */}
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                  <span className="flex items-center">
                    <FaRegCalendarAlt className="mr-1" /> {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <FaRegCommentDots className="mr-1" /> 0 Comments
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mt-2 hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-2">{blog.content.slice(0, 100)}...</p>

                {/* Read More */}
                <Link href={`/blogs/${blog.slug}`} className="text-blue-600 font-semibold flex items-center mt-4">
                  Read More <span className="ml-2">➤</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* "Read More" Button */}
        <div className="mt-10">
          <Link href='/blogs'>
            <button className="px-6 py-3 bg-secondary text-black hover:text-white font-semibold rounded-lg shadow-md hover:bg-primary transition">
              Read More Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;