"use client";
import Image from "next/image";
import HajjVisaRequirements from "../components/HajjVisaReq";
import HajjFaqSection from "../components/HajjFAQ";
import HajjServices from "../components/HajjServices";


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

            {/* Hajj Packages Section (no cards) */}
            <div className="flex flex-col items-center justify-center py-10 bg-gray-200 lg:px-20 md:px-10 px-5" id="Hajj">
                <h1 className="text-4xl font-light text-gray-500 md:text-6xl mb-10 text-center">
                    Hajj 2025 / 1446H Packages
                </h1>

                <p className="py-2 lg:p-4 md:p-3">
                    Karwan-e-Akhtar is excited to offer a range of flexible Hajj packages for the year 2025/1446H, tailored to meet the needs and comfort of pilgrims from all over the world: 15-Day Hajj Package, 20-Day Hajj Package, 30-Day Hajj Package, 40-Day Hajj Package. We also provide shorter packages from 10 to 25 days with various duration options to suit individual preferences.
                </p>
                
                <p className="py-2 lg:p-4 md:p-3">
                    Stay tuned for Hajj policies and package details for departures from major cities in Pakistan, including Karachi, Lahore, Multan, Faisalabad, Rawalpindi/Islamabad, Peshawar, and Quetta.
                    Karwan-e-Akhtar also offers premium Hajj packages and comprehensive guidance and support for pilgrims from the UK, USA, UAE, and other regions. No matter where you&apos;re located, our team is here to make your Hajj journey as smooth and memorable as possible.
                </p>
                <HajjVisaRequirements/>
              
                <Image src="/hajj-guide.jpg" alt="hajj-guide" className="pointer-events-none select-none" 
                width={800}
                height={300}
                />
                
            </div>
            <HajjServices/>
            <HajjFaqSection/>
        </>
    );
};

export default Hajj;
