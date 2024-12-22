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
      <h1 className="text-6xl text-center font-semibold text-[#fb923c] md:text-7xl mb-8 pt-12">
        About Us
      </h1>
      
      <div className="max-w-7xl mx-auto mb-16 px-6 md:px-8 lg:px-12">
        <p className="text-lg text-gray-700 leading-relaxed">
        Since its inception in 2000, Karwan-e-Akhtar has been a trusted name in providing premium Hajj and Umrah services, setting the benchmark for excellence in spiritual travel. With over two decades of experience, we have become Pakistan’s foremost choice for pilgrims seeking a journey defined by luxury, comfort, and ease.

Our reputation is built on a foundation of meticulous attention to detail, personalized care, and an unwavering commitment to our clients’ spiritual and travel needs. From comprehensive travel arrangements to seamless accommodations and guided support, we ensure a stress-free and enriching pilgrimage experience. Whether it’s your first journey or a return to the Holy Land, Karwan-e-Akhtar is dedicated to making your sacred journey as memorable and fulfilling as possible.

Choose Karwan-e-Akhtar for a pilgrimage experience that prioritizes your spiritual devotion while taking care of every logistical detail with unparalleled professionalism.
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
