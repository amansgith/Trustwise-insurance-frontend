import { ChevronRight } from "lucide-react";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import getBlogs from "@/lib/strapi"; 

// const featuredBlog = {
//   title: "15 Shocking Elon Musk Tweets About Stock Market",
//   category: "Stock Market",
//   author: "akbarh",
//   date: "June 28, 2021",
//   image:
//     "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//   slug: "elon-musk-stock-market-tweets",
// };

// const sidebarBlogs = [
//   {
//     title: "Want a Career in Technology? Make This Your Secret Weapon",
//     category: "Technology",
//     date: "June 28, 2021",
//     image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     slug: "career-in-technology",
//   },
//   {
//     title: "The Health Industry Is Changing Fast. Here’s How to Keep Pace",
//     category: "Health",
//     date: "June 28, 2021",
//     image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     slug: "health-industry-changes",
//   },
//   {
//     title: "Everything You Ever Wanted to Know About Technology",
//     category: "Technology",
//     date: "June 28, 2021",
//     image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     slug: "everything-about-technology",
//   },
// ];

// const editorsPicks = [
//   {
//     title: "The Frightening Affect of Climate Change on Government",
//     category: "Politics",
//     slug: "climate-change-politics",
//   },
//   {
//     title: "The Ultimate Guide to Stock Market",
//     category: "Stock Market",
//     slug: "stock-market-guide",
//   },
//   {
//     title: "Don’t Share This Politics Insider Secret",
//     category: "Politics",
//     slug: "politics-insider-secret",
//   },
//   {
//     title: "15 Unbelievable Things You Never Knew About Stock Market",
//     category: "Stock Market",
//     slug: "unbelievable-stock-market",
//   },
//   {
//     title:
//       "Automobile: All the Stats, Facts, and Data You’ll Ever Need to Know",
//     category: "Automobile",
//     slug: "automobile-stats",
//   },
// ];

// const categories = ["Stock Market", "Latest Technology", "Politics"];

// const blogs = {
//   stockMarket: [
//     {
//       title: "What Your Relationship With Stock Market Says About You",
//       date: "June 28, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//     {
//       title: "How I Learned to Stop Worrying and Love Stock Market",
//       date: "June 28, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//     {
//       title: "Why Stock Market Affects Men and Women Differently",
//       date: "June 28, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//   ],
//   latestTechnology: [
//     {
//       title: "This Will Fundamentally Change the Way You Look at Technology",
//       date: "June 28, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//     {
//       title: "Technology Changed My Life. Here’s My Story",
//       date: "June 28, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//   ],
//   politics: [
//     {
//       title: "The Frightening Affect of Climate Change on Government",
//       date: "June 28, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//     {
//       title: "Don’t Share This Politics Insider Secret",
//       date: "June 28, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//     {
//       title:
//         "Automobile: All the Stats, Facts, and Data You’ll Ever Need to Know",
//       date: "June 28, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//   ],
//   mustRead: [
//     {
//       title: "The Incredible Stock Market Product I Can’t Live Without",
//       category: "Must Read | Stock Market",
//       date: "June 25, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//     {
//       title: "8 Powerful Habits to Master for Success in Health",
//       category: "Health | Must Read",
//       date: "June 25, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//     {
//       title: "10 Global Trends That Will Affect Technology in 2022",
//       category: "Must Read | Technology",
//       date: "June 25, 2021",
//       author: "akbarh",
//       image: "https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg",
//     },
//   ],
// };



// const BlogPage = () => {
//   return (
//     <div className="max-w-[1200px] mx-auto mt-12 px-4 sm:px-6 lg:px-8">
//       {/* Featured Blog */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 relative">
//           <Link href={`/blogs/${featuredBlog.slug}`}>
//             <div
//               className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center flex flex-col justify-end p-4"
//               style={{ backgroundImage: `url(${featuredBlog.image})` }}
//             >
//               <span className="text-white py-1 text-xs font-semibold">
//                 {featuredBlog.category}
//               </span>
//               <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
//                 {featuredBlog.title}
//               </h2>
//               <div className="flex flex-wrap gap-2 text-sm text-white">
//                 <span>{featuredBlog.author}</span>
//                 <span>-</span>
//                 <span>{featuredBlog.date}</span>
//               </div>
//             </div>
//           </Link>
//         </div>

