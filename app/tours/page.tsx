"use client";
import Image from "next/image";

const Tours: React.FC = () => {
    const domesticTours = [
        { title: "Hunza Valley", description: "Experience the breathtaking views of Hunza, the crown jewel of Pakistan.", image: "Hunza.webp" },
        { title: "Swat Valley", description: "Explore the North Pakistan with its lush green valleys.", image: "Swat.webp" },
        { title: "Skardu", description: "Discover the mesmerizing beauty of Skardu and its serene lakes.", image: "Skardu.webp" },
    ];

    const internationalTours = [
        { title: "Turkey", description: "Visit Istanbul, Cappadocia, and more in a cultural journey to Turkey.", image: "Turkey.webp" },
        { title: "Malaysia", description: "Enjoy the vibrant culture and modern attractions of Malaysia.", image: "Malaysia.webp" },
        { title: "Dubai", description: "Explore the ultramodern architecture and shopping in Dubai.", image: "Dubai.webp" },
    ];

    return (
        <>    
        <div className="flex flex-col py-[93.81px] w-full">
    <div
        id="tours"
        className="relative h-[300px] flex justify-center items-center"
    >
        <h1 className="z-[9] font-bold text-center font-serif text-6xl mx-8 text-white">
            Karwan-e-Akhtar Tours
        </h1>
        <Image
            src="/tours.webp"
            alt="hajj banner"
            width={800}
            height={300}
            style={{ objectFit: "cover" }}
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 group-hover:opacity-50 inset-0"
        />
        {/* Add a gradient overlay for better text contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-60"></div>
    </div>
</div>

            <div id="tours" className="tours-page p-6 w-full">



                <p className="text-center text-lg mb-12">
                    In addition to Hajj and Umrah, Karwan-e-Akhtar proudly offers both domestic and international tours. Based in Pakistan, we aim to provide memorable travel experiences for every adventurer.
                </p>
                <section className="domestic-tours mb-16">
                    <h2 className="text-2xl font-semibold mb-6">Domestic Tours</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {domesticTours.map((tour, index) => (
                            <div key={index} className="tour-card border rounded-lg overflow-hidden shadow-lg">
                                <img src={tour.image} alt={tour.title} className="h-48 w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                                    <p className="text-sm text-gray-700">{tour.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="international-tours">
                    <h2 className="text-2xl font-semibold mb-6">International Tours</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {internationalTours.map((tour, index) => (
                            <div key={index} className="tour-card border rounded-lg overflow-hidden shadow-lg">
                                <img src={tour.image} alt={tour.title} className="h-48 w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                                    <p className="text-sm text-gray-700">{tour.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Tours;
