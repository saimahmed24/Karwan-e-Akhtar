"use client";
import Image from "next/image";
import img1 from "/public/hajj.jpg"; // Example image for Hajj

import Contact from "../components/Contact";

const packages = [
    {
        bgImg: img1,
        name: "Coming Soon",
        location: "",
        description: "",
        isVideo: true,
    },
];

const Hajj = () => {
    return (
        <>
        
        <div className="flex flex-col py-20 bg-gray-200 items-center justify-center w-screen p-[93.81px] h-screen" id="hajj">
            <h1 className="text-4xl font-light text-gray-500 md:text-6xl mb-10">Hajj Packages</h1>
            <div className="flex flex-wrap justify-center w-full">
                {packages.map((pkgInfo, index) => (
                    <aside
                        key={index}
                        className="group relative w-full sm:w-1/2 lg:w-1/3 overflow-hidden mb-4"
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={pkgInfo.bgImg}
                                alt={pkgInfo.name}
                                layout="fill"
                                objectFit="cover"
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                        </div>
                        <div className="bg-black bg-opacity-75 w-full h-[550px] flex justify-center items-center flex-col p-4">
                            <h3 className="uppercase text-center text-4xl font-semibold text-white">
                                {pkgInfo.name}
                                <br />
                                <small className="text-xl tracking-widest font-normal">
                                    {pkgInfo.location}
                                </small>
                            </h3>
                            <p className="text-white my-2 text-center">{pkgInfo.description}</p>
                            <a
                                href="https://wa.me/+923338204949"
                                target="_blank"
                                className="bg-[#fb923c] text-white font-semibold px-5 py-1.5 rounded-full transition-transform transform hover:scale-105 opacity-0 group-hover:opacity-100"
                            >
                                Get Quote
                            </a>
                        </div>
                    </aside>
                ))}
            </div>
        </div>
        <Contact/>
        </>
    );
};

export default Hajj;
