"use client";


const Gallery: React.FC = () => {
    const images = [
        { src: "/images/hajj.jpg", alt: "Hajj Journey", caption: "A serene moment from the Hajj journey" },
        { src: "/images/umrah.jpg", alt: "Umrah Pilgrimage", caption: "Peaceful moments during Umrah" },
        { src: "/images/hunza.jpg", alt: "Hunza Valley", caption: "Breathtaking views of Hunza Valley" },
        { src: "/images/turkey.jpg", alt: "Turkey", caption: "Cultural vibes of Turkey" },
        { src: "/images/malaysia.jpg", alt: "Malaysia", caption: "Modern and cultural blend of Malaysia" },
        { src: "/images/dubai.jpg", alt: "Dubai", caption: "Ultramodern architecture of Dubai" },
    ];

    return (
        <div className="gallery-page p-6">
            <h1 className="text-4xl font-bold text-center mb-8 py-[93.81px]">Karwan-e-Akhtar Gallery</h1>
            <p className="text-center text-lg mb-12">
                Explore moments captured during our tours, showcasing the beauty and essence of each destination.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="gallery-card border rounded-lg overflow-hidden shadow-lg">
                        <img src={image.src} alt={image.alt} className="h-48 w-full object-cover" />
                        <div className="p-4 text-center">
                            <p className="text-sm text-gray-700">{image.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;