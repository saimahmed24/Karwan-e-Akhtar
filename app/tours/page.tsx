"use client";

const Tours: React.FC = () => {
    const domesticTours = [
        { title: "Hunza Valley", description: "Experience the breathtaking views of Hunza, the crown jewel of Pakistan.", image: "/images/hunza.jpg" },
        { title: "Swat Valley", description: "Explore the Switzerland of the East with its lush green valleys.", image: "/images/swat.jpg" },
        { title: "Skardu", description: "Discover the mesmerizing beauty of Skardu and its serene lakes.", image: "/images/skardu.jpg" },
    ];

    const internationalTours = [
        { title: "Turkey", description: "Visit Istanbul, Cappadocia, and more in a cultural journey to Turkey.", image: "/images/turkey.jpg" },
        { title: "Malaysia", description: "Enjoy the vibrant culture and modern attractions of Malaysia.", image: "/images/malaysia.jpg" },
        { title: "Dubai", description: "Explore the ultramodern architecture and shopping in Dubai.", image: "/images/dubai.jpg" },
    ];

    return (
        <div id="tours" className="tours-page p-6 ">
            <h1 className="text-4xl font-bold text-center mb-8  py-[93.81px]">Karwan-e-Akhtar Tours</h1>
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
    );
};

export default Tours;
