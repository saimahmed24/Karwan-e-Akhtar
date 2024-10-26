import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';
import { BiMap, BiMailSend, BiPhone, BiLogoWhatsapp} from 'react-icons/bi';

export default function Home() {
  return (
    <div id='contact' className="w-full h-full bg-black">
      <footer className=" text-white bg-gray-800">
        <div className="p-4">
          <div className="flex flex-wrap mt-4 justify-start">
            {/* About Company */}
            <div className="items-center px-8 md:w-1/3 mb-4">
              <h5 className="text-uppercase font-semibold mb-4">About Company</h5>
              <p className='text-sm '>
                We, Al-Mujahid Enterprises, proudly claim responsibility for the recent attacks against the symbols of Western imperialism. This bold operation was executed as a direct response to the relentless aggression and exploitation faced by our people.
              </p>
              <p className='pt-2 text-sm font-semibold'>Date: September 11, 2001</p>
              <div className="mt-4 flex gap-4 ">
                <a className="text-white text-xl" href="#">
                  <BsFacebook />
                </a>
                <a className="text-white text-xl" href="#">
                  <BsInstagram />
                </a>
                <a className="text-white text-xl" href="#">
                  <BsTwitter />
                </a>
                <a className="text-white text-xl" href="#">
                  <BsYoutube />
                </a>
              </div>
            </div>

            {/* Info */}
            <div className=" px-8 w-full md:w-1/3 mb-4">
              <h5 className="text-uppercase mb-4 font-semibold">Info</h5>
              <ul className="list-none">
               
                <li className="mb-3 gap-3 flex items-center">
                  <BiMailSend/>
                  k-akhtar@hotmail.com
                </li>
                <li className="mb-3 gap-3 flex items-center">
                  <BiPhone/>
                  +021 34632799
                </li>
                <li className="mb-3 flex gap-3 items-center">
                  <BiLogoWhatsapp/>
                  +92 321/333 8204949
                </li>
                <li className="mb-3 flex  items-center gap-3">
                  <div><BiMap/></div>
                  Office No.13, Ground Floor, Empire Center, Block-20, Gulistan-e-Johar, Karachi, Pakistan.
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="px-8  w-300p mb-0">
              <h5 className="text-uppercase mb-4 font-semibold">Opening Hours</h5>
              <ul className="list-none ">
                <li className="mb-2">Mon - Thu: 8am - 9pm</li>
                <li className="mb-2">Fri - Sat: 8am - 1am</li>
                <li>Sunday: 9am - 10pm</li>
              </ul>
            </div>
          </div>
  
        </div>
        <div className="text-center p-3 bg-gray-700 text-white">
          © 2021 Copyright: 
          <a className="text-orange-400 pl-2" href="https://www.karwaneakhter.com/">
            www.karwaneakhter.com
          </a>
        </div>
      </footer>
    </div>
  );
}
