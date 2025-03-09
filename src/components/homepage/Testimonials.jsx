// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const logo="https://cdn-icons-png.flaticon.com/128/281/281764.png"
// const reviews = [
//   {
//     name: "Joshua Nolan",
//     date: "31 January 2025",
//     rating: 5,
//     review:
//       "Umang was a great help that was easily reachable and clear information...",
//     image: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
//   },
//   {
//     name: "Sharn Gill",
//     date: "30 January 2025",
//     rating: 5,
//     review:
//       "Getting my Auto Insurance from Mr. Anmol Verma was an amazing experience...",
//     image: "https://cdn-icons-png.flaticon.com/128/9408/9408175.png",
//   },
//   {
//     name: "Gilbert Reloba",
//     date: "21 January 2025",
//     rating: 5,
//     review:
//       "Joy Burgos was very kind, helpful, and quick in responding to all our inquiries...",
//     image: "https://cdn-icons-png.flaticon.com/128/219/219970.png",
//   },
//   {
//     name: "Harp C",
//     date: "17 January 2025",
//     rating: 3,
//     review:
//       "Had a pleasant experience dealing with Amolak Dhaliwal at Trsutwise Insurance...",
//     image: "https://cdn-icons-png.flaticon.com/128/11918/11918393.png",
//   },
// ];

// const GoogleReviews = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto text-center">
//         {/* Section Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">GOOGLE REVIEWS</h2>
//         <div className="w-1/2 border-b-4 rounded-sm border-primary mx-auto "></div>
//         <hr className="mb-6" />
//         <div className="flex flex-col items-center md:flex-row md:justify-center gap-20">
//           {/* Review Summary */}
//           <div className="text-left">
//             <h3 className="text-3xl font-bold">EXCELLENT</h3>
//             <div className="flex items-center space-x-1 text-yellow-500 text-2xl">
//               {"★★★★★"}
//             </div>
//             <p className="mt-1 text-gray-600">
//               Based on <span className="font-bold">1242 reviews</span>
//             </p>
//             <div className="flex items-center mt-2">
//               <span className="text-green-600 font-semibold">✔ Trustindex</span>
//             </div>
//           </div>

//           {/* Reviews Carousel */}
//           <div className="w-full max-w-4xl">
//             <Swiper
//               modules={[Navigation, Autoplay]}
//               spaceBetween={20}
//               slidesPerView={1}
//               autoplay={{ delay: 3000 }}
//               breakpoints={{
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
//               {reviews.map((review, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="p-4 border rounded-lg shadow-md bg-white">
//                     <div className="flex items-center mb-3">
//                       <img
//                         src={review.image}
//                         alt={review.name}
//                         className="w-10 h-10 rounded-full mr-3"
//                       />
//                       <div>
//                         <h4 className="font-semibold">{review.name}</h4>
//                         <p className="text-sm text-gray-500">{review.date}</p>
//                       </div>
//                       <img
//                         src={logo}
//                         alt="google logo"
//                         className="w-10 h-10 rounded-full mx-auto"
//                       />
//                     </div>
//                     <div className="text-yellow-500 mb-2 text-lg">
//                       {"★★★★★".slice(0, review.rating)}
//                     </div>
//                     <p className="text-gray-700">{review.review}</p>
//                     <a
//                       href="#"
//                       className="text-blue-500 text-sm mt-2 inline-block"
//                     >
//                       Read more
//                     </a>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>

//         {/* Write a Review Button */}
//         <div className="mt-14">
//           <button className="bg-primary text-lg font-semibold mx-auto text-white px-6 py-2 rounded-md shadow-md flex items-center space-x-2">
//             <span>✍ Write a Review</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GoogleReviews;

"use client";

import Image from "next/image";
import vectorimg from '../../../public/vectorimg.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Smith Victoria",
    role: "Director",
    image:
      "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    quote:
      "Umang was a great help that was easily reachable and clear information...",
  },
  {
    name: "Rahul Reviyan",
    role: "Director",
    image:
      "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    quote:
      "Getting my Auto Insurance from Mr. Anmol Verma was an amazing experience...",
  },
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    quote:
      "Joy Burgos was very kind, helpful, and quick in responding to all our inquiries...",
  },
  {
    name: "Sophia Carter",
    role: "Marketing Head",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    quote:
      "Had a pleasant experience dealing with Amolak Dhaliwal at Trsutwise Insurance...",
  },
];

const GoogleReviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 px-6 p-6 md:px-16 lg:px-24 bg-gray-50">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-blue-500 text-lg font-semibold">{`>>> TESTIMONIALS <<<`}</h3>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">
          What our customers are{" "}
          <span className="text-blue-500">talking about</span>
        </h2>
        <p className="text-gray-600 mt-4">
          We have more than{" "}
          <span className="font-semibold">2,000 happy customers</span> with us
          as a part of our forever-growing family. See what they have to say
          about our services and their experiences.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="">
        <Swiper
          spaceBetween={60}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                ref={ref}
                className={`bg-white overflow-hidden shadow-lg rounded-xl mx-4 p-16 md:p-8 flex flex-col items-center text-center border border-gray-100 transform transition-transform duration-300 hover:scale-105 mb-8 mt-12 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {/* Profile Image with Quote Icon */}
                <div className="relative rounded-full w-32 h-32">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={480}
                    height={480}
                    className="rounded-full border-4 border-blue-500"
                  />
                  <div className="absolute -top-3 -right-3 bg-white p-2 rounded-full shadow-md">
                    <span className="text-blue-500 text-xl font-bold">❝</span>
                  </div>
                </div>
                {/* Abstract Shape Image */}
                <div className="absolute grayscale hover:grayscale-0 transition duration-1000 bottom-[-115px] right-[-30px] w-52 rotate-45 h-full -z-10 ">
                  <Image
                    src={vectorimg}
                    alt="Abstract Shape"
                    layout="fill"
                    objectFit="cover"
                    className=" transition-all duration-300"
                  />
                </div>
                {/* Star Ratings */}
                <div className="flex justify-center text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                {/* Name & Role */}
                <h3 className="text-xl font-bold text-gray-800 mt-2">
                  {testimonial.name}
                </h3>
                {/* Testimonial Quote */}
                <p className="text-gray-600 mt-3">{testimonial.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GoogleReviews;