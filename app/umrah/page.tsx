"use client"; // Keep if you're using hooks or need client-side rendering behavior

import Image from "next/image"; // Keep the Next.js Image import as is
import img1 from "/public/package3.jpg"; // Example image for Hajj
import UmrahVisaRequirements from "../components/UmrahVisaReq";
import UmrahFaqSection from "../components/UmrahFAQ";
import UmrahServices from "../components/UmrahServices";

const packages = [
    {
        bgImg: img1,
        name: "Umrah Packages",
        location: "",
        description: "Experience the spiritual journey of a lifetime.",
        isVideo: true,
    },
    {
        bgImg: img1,
        name: "Umrah + International",
        location: "",
        description: "Experience the spiritual journey of a lifetime.",
        isVideo: true,
    },
   
];

const Umrah = () => {
    return (
        <>
        {/* Hero Section */}
        <div className="flex flex-col  py-[93.81px]">
            <div
                id="home"
                className="relative h-[300px] w-full flex justify-center items-center"
            >
                <h1 className="z-10 font-bold text-center font-serif text-6xl text-white drop-shadow-lg">
                   Karwan-e-Akhtar Umrah
                </h1>
                <Image
                    src="/hero.webp"
                    alt="Hajj banner"
                    width={800}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
        </div>
    
        {/* Umrah Packages Section */}
        <div className="flex flex-col items-center justify-center py-20 bg-gray-100 px-6">
            <h1 className="text-4xl font-bold text-gray-700 md:text-6xl mb-10 text-center">
                Umrah Packages
            </h1>
            

            <div className="flex flex-wrap justify-center gap-6 w-full">
                {packages.map((pkgInfo, index) => (
                    <aside
                        key={index}
                        className="group relative w-full sm:w-5/6 md:w-2/5 lg:w-1/3 overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
                            <Image
                                src={pkgInfo.bgImg}
                                alt={pkgInfo.name}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        </div>
    
                        {/* Content Section */}
                        <div className="p-6 flex flex-col items-center text-center">
                            <h3 className="uppercase text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors mb-2">
                                {pkgInfo.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">{pkgInfo.location}</p>
                            <p className="text-gray-600 mb-6">{pkgInfo.description}</p>
                            <a
                                href="https://wa.me/+923338204949"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 text-white font-medium px-6 py-2 rounded-full hover:bg-orange-600 transition-transform transform hover:scale-105"
                            >
                                Get Quotes
                            </a>
                        </div>
                    </aside>
                ))}
            </div>
        </div>
        <UmrahVisaRequirements/>

        <UmrahServices/>
        <UmrahFaqSection/>
    </>
    
    );
};

export default Umrah;