//         {/* Sidebar Blogs */}
//         <div className="flex flex-col gap-4">
//           {sidebarBlogs.map((blog, index) => (
//             <Link key={index} href={`/blogs/${blog.slug}`}>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <img src={blog.image} className="w-full sm:w-24 h-16 object-cover rounded-md" />
//                 <div>
//                   <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold">
//                     {blog.category}
//                   </span>
//                   <h3 className="text-md font-semibold hover:text-blue-500">
//                     {blog.title}
//                   </h3>
//                   <p className="text-xs text-gray-500">{blog.date}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Editors Pick Section */}
//       <div className="mt-8 border-t pt-6">
//         <h2 className="text-xl font-bold mb-4">Editors Pick</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {editorsPicks.map((pick, index) => (
//             <Link key={index} href={`/blogs/${pick.slug}`}>
//               <div className="border-b pb-2 hover:text-cyan-700">
//                 <span className="text-sm text-gray-500">{pick.category} | </span>
//                 <h4 className="text-md font-semibold">{pick.title}</h4>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Newsletter */}
//       <div className="max-w-[1400px] mx-auto mt-12">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
//           <div className="sm:col-span-2 bg-cyan-700 p-6 text-white rounded-md flex flex-col justify-center">
//             <h2 className="text-lg sm:text-2xl font-bold">Insurance made simple</h2>
//             <p className="text-sm mt-2">
//               Id ut vitae lacus, cursus sed augue dui ultricies erat sodales curabitur sit faucibus lectus sed.
//             </p>
//             <button className="mt-4 bg-white text-blue-600 px-4 py-2 font-bold rounded">
//               Sign up for free
//             </button>
//           </div>
//           <div className="bg-white border p-6 rounded-md">
//             <h3 className="font-bold text-lg">Subscribe To Our Newsletter</h3>
//             <p className="text-sm text-gray-600 mt-2">
//               Stay updated with our latest news.
//             </p>
//             <div className="mt-4 flex flex-col sm:flex-row">
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="border p-2 flex-grow"
//               />
//               <button className="bg-black text-white px-4 mt-2 sm:mt-0 sm:ml-2">Subscribe</button>
//             </div>
//           </div>
//         </div>

//         {/* Stock Market Section */}
//         <Section title="Stock Market" blogs={blogs.stockMarket} />
//         {/* Latest Technology Section */}
//         <Section title="Latest Technology" blogs={blogs.latestTechnology} columns={2} />
//         {/* Politics Section */}
//         <Section title="Politics" blogs={blogs.politics} />
//       </div>

//       {/* Must Read Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
//         <div className="lg:col-span-2">
//           <h2 className="font-extrabold text-xl sm:text-3xl">Must Read</h2>
//           <div className="mt-6 space-y-6">
//             {blogs.mustRead.map((blog, index) => (
//               <div key={index} className="flex flex-col sm:flex-row gap-6">
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full sm:w-60 h-40 object-cover rounded-md"
//                 />
//                 <div>
//                   <span className="text-sm text-blue-600 font-bold">
//                     {blog.category}
//                   </span>
//                   <h3 className="font-bold text-lg mt-2">{blog.title}</h3>
//                   <div className="text-gray-500 text-xs mt-2">
//                     {blog.author} - {blog.date}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Newsletter Section */}
//       <div className="bg-gray-100 p-6 rounded-md mb-10">
//         <h3 className="font-bold text-lg">Subscribe To Our Newsletter</h3>
//         <p className="text-sm text-gray-600 mt-2">
//           Stay updated with our latest insights.
//         </p>
//         <div className="mt-4 flex flex-col sm:flex-row">
//           <input type="email" placeholder="Email address" className="border p-2 flex-grow" />
//           <button className="bg-black text-white px-4 mt-2 sm:mt-0 sm:ml-2">Subscribe</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// Reusable Section Component
// const Section = ({ title, blogs, columns = 3 }) => {
//   return (
//     <div className="mb-10">
//       <h2 className="font-extrabold text-xl sm:text-3xl">{title}</h2>
//       <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-6 mt-4`}>
//         {blogs.map((blog, index) => (
//           <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
//             <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="font-bold text-lg mt-2">{blog.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


const BlogPage = async () => {
  const blogs = await getBlogs();

  if (!blogs.length) {
    return (
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold">No blogs available</h2>
        <p className="text-gray-600">Check back later for updates.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`} className="block border p-4 rounded-md shadow-sm hover:shadow-lg transition">
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
