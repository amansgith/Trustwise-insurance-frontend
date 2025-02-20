"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Faris Zeineldin",
    date: "31 January 2025",
    rating: 5,
    review:
      "Umang was a great help that was easily reachable and provided very clear information...",
    image: "/",
  },
  {
    name: "Sharn Gill",
    date: "30 January 2025",
    rating: 5,
    review:
      "Getting my Auto Insurance from Mr. Anmol Verma was an amazing experience...",
    image: "/",
  },
  {
    name: "Gilbert Reloba",
    date: "21 January 2025",
    rating: 5,
    review:
      "Joy Burgos was very kind, helpful, and quick in responding to all our inquiries...",
    image: "/",
  },
  {
    name: "Harp C",
    date: "17 January 2025",
    rating: 3,
    review:
      "Had a pleasant experience dealing with Amolak Dhaliwal at Aaxel Insurance...",
    image: "/",
  },
];

const GoogleReviews=()=> {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-4">GOOGLE REVIEWS</h2>
        <div className="w-1/2 border-b-4 rounded-sm border-cyan-600 mx-auto "></div>
        <hr className="mb-6"/>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-20">
          {/* Review Summary */}
          <div className="text-left">
            <h3 className="text-3xl font-bold">EXCELLENT</h3>
            <div className="flex items-center space-x-1 text-yellow-500 text-2xl">
              {"★★★★★"}
            </div>
            <p className="mt-1 text-gray-600">
              Based on <span className="font-bold">1242 reviews</span>
            </p>
            <div className="flex items-center mt-2">
              <span className="text-green-600 font-semibold">✔ Trustindex</span>
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="w-full max-w-4xl">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              // navigation
              autoplay={{ delay: 3000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="p-4 border rounded-lg shadow-md bg-white">
                    <div className="flex items-center mb-3">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="text-yellow-500 mb-2 text-lg">{"★★★★★".slice(0, review.rating)}</div>
                    <p className="text-gray-700">{review.review}</p>
                    <a href="#" className="text-blue-500 text-sm mt-2 inline-block">
                      Read more
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Write a Review Button */}
        <div className="mt-10">
          <button className="bg-blue-600 mx-auto text-white px-6 py-2 rounded-md shadow-md flex items-center space-x-2">
            <span>✍ Write a Review</span>
          </button>
        </div>
      </div>

      
    </section>
  );
}

export default GoogleReviews;
