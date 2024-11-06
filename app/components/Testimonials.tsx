"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Define the type for the testimonial
interface Testimonial {
  message: string;
  name: string;
  location: string;
}

// Hardcoded testimonials data without images
const testimonials: Testimonial[] = [
  {
    message: "Karwan-e-Akhtar possesses a team of consummate professionals who treat all hujjaj as family. We are grateful for the round-the-clock full-board food arrangements and the unwavering dedication, responsiveness, and willingness of the entire team to cater to our needs.",
    name: "Amna Shahmeer",
    location: "Karachi, Pakistan",
  },
  {
    message: "We opted for Karwan-e-Akhtar Hajj journey for this year. Wonderful people, amazing services. They went above and beyond to make this journey as smooth as possible for us. I am so glad we chose them. The coordinators are always just a call away. I would highly recommend these guys.",
    name: "Faiqa Zia",
    location: "Karachi, Pakistan",
  },
  {
    message: "The most beautiful experience of life with the most genuine people. Can't thank Karwan-e-Akhtar enough for what they did for all the hajjis.",
    name: "Mahad Rehan",
    location: "Karachi, Pakistan",
  },
  {
    message: "Went for Umrah in Rabi-ul-Awwal this year with my family through Karwan-e-Akhtar and would like to thank their staff and team members for the great services and hospitality. I would highly recommend Karwan-e-Akhtar to everyone.",
    name: "Laiba Rafique",
    location: "Karachi, Pakistan",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-200 py-20 my-20">
      <h1 className="text-4xl text-center font-light text-gray-500 md:text-6xl mb-10 pt-4">
        Our Clients
      </h1>

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
          480: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((tm, i) => (
          <SwiperSlide key={i}>
            <aside className="p-4">
              <div className="p-8 rounded-lg bg-darkGray bg-opacity-10 shadow-md flex flex-col items-center hover:scale-110 transition-all duration-300 bg-white w-full h-[60vh]">
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
    </section>
  );
};

export default Testimonials;
