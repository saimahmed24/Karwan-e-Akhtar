"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "/public/gallery1.jpg"; // Replace with your images
import img2 from "/public/hajj.jpg";
import img3 from "/public/hajj.jpg"; // Ensure you use different images

// Hardcoded images data
const images = [img1, img2, img3];

const Gallery = () => {
  return (
    <div className="w-full flex flex-col section-padding bg-gray-200 py-20" id="gallery">
      <h1 className="text-4xl text-center font-semibold text-gray-800 md:text-5xl mb-8 pt-12">
        About Us
      </h1>
      
      <div className="max-w-7xl mx-auto mb-16 px-6 md:px-8 lg:px-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti maxime blanditiis 
          consequuntur minus neque repellendus perspiciatis facere odio earum, fugiat est labore. 
          Corrupti ullam, culpa laborum distinctio ipsam maiores! Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Aut sint accusamus id soluta iure ab ea fugiat consequatur.
        </p>
      </div>
      
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          className="w-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="relative w-full h-[70vh] md:h-[85vh] lg:h-[90vh] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={img}
                  alt={`Slide ${i + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
