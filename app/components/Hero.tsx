

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <video
        src="/vid1.mp4" // Ensure the video path is correct
        autoPlay
        muted
        loop
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50" // Added transition for video
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="font-bold text-center font-serif text-6xl mx-8">Reconnect with Your Faith: Plan Your Umrah Today!</h1>
      </div>
    </div>
  );
};

export default Hero;
