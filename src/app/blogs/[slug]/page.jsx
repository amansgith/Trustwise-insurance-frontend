import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RelatedPosts from "./components/RelatedPosts";
import CommentSection from "./components/CommentSection";
import Link from "next/link";
import { marked } from "marked";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function Page({ params }) {
  const { slug } = await Promise.resolve(params);

  // Fetch the blog post from Strapi based on slug
  const res = await fetch(
    `${API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="text-center text-red-500">Error fetching blog post.</div>
    );
  }

  const data = await res.json();
  const blog = data?.data?.length > 0 ? data.data[0] : null;

  if (!blog) {
    return <div className="text-center text-gray-500">Blog not found.</div>;
  }

  // Extract blog data
  const { title, content, publishedAt, Image, category } = blog;
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  // Convert Markdown content to HTML
  const convertedContent = marked(content || "");

  // Fetch all blogs from Strapi
  const allBlogsRes = await fetch(`${API_URL}/api/blogs?populate=*`, { cache: "no-store" });
  const allBlogsData = await allBlogsRes.json();
  const allBlogs = allBlogsData?.data.slice(0,5) || [];

  // Fetch related posts from the same category
  const relatedRes = await fetch(`${API_URL}/api/blogs?filters[category][id][$eq]=${category.id}&filters[slug][$ne]=${slug}&populate=*`, { cache: "no-store" });
  const relatedData = await relatedRes.json();
  const relatedPosts = relatedData?.data || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row">
        <article className="max-w-4xl mx-auto lg:mr-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h1>

          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center mb-4">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Trustwise Insurance
              </p>
              <p className="text-sm text-gray-500 block">
                Published on {formattedDate}
              </p>
            </div>

            <Link href="/call-back-request">
              <button className="py-2.5 px-6 mr-14 rounded-lg sm:px-8 uppercase text-white bg-primary hover:bg-secondary hover:text-black text-base sm:text-lg font-bold transition duration-300">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Display the blog image if available */}
          {Image?.formats?.medium?.url && (
            <img
              src={`${Image.formats.medium.url}`}
              alt={title}
              className="rounded-lg mb-8 w-full h-auto max-w-4xl mx-auto"
            />
          )}

          {/* Render Markdown Content as HTML */}
          <div
            className="prose lg:prose-base xl:prose-base prose-blue mx-auto"
            dangerouslySetInnerHTML={{ __html: convertedContent }}
          />
          <br />
          <div className=" mx-2 py-4">
            <p className="text-2xl font-semibold pb-2">Related Posts</p>
            <RelatedPosts posts={relatedPosts} />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="w-full hidden md:block lg:w-1/3 lg:sticky lg:top-20 lg:self-start mt-8 lg:mt-0">
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Recent Blogs</h2>
            <ul>
              {allBlogs.map((blog) => (
                <li key={blog.id} className="mb-2">
                  <Link href={`/blogs/${blog.slug}`}>
                    <h3 className="font-serif hover:underline">
                      {`>> ${blog.title}`}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Popular Blogs</h2>
            <ul>
              {allBlogs.map((blog) => (
                <li key={blog.id} className="mb-2">
                  <Link href={`/blogs/${blog.slug}`}>
                    <h3 className=" font-mono hover:underline">
                    {`>> ${blog.title}`}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}