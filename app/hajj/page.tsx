"use client";
import Image from "next/image";
import img1 from "/public/hajj.jpg"; // Example image for Hajj

const packages = [
    {
        bgImg: img1,
        name: "Coming Soon",
        location: "",
        description: "Affordable and convenient accommodation for a comfortable journey. Includes group transportation and guided support.",
    },


];

const Hajj = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col py-[93.81px]">
                <div
                    id="home"
                    className="relative h-[300px] w-full flex justify-center items-center" // Fixed height for the hero image
                >
                    <h1 className="z-[9] font-bold text-center font-serif text-6xl mx-8 text-white">
                        Hajj <br /> 2025
                    </h1>
                    <Image
                        src="/hero.webp"  // This can be statically imported if needed
                        alt="hajj banner"
                        width={800}
                        height={300} // Ensure the height is fixed
                        style={{ objectFit: "cover" }} // Use inline style for objectFit
                        className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 group-hover:opacity-50 inset-0 bg-black/80"
                    />
                </div>
            </div>

            {/* Hajj Packages Section */}
            <div className="flex flex-col  items-center justify-center py-4 bg-gray-200 px-4" id="Hajj">
                <h1 className="text-4xl font-light text-gray-500 md:text-6xl mb-10 text-center">Get in Touch</h1>
                <h2 className="font-bold text-lg text-center">Hajj 2025 / 1446H Packages</h2>
                <p className="p-2 lg:p-4 md:p-3">
                Karwan-e-Akhtar is excited to offer a range of flexible Hajj packages for the year 2025/1446H, tailored to meet the needs and comfort of pilgrims from all over the world:15-Day Hajj Package,20-Day Hajj Package,30-Day Hajj Package,40-Day Hajj Package.We also provide shorter packages from 10 to 25 days with various duration options to suit individual preferences. 
                  </p>
                <div className="flex flex-wrap justify-center w-screen lg:w-full sm:w-screen gap-1">
                    {packages.map((pkgInfo, index) => (
                        <aside key={index} className="group relative w-full sm:w-full lg:w-2/5 overflow-hidden mb-4">
                            <div className="relative w-full h-[300px]"> {/* Fixed height for image container */}
                                <Image
                                    src={pkgInfo.bgImg}
                                    alt={pkgInfo.name}
                                    layout="fill" // Image will fill the parent div
                                    objectFit="cover" // Ensure the image covers the container
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
                                    Get Quotes
                                </a>
                            </div>
                        </aside>
                    ))}
                </div>
               
                <p className="p-2 lg:p-4 md:p-3"> 
                Stay tuned for Hajj policies and package details for departures from major cities in Pakistan, including Karachi, Lahore, Multan, Faisalabad, Rawalpindi/Islamabad, Peshawar, and Quetta.
                     Karwan-e-Akhtar also offers premium Hajj packages and comprehensive guidance and support for pilgrims from the UK, USA, UAE, and other regions. No matter where you&apos;re located, our team is here to make your Hajj journey as smooth and memorable as possible.</p>
            </div>
        </>
    );
};

export default Hajj;
