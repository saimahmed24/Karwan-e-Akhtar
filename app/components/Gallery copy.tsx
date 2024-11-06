"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Still import pagination CSS if you use it elsewhere
import { Autoplay, Navigation } from "swiper/modules";
import img1 from "/public/gallery1.jpg"; // Replace with your images
import img2 from "/public/hajj.jpg";
import img3 from "/public/hajj.jpg"; // Ensure you use different images

// Hardcoded images data
const images = [img1, img2, img3];

const Gallery = () => {
  return (
    <div className="w-full section-padding bg-gray-200 py-20" id="gallery">
      <h1 className="text-4xl text-center font-light text-gray-500 md:text-6xl mb-10 pt-8">
        Gallery
      </h1>

      <Swiper
        id="gallery"
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        className="w-full" // Ensure swiper container is full width
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center w-full overflow-hidden">
            <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[78vh] overflow-hidden">
              <Image
                src={img}
                alt={`Slide ${i + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
