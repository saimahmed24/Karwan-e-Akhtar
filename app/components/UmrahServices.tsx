import React from 'react';
import { FaHandshake, FaHotel, FaCcVisa, FaBus, FaChalkboardTeacher } from 'react-icons/fa';

const UmrahServices = () => {
  return (
    <section className="w-screen bg-white py-12">
    <div className="max-w-7xl mx-auto p-6">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 ">Umrah Services</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-2">Perform Umrah with a sense of luxury, ease, and comfort</h2>
      </div>

      {/* Service Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        

        {/* Meet & Assist */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaHandshake className="text-green-500 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">Meet & Assist</h3>
          <p className="text-gray-600 mt-2">A dedicated team to assist and guide</p>
        </div>

        

        {/* 5 Star Accommodation */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaHotel className="text-yellow-500 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">5 Star<br />Accommodation</h3>
          <p className="text-gray-600 mt-2">Get a comfort living 5 star hotel facility</p>
        </div>
         {/* Visa Acquisition */}
         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaCcVisa className="text-blue-600 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">Visa<br />Acquisition</h3>
          <p className="text-gray-600 mt-2">We facilitate with visa documentation and services</p>
        </div>

        {/* Luxury Transportation */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaBus className="text-indigo-500 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">Luxury<br />Transportation</h3>
          <p className="text-gray-600 mt-2">We offer luxury buses and private vehicles</p>
        </div>

      

        {/* Guide & Scholar */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaChalkboardTeacher className="text-teal-500 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">Guide &<br />Scholar</h3>
          <p className="text-gray-600 mt-2">With you at all times for help and support</p>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
       
      </div>
    </div>
    </section>
  );
};

export default UmrahServices;
