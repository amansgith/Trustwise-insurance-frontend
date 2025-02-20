import { ChevronRight, Search } from "lucide-react";
import React from "react";

const insurances = ["Auto", "Home", "Business"];

const autoBlogs = [
  {
    title: "Best Practices for Managing Commercial Auto Insurance Claims",
    date: "10/02/2019",
  },
  {
    title: "Best Practices for Managing Commercial Auto Insurance Claims",
    date: "10/02/2019",
  },
  {
    title: "Best Practices for Managing Commercial Auto Insurance Claims",
    date: "10/02/2019",
  },
  {
    title: "Best Practices for Managing Commercial Auto Insurance Claims",
    date: "10/02/2019",
  },
  {
    title: "Best Practices for Managing Commercial Auto Insurance Claims",
    date: "10/02/2019",
  },
  {
    title: "Best Practices for Managing Commercial Auto Insurance Claims",
    date: "10/02/2019",
  },
];

const businessBlogs = [
  {
    title: "Best Practices for Managing Commercial Auto Insurance Claims",
    date: "10/02/2019",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita at odio error cumque architecto perferendis iure molestias fugit. Blanditiis, dolores debitis! Fuga voluptates modi, quasi aut provident iste inventore?",
    subBlogs: [
      {
        title: "Best Practices for Managing Commercial Auto Insurance Claims",
        date: "10/02/2019",
      },
      {
        title: "Best Practices for Managing Commercial Auto Insurance Claims",
        date: "10/02/2019",
      },
    ],
  },
  {
    title: "Best Practices for Managing Commercial Auto Insurance Claims",
    date: "10/02/2019",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita at odio error cumque architecto perferendis iure molestias fugit. Blanditiis, dolores debitis! Fuga voluptates modi, quasi aut provident iste inventore?",
    subBlogs: [
        {
          title: "Best Practices for Managing Commercial Auto Insurance Claims",
          date: "10/02/2019",
        },
        {
          title: "Best Practices for Managing Commercial Auto Insurance Claims",
          date: "10/02/2019",
        },
    ]
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex justify-between">
        {insurances.map((ins, ind) => (
          <button
            key={ind}
            className="py-3.5 px-24 font-bold text-white bg-[#2a80b4] hover:bg-[#9ecb75] hover:text-black flex items-center"
          >
            {ins} Inusrance
          </button>
        ))}
        <div className="flex gap-1 items-center border-b border-gray-800">
          <Search />
          <input
            type="text"
            className="p-1 text-gray-500 focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="font-extrabold text-4xl">Auto Insurance</h2>
        <div className="grid grid-cols-3 gap-1">
          {autoBlogs.map((blog, ind) => (
            <div
              key={ind}
              className="relative w-full h-[220px] bg-cover bg-center flex flex-col justify-end p-4"
              style={{
                backgroundImage: `url("https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg")`,
              }}
            >
              <p className="text-white text-lg font-bold">{blog.title}</p>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-white">
                  Aaxel Insurance -
                </span>
                <span className="text-neutral-800 text-xs">{blog.date}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center text-gray-500 font-bold text-xs p-2 border border-gray-500 w-fit hover:border-0 hover:bg-[#2a80b4] hover:text-white mx-auto">
          Load More <ChevronRight size={14} />
        </button>
      </div>
      <div className="flex flex-col">
        <h2 className="font-extrabold text-4xl">Business Insurance</h2>
        <div className="grid grid-cols-2">
          {businessBlogs.map((blog, ind) => (
            <div
              key={ind}
              className="relative w-full h-[220px] bg-cover bg-center flex flex-col justify-end p-4"
              style={{
                backgroundImage: `url("https://www.aaxel.ca/wp-content/uploads/2025/01/insurance-concept-the-auto-dealer-emphasizing-on-the-agreement-of-the-contract-for-his-client--356x220.jpg")`,
              }}
            >
              <p className="text-white text-lg font-bold">{blog.title}</p>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-white">
                  Aaxel Insurance -
                </span>
                <span className="text-neutral-800 text-xs">{blog.date}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center text-gray-500 font-bold text-xs p-2 border border-gray-500 w-fit hover:border-0 hover:bg-[#2a80b4] hover:text-white mx-auto">
          Load More <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
