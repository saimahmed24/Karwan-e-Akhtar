import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col">
        <div id="home" className="relative h-screen w-full overflow-hidden">
        
          <video
          
            src="/vid1.mp4" // Ensure the video path is correct
            autoPlay
            muted
            loop
            className="w-full h-full object-cover" // Full width and height with cover
          >
            Your browser does not support the video tag.
            
          </video>
          
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black bg-opacity-60" />

          {/* Heading Text */}
          <div className="absolute inset-0 flex items-center justify-center px-4 md:px-10">
            <h1 className="font-bold text-center font-serif text-5xl md:text-6xl lg:text-7xl text-white mx-8 shadow-lg">
            <Link href="/umrah">
              Reconnect with Your Faith: Plan Your Umrah Today!
              </Link>
            </h1>
          </div>
        </div>

        {/* Content Section */}
        
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            
          </div>
        </div>
      
    </>
  );
};

export default Hero;
