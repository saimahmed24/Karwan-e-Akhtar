import React from 'react';
import { FaUsers, FaHandshake, FaUtensils, FaHotel, FaCcVisa, FaBus, FaCouch, FaChalkboardTeacher } from 'react-icons/fa';

const HajjServices = () => {
  return (
    <section className="w-screen bg-white py-12">
    <div className="max-w-7xl mx-auto p-6">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Hajj Services</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-2">Perform Hajj with a sense of luxury, ease, and comfort</h2>
      </div>

      {/* Service Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Pre-Hajj Meet up */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaUsers className="text-blue-500 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">Pre-Hajj<br />Meet up</h3>
          <p className="text-gray-600 mt-2">Get to know each other and held a meeting with all the Hajjis</p>
        </div>

        {/* Meet & Assist */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaHandshake className="text-green-500 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">Meet & Assist</h3>
          <p className="text-gray-600 mt-2">A dedicated team to assist and guide</p>
        </div>

        {/* Buffet Meals */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaUtensils className="text-red-500 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">Buffet<br />Meals</h3>
          <p className="text-gray-600 mt-2">Segregated full board buffet food</p>
        </div>

        {/* 5 Star Accommodation */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaHotel className="text-yellow-500 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">5 Star<br />Accommodation</h3>
          <p className="text-gray-600 mt-2">Get a comfort living 5 star hotel facility</p>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
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

        {/* Sofa Mattress in Mina */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaCouch className="text-purple-500 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">Sofa Mattress<br />in Mina</h3>
          <p className="text-gray-600 mt-2">Premium quality sofas and mattresses</p>
        </div>

        {/* Guide & Scholar */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaChalkboardTeacher className="text-teal-500 text-4xl mb-4 mx-auto" />
          <h3 className="font-semibold text-lg">Guide &<br />Scholar</h3>
          <p className="text-gray-600 mt-2">With you at all times for help and support</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HajjServices;
