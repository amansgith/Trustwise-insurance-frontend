"use client";
import Image from "next/image";
import { Playfair_Display, Open_Sans } from "next/font/google";
import { FaRegCalendarAlt, FaRegCommentDots } from "react-icons/fa";

// Import Playfair Display and Open Sans fonts
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Sample blog data (Replace this with actual API data later)
// const blogs = [
//   {
//     id: 1,
//     title: "Life Insurance for Seniors: What You Need to Know",
//     date: "02/18/2025",
//     author: "Aaxel Insurance",
//     image: "https://www.aaxel.ca/wp-content/uploads/2025/01/asian-businesswoman-and-a-salesman-discuss-car-sales-insurance-financing-a-customer-at-a-desk-696x464.jpg", // Correct path
//     excerpt:
//       "As we age, financial security becomes more important than ever...",
//   },
//   {
//     id: 2,
//     title: "Does Personal Insurance Cover Accidental Damage to Others’ Property?",
//     date: "02/17/2025",
//     author: "Aaxel Insurance",
//     image: "https://www.aaxel.ca/wp-content/uploads/2025/01/asian-businesswoman-and-a-salesman-discuss-car-sales-insurance-financing-a-customer-at-a-desk-696x464.jpg", // Correct path
//     excerpt:
//       "Accidents happen when we least expect them. Whether it's a slip that leads to...",
//   },
//   {
//     id: 3,
//     title: "The Benefits of Professional Liability Insurance for Engineers",
//     date: "02/16/2025",
//     author: "Aaxel Insurance",
//     image: "https://www.aaxel.ca/wp-content/uploads/2025/01/asian-businesswoman-and-a-salesman-discuss-car-sales-insurance-financing-a-customer-at-a-desk-696x464.jpg", // Correct path
//     excerpt:
//       "In today’s competitive and highly regulated engineering industry...",
//   },
//   {
//     id: 4,
//     title: "How to File a Property Insurance Claim After a Major Loss",
//     date: "02/15/2025",
//     author: "Aaxel Insurance",
//     image: "https://www.aaxel.ca/wp-content/uploads/2025/01/asian-businesswoman-and-a-salesman-discuss-car-sales-insurance-financing-a-customer-at-a-desk-696x464.jpg", // Correct path
//     excerpt:
//       "Experiencing a major loss due to natural disasters, theft, or accidents...",
//   },
//   {
//     id: 5,
//     title: "Adventure Travel: Do You Need Special Travel Insurance?",
//     date: "02/14/2025",
//     author: "Aaxel Insurance",
//     image: "https://www.aaxel.ca/wp-content/uploads/2025/01/asian-businesswoman-and-a-salesman-discuss-car-sales-insurance-financing-a-customer-at-a-desk-696x464.jpg", // Correct path
//     excerpt:
//       "Adventure travel is an exhilarating way to explore the world, pushing boundaries...",
//   },
//   {
//     id: 6,
//     title: "How to Choose the Right Insurance Broker for Your Business",
//     date: "02/13/2025",
//     author: "Aaxel Insurance",
//     image: "https://www.aaxel.ca/wp-content/uploads/2025/01/asian-businesswoman-and-a-salesman-discuss-car-sales-insurance-financing-a-customer-at-a-desk-696x464.jpg", // Correct path
//     excerpt:
//       "Choosing the right insurance broker for your business is a critical decision...",
//   },
// ];

const blogPosts = [
  {
    id: 1,
    title: "Which allows you to pay down insurance bills",
    description: "Aliquam viverra arcu. Donec aliquet blandit enim feugiat mattis.",
    date: "15 March, 2023",
    comments: "02 Comments",
    category: "Business",
    image: "https://www.aaxel.ca/wp-content/uploads/2025/01/asian-businesswoman-and-a-salesman-discuss-car-sales-insurance-financing-a-customer-at-a-desk-696x464.jpg",
  },
  {
    id: 2,
    title: "Leverage agile frameworks to provide",
    description: "Aliquam viverra arcu. Donec aliquet blandit enim feugiat mattis.",
    date: "15 March, 2023",
    comments: "02 Comments",
    category: "Business",
    image: "https://www.aaxel.ca/wp-content/uploads/2025/01/asian-businesswoman-and-a-salesman-discuss-car-sales-insurance-financing-a-customer-at-a-desk-696x464.jpg",
  },
  {
    id: 3,
    title: "Bring to the table win-win survival strategies",
    description: "Aliquam viverra arcu. Donec aliquet blandit enim feugiat mattis.",
    date: "15 March, 2023",
    comments: "02 Comments",
    category: "Business",
    image: "https://www.aaxel.ca/wp-content/uploads/2025/01/asian-businesswoman-and-a-salesman-discuss-car-sales-insurance-financing-a-customer-at-a-desk-696x464.jpg",
  },
];


// const BlogSection = () => {
//   return (
//     <section className="py-10 px-5">
//       {/* Blog Title */}
//       <div className="w-full flex flex-col items-center gap-4">
//         <h2 className={`text-3xl md:text-6xl font-bold text-center`}>
//           BLOG
//         </h2>
//         <p className="h-1 mx-auto w-1/6 mb-6 bg-[#2a80b4]"></p>
//       </div>
//       <div className="w-16 mx-auto mb-6"></div>

//       {/* Blog Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {blogs.map((blog) => (
//           <div key={blog.id} className="bg-white cursor-pointer rounded-md overflow-hidden">
//             {/* Blog Image */}
//             <div className="relative w-full h-48">
//               <Image src={blog.image} alt={blog.title} fill objectFit="cover" />
//             </div>

//             {/* Blog Content */}
//             <div className={`p-5 ${openSans.className}`}>
//               <h3 className="text-lg font-bold mb-2 hover:text-yellow-600 transition duration-300">
//                 {blog.title}
//               </h3>
//               <p className="text-gray-500 text-sm mb-2">
//                 <span className="font-bold text-black">{blog.author}</span> - {blog.date}
//               </p>
//               <p className="text-gray-700 text-sm">{blog.excerpt}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Read More Button */}
//       <div className="flex justify-center mt-8">
//         <button className="flex items-center text-yellow-600 font-bold text-lg hover:text-yellow-500 transition duration-300">
//           <div className="flex items-center transform hover:translate-x-2 transition duration-300">
//             <span className="text-4xl mr-4">→</span>
//             <span className="mr-2 mt-1">READ MORE</span>
//           </div>
//         </button>
//       </div>
//     </section>
//   );
// };

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900">Latest news & articles</h2>
        <p className="text-gray-600 uppercase mt-2">from the blog</p>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              
              {/* Image */}
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                {/* Date & Comments */}
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                  <span className="flex items-center">
                    <FaRegCalendarAlt className="mr-1" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaRegCommentDots className="mr-1" /> {post.comments}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mt-2 hover:text-blue-600 transition">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-2">{post.description}</p>

                {/* Read More */}
                <a href="#" className="text-blue-600 font-semibold flex items-center mt-4">
                  Read More <span className="ml-2">➤</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* "Read More" Button */}
        <div className="mt-10">
          <button className="px-6 py-3 bg-secondary text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Read More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;