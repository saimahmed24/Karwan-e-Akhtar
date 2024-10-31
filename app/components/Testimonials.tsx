"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Define the type for the testimonial
interface Testimonial {
  message: string;
  img: string;
  name: string;
  location: string;
}

// Hardcoded testimonials data
const testimonials: Testimonial[] = [
  {
    message: "This is an amazing service! Highly recommend it.",
    img: "beijing.jpg", // Replace with your image path
    name: "John Doe",
    location: "New York, USA",
  },
  {
    message: "I had a great experience and would come back again.",
    img: "path/to/image2.jpg", // Replace with your image path
    name: "Jane Smith",
    location: "London, UK",
  },
  {
    message: "Fantastic quality and customer service.",
    img: "path/to/image3.jpg", // Replace with your image path
    name: "Alice Johnson",
    location: "Sydney, Australia",
  },
  {
    message: "The best investment I made this year!",
    img: "path/to/image4.jpg", // Replace with your image path
    name: "Bob Brown",
    location: "Toronto, Canada",
  },
];
<style jsx>{`
  .swiper-pagination-bullet {
    background-color: #fb923c; /* Default bullet color */
    opacity: 0.7; /* Optional: Adjust the opacity */
    transition: background-color 0.3s; /* Optional: Smooth transition */
  }

  .swiper-pagination-bullet-active {
    background-color: #f97316; /* Active bullet color */
    opacity: 1; /* Fully opaque for active bullet */
  }

  .swiper-pagination {
    bottom: 10px; /* Adjust position if needed */
  }
`}</style>

const Testimonials = () => {
  return (
    
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        1280: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        640: { slidesPerView: 2 },
        480: { slidesPerView: 1 }, // Show 1 slide on small screens
        0: { slidesPerView: 1 }, // Ensure this handles all screens below 480px
      }}
    >
      {testimonials.map((tm: Testimonial, i: number) => (
        <SwiperSlide key={i}>
          <aside className="p-4">
            <div className="p-8 rounded-lg bg-darkGray bg-opacity-10 shadow-md flex flex-col items-center justify-center h-80">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 559.27 546.15"
                className="w-10 h-10 fill-[#fb923c]"
              >
                <path d="M336.63,250.54V33.44H553.71v217.1S587.7,503,364.37,512.71V392s85.76,35.63,74.55-141.49Z" />
                <path d="M3.71,250.54V33.44H220.79v217.1S254.78,503,31.46,512.71V392S117.21,427.66,106,250.54Z" />
              </svg>
              <p className="text-base text-darkGray text-center mt-6 mb-8">
                {tm.message}
              </p>
              <Image
                src={`/${tm.img}`}
                alt={tm.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h3 className="text-center text-lg text-black">
                {tm.name}
                <br />
                <small className="text-[#fb923c] font-medium text-sm">
                  {tm.location}
                </small>
              </h3>
            </div>
          </aside>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
