// UmrahFaqSection.tsx
import { useState } from 'react';

const UmrahFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='umrahFAQ' className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl sm:text-xl lg:text-4xl font-semibold text-gray-700">Umrah Visa FAQ</h3>
        <div className="space-y-4 mt-8">
          {/* Question 1 */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(0)}
              className="w-full text-left flex justify-between items-center text-xl sm:text-lg lg:text-xl font-semibold text-gray-600 focus:outline-none"
            >
              What are the requirements for an Umrah visa?
              <span className="ml-2 text-gray-500">{openIndex === 0 ? '−' : '+'}</span>
            </button>
            {openIndex === 0 && (
              <p className="text-base sm:text-sm lg:text-lg text-gray-500 mt-2">
                For an Umrah visa, you will need a valid passport, a passport-size photograph, proof of vaccination, a visa application form, and sometimes a confirmed hotel reservation.
              </p>
            )}
          </div>

          {/* Question 2 */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(1)}
              className="w-full text-left flex justify-between items-center text-xl sm:text-lg lg:text-xl font-semibold text-gray-600 focus:outline-none"
            >
              Can I perform Umrah without a visa?
              <span className="ml-2 text-gray-500">{openIndex === 1 ? '−' : '+'}</span>
            </button>
            {openIndex === 1 && (
              <p className="text-base sm:text-sm lg:text-lg text-gray-500 mt-2">
                No, a visa is required to perform Umrah. Make sure to apply in advance as the visa process can take some time.
              </p>
            )}
          </div>

          {/* Question 3 */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(2)}
              className="w-full text-left flex justify-between items-center text-xl sm:text-lg lg:text-xl font-semibold text-gray-600 focus:outline-none"
            >
              How long is an Umrah visa valid for?
              <span className="ml-2 text-gray-500">{openIndex === 2 ? '−' : '+'}</span>
            </button>
            {openIndex === 2 && (
              <p className="text-base sm:text-sm lg:text-lg text-gray-500 mt-2">
                An Umrah visa is typically valid for 30 days from the date of issuance. It is recommended to plan your trip accordingly.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrahFaqSection;
