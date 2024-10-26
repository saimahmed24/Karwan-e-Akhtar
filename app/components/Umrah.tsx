"use client";

import Image from "next/image";
import img1 from "/public/hero.webp";
import { features } from "process";

const packageData = [
  {
    image: img1,
    title: "Umrah Package 1",
    description: "Join us for a spiritually enriching journey to Mecca with our comprehensive Umrah Package. Enjoy guided tours, comfortable accommodations, and transportation.",
    features: ["Guided Tours", "Accommodations", "Transportation"],
  },
  {
    image: img1,
    title: "Umrah Package 2",
    description: "Experience a unique spiritual journey with our Umrah Package, including exclusive amenities and personalized services to ensure a memorable pilgrimage.",
    features: ["Personalized Services", "Exclusive Amenities", "Comfortable Stays"],
  },
  {
    image: img1,
    title: "Umrah Package 3",
    description: "Our Umrah Package 3 offers flexible itineraries, ensuring you get the most out of your spiritual experience with options for various group sizes.",
    features: ["Flexible Itineraries", "Group Options", "Expert Guidance"],
  },
 
];

const PackageCard = ({ pkg }) => {
  return (
    <div id="umrah" className="flex flex-col items-center gap-8 bg-white rounded w-full transition-all duration-300 hover:scale-105 drop-shadow-md hover:drop-shadow-2xl">
      <Image
        src={pkg.image}
        alt="project-image"
        className="w-full cursor-pointer rounded"
      />
      <div className="flex flex-col gap-5 p-4">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold text-orange-400">{pkg.title}</div>
          <p className="text-gray-500">{pkg.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {pkg.features.map((feature, index) => (
            <span key={index} className="border text-xs text-white border-orange-400 rounded-lg bg-black/50 px-2 py-1">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Umrah = () => {
  return (
    <div id="umrah" className="flex min-h-screen  flex-col items-center justify-center gap-16 p-4 md:py-24 bg-gray-200">
      <h1 className="text-4xl font-light text-gray-500 md:text-6xl">Umrah Packages</h1>
      <div className="flex flex-col lg:flex-row gap-8 text-gray-500">
        {packageData.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Umrah;
