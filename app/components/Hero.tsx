import Image from "next/image";
import background from "/public/hero.webp"; 

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
    <Image
      src={background}
      alt="Background"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-50" />
    <div className="absolute inset-0 flex items-center justify-center text-white">
      <h1 className="font-bold text-center font-serif text-6xl mx-8">Reconnect with Your Faith: Plan Your Umrah Today!</h1>
    </div>
  </div>
  );
};

export default Hero;
