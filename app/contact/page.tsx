import { BiLogoWhatsapp, BiMailSend, BiMap, BiPhone } from "react-icons/bi";
import GoogleMap from "../components/GoogleMap";


const Contact = () => {
  const officeLocation = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7237.550812272897!2d67.11093872485353!3d24.90564145288505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33920d9f344bf%3A0x771f03311a4dd331!2sKarwan-e-Akhtar%20international%20(Pvt)%20Ltd!5e0!3m2!1sen!2s!4v1731879995205!5m2!1sen!2s";
  return (
    <div className="flex justify-start items-center  w-screen flex-wrap md:flex-nowrap lg:flex-nowrap">

      <div className="w-full lg:w-1/2 md:w-1/2 flex justify-start">
        <GoogleMap officeLocation={officeLocation} />
      </div>
      <div className="w-full lg:w-1/2 md:w-1/2">
        <h1 className="text-4xl px-4 w-3/4 ">Karwan-e-Akhtar International Pvt. Ltd</h1>
        <p className="w-3/4 px-5 " >Our trusted reputation, world-class recognitions, and global partnerships empower us to serve you at the highest level.</p>
        <hr className="w-1/2 h-[2px] bg-black ml-4" />
        <ul className="list-none pt-6 w-3/4">

          <li className="mb-3 flex items-center">
            <BiMailSend />
            k-akhtar@hotmail.com
          </li>
          <li className="mb-3 flex items-center">
            <BiPhone />
            +021 34632799
          </li>
          <li className=" flex items-center">
            <BiLogoWhatsapp />
            +92 321 8204949
          </li>
          <li className="mb-3 flex items-center">
            <BiLogoWhatsapp className='invisible' />
            +92 333 8204949
          </li>
          <li className="mb-3 px-5 flex  items-center gap-3">
            <div><BiMap /></div>
            Office No.13, Ground Floor, Empire Center, Block-20, Gulistan-e-Johar, Karachi, Pakistan.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
