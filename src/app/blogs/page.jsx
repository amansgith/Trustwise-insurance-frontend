"use client";
import Link from "next/link";
import getBlogs from "@/lib/strapi";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        console.log("Fetched blogs:", data); // Log fetched data
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error); // Log any errors
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <DotLottieReact
          src="https://lottie.host/d48c5153-4b6d-48cb-9837-b961fbcc76ca/dC5NL3iE7H.lottie"
          loop
          autoplay
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="text-center my-20">
        <h2 className="text-2xl font-bold">No blogs available</h2>
        <p className="text-gray-600">Check back later for updates.</p>
      </div>
    );
  }

  // Filter blogs by category
  const autoInsuranceBlogs = blogs.filter((blog) => blog.category === "Auto-Insurance");
  const homeInsuranceBlogs = blogs.filter((blog) => blog.category === "Home-Insurance");
  const businessInsuranceBlogs = blogs.filter((blog) => blog.category === "Business-Insurance");

  return (
    <div className="w-full py-16 md:py-2 md:px-0 mt-8">
      {/* Title and Search Bar Container */}
      <div className="bg-primary py-8 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-white text-center uppercase">Blogs</h1>

        {/* Search Bar */}
        <div className="flex justify-center px-4">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full max-w-md p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="px-8">
        {/* Auto Insurance Section */}
        <Section title="Auto Insurance" blogs={autoInsuranceBlogs} />
        {/* Home Insurance Section */}
        <Section title="Home Insurance" blogs={homeInsuranceBlogs} />
        {/* Business Insurance Section */}
        <Section title="Business Insurance" blogs={businessInsuranceBlogs} />
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, blogs }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(blogs.slice(0, 4));
  const [loading, setLoading] = useState(false);

  const loadMoreBlogs = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleBlogs(blogs);
      setLoading(false);
    }, 1000); // Simulate loading time
  };

  if (!blogs.length) return null;

  const featuredBlog = visibleBlogs[0];
  const sidebarBlogs = visibleBlogs.slice(1, 4);
  const restBlogs = visibleBlogs.slice(4);

  return (
    <div className="mb-10">
      <h2 className="font-extrabold text-xl sm:text-3xl">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* Featured Blog */}
        <motion.div
          className="lg:col-span-2 relative rounded-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={`/blogs/${featuredBlog.slug}`}>
            <div
              className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center flex flex-col justify-end rounded-lg"
              style={{ backgroundImage: `url(${featuredBlog.image})` }}
            >
              <div className="bg-black bg-opacity-50 p-2 rounded">
                <span className="text-white py-1 text-xs font-semibold">{featuredBlog.category}</span>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">{featuredBlog.title}</h2>
                <div className="flex flex-wrap gap-2 text-sm text-white">
                  <span>{featuredBlog.author}</span>
                  <span>-</span>
                  <span>{new Date(featuredBlog.publishedAt).toDateString()}</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Sidebar Blogs */}
        <div className="flex flex-col gap-4">
          {sidebarBlogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <img src={blog.image} className="w-full sm:w-24 h-16 object-cover rounded-md" />
                  <div>
                    <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold">{blog.category}</span>
                    <h3 className="text-md font-semibold hover:text-blue-500">{blog.title}</h3>
                    <p className="text-xs text-gray-500">{new Date(blog.publishedAt).toDateString()}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={loadMoreBlogs}
          className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition duration-300 flex items-center"
          disabled={loading}
        >
          {loading ? (
            <DotLottieReact
              src="https://lottie.host/d48c5153-4b6d-48cb-9837-b961fbcc76ca/dC5NL3iE7H.lottie"
              loop
              autoplay
              style={{ width: "30px", height: "30px" }}
            />
          ) : (
            "Load More"
          )}
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
