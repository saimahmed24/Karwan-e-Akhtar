"use client";
import Image from "next/image"; 
import img1 from "/public/hero.webp"; // Sample image
import img2 from "/public/package2.jpg"; // Another image for additional packages
import img3 from "/public/package3.jpg"; // Another image for additional packages


const packages = [
  {
    bgImg: img1,
    name: "Hajj",
    location: "Mecca",
    price: "$2999",
  },
  {
    bgImg: img2,
    name: "Umrah",
    location: "Mecca",
    price: "$1999",
  },
 
  {
    bgImg: img3,
    name: "Madinah",
    location: "Medina",
    price: "$1999",
  },
 
];

const PackageDetails = () => {
  return (
    <div className="flex flex-wrap justify-between py-20">
      {packages.map((pkgInfo, index) => (
        <aside key={index} className="group relative w-full sm:w-1/2 lg:w-1/3 overflow-hidden mb-4">
          {/* Use the Image component to set a background */}
          <div className="absolute inset-0">
            <Image
              src={pkgInfo.bgImg}
              alt={pkgInfo.name}
              layout="fill" // Use fill to cover the area
              objectFit="cover" // Cover the area while maintaining aspect ratio
              className="transition-opacity duration-300 group-hover:opacity-50" // Adjust opacity on hover
            />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all delay-150 bg-black bg-opacity-75 w-full h-[550px] flex justify-center items-center flex-col">
            <h3 className="uppercase text-center text-4xl font-semibold text-white">
              {pkgInfo.name}
              <br />
              <small className="text-xl tracking-widest font-normal">
                {pkgInfo.location}
              </small>
            </h3>
            <h4 className="text-3xl my-6 text-white font-semibold">
              {pkgInfo.price}
            </h4>
            <a
              href=""
              className="bg-green text-white font-semibold px-5 py-1.5 rounded-full"
            >
              Book Now
            </a>
          </div>
        </aside>
      ))}
    </div>
  );
};

export default PackageDetails;
