"use client";
import Image from "next/image";
import vectorimg from '../../../public/vectorimg.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
    name: "John Durek",
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
      "Had a pleasant experience dealing with Amolak Dhaliwal at Trustwise Insurance...",
  },
];

const GoogleReviews = () => {
  

  return (
    <section className="py-16 px-6 p-6 md:px-16 lg:px-24 bg-gray-50">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-primary text-lg font-semibold">{`>>> TESTIMONIALS <<<`}</h3>
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
                
                className={`bg-white overflow-hidden shadow-lg rounded-xl mx-4 p-16 md:p-8 flex flex-col items-center text-center border border-gray-100 transform transition-transform duration-500 hover:scale-105 mb-8 mt-12` }
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