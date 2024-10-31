"use client";
import Image from "next/image"; 
import img1 from "/public/package3.jpg"; // Example image for Hajj
import img2 from "/public/package2.jpg"; // Image for Umrah
import img3 from "/public/package3.jpg"; // Image for Madinah

const packages = [
  {
    bgImg: img1,
    name: "Hajj",
    location: "Mecca",
    description: "Experience the spiritual journey of a lifetime.",
    isVideo: true,
  },
  {
    bgImg: img2,
    name: "Umrah",
    location: "Mecca",
    description: "Join us for a blessed pilgrimage experience.",
    isVideo: false,
  },
  {
    bgImg: img3,
    name: "Madinah",
    location: "Medina",
    description: "Discover the historic city of Medina.",
    isVideo: false,
  },
];

const PackageDetails = () => {
  return (
    <div className="flex flex-col items-center py-20 bg-gray-200">
      <h1 className="text-4xl font-light text-gray-500 md:text-6xl mb-10">Umrah Packages</h1>
      <div className="flex flex-wrap justify-between w-full">
        {packages.map((pkgInfo, index) => (
          <aside key={index} className="group relative w-full sm:w-1/2 lg:w-1/3 overflow-hidden mb-4">
            <div className="absolute inset-0">
              {pkgInfo.isVideo ? (
                <video
                  src="/vid1.mp4" // Ensure the video path is correct
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50" // Added transition for video
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={pkgInfo.bgImg}
                  alt={pkgInfo.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 group-hover:opacity-50" // Added transition for image
                />
              )}
            </div>
            <div className=" bg-black bg-opacity-75 w-full h-[550px] flex justify-center items-center flex-col p-4">
              <h3 className="uppercase text-center text-4xl font-semibold text-white">
                {pkgInfo.name}
                <br />
                <small className="text-xl tracking-widest font-normal">
                  {pkgInfo.location}
                </small>
              </h3>
              <p className="text-white my-2 text-center">{pkgInfo.description}</p>
              <a
                href="#"
                className="bg-green text-white font-semibold px-5 py-1.5 rounded-full transition-transform transform hover:scale-105"
              >
                Book Now
              </a>
            </div>
          </aside>
        ))}
      </div>
    </div>
  );
};

export default PackageDetails;
