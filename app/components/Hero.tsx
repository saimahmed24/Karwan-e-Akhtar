const Hero = () => {
  return (
    <>
      <div className="flex flex-col">
        <div id="home" className="relative h-screen w-full overflow-hidden"> {/* Ensure full width and no overflow */}
          <video
            src="/vid1.mp4" // Ensure the video path is correct
            autoPlay
            muted
            loop
            className="w-full h-full object-cover" // Full width and height with cover
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <h1 className="font-bold text-center font-serif text-6xl mx-8">Reconnect with Your Faith: Plan Your Umrah Today!</h1>
          </div>
        </div>
        <div className="w-full h-1/5 bg-[#fb923c] px-8 py-4"> {/* Added padding for text */}
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ad numquam illum expedita deleniti, odit aliquid itaque exercitationem nemo! Vero, nesciunt magnam quos vitae illo sequi ipsum in eum numquam?</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
