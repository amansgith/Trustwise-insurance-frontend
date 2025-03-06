import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import getBlogs from "@/lib/strapi";

const BlogPage = async () => {
  const blogs = await getBlogs();

  if (!blogs.length) {
    return (
      <div className="text-center my-20">
        <h2 className="text-2xl font-bold">No blogs available</h2>
        <p className="text-gray-600">Check back later for updates.</p>
      </div>
    );
  }

  // Filter blogs by category
  const autoInsuranceBlogs = blogs.filter(blog => blog.category === 'Auto-Insurance');
  const homeInsuranceBlogs = blogs.filter(blog => blog.category === 'Home-Insurance');
  const businessInsuranceBlogs = blogs.filter(blog => blog.category === 'Business-Insurance');

  return (
    <div className="max-w-[1200px] mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>

      {/* Auto Insurance Section */}
      <Section title="Auto Insurance" blogs={autoInsuranceBlogs} />

      {/* Home Insurance Section */}
      <Section title="Home Insurance" blogs={homeInsuranceBlogs} />

      {/* Business Insurance Section */}
      <Section title="Business Insurance" blogs={businessInsuranceBlogs} />
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, blogs }) => {
  if (!blogs.length) return null;

  const featuredBlog = blogs[0];
  const sidebarBlogs = blogs.slice(1, 4);
  const restBlogs = blogs.slice(4);

  return (
    <div className="mb-10">
      <h2 className="font-extrabold text-xl sm:text-3xl">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* Featured Blog */}
        <div className="lg:col-span-2 relative rounded-md">
          <Link href={`/blogs/${featuredBlog.slug}`}>
            <div
              className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center flex flex-col justify-end rounded-lg"
              style={{ backgroundImage: `url(${featuredBlog.image})` }}
            >
              <div className="bg-black bg-opacity-50 p-2 rounded">
                <span className="text-white py-1 text-xs font-semibold">
                  {featuredBlog.category}
                </span>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                  {featuredBlog.title}
                </h2>
                <div className="flex flex-wrap gap-2 text-sm text-white">
                  <span>{featuredBlog.author}</span>
                  <span>-</span>
                  <span>{new Date(featuredBlog.publishedAt).toDateString()}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Sidebar Blogs */}
        <div className="flex flex-col gap-4">
          {sidebarBlogs.map((blog, index) => (
            <Link key={index} href={`/blogs/${blog.slug}`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <img src={blog.image} className="w-full sm:w-24 h-16 object-cover rounded-md" />
                <div>
                  <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold">
                    {blog.category}
                  </span>
                  <h3 className="text-md font-semibold hover:text-blue-500">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-gray-500">{new Date(blog.publishedAt).toDateString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Rest of the Blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {restBlogs.map((blog, index) => (
          <Link key={index} href={`/blogs/${blog.slug}`} className="block border p-4 rounded-md shadow-sm hover:shadow-lg transition">
            {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />}
            <h2 className="text-lg font-bold">{blog.title}</h2>
            <p className="text-sm text-gray-500">{new Date(blog.publishedAt).toDateString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;