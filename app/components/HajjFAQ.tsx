// HajjFaqSection.tsx
import { useState } from 'react';

const HajjFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="hajjFAQ" className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl sm:text-xl lg:text-3xl font-semibold text-gray-700">Hajj Visa FAQ</h3>
        <div className="space-y-4 mt-8">
          {/* Question 1 */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(0)}
              className="w-full text-left flex justify-between items-center text-xl sm:text-lg lg:text-xl font-semibold text-gray-600 focus:outline-none"
            >
              What documents are required for a Hajj visa?
              <span className="ml-2 text-gray-500">{openIndex === 0 ? '−' : '+'}</span>
            </button>
            {openIndex === 0 && (
              <p className="text-base sm:text-sm lg:text-lg text-gray-500 mt-2">
                You will need the following documents: a passport-size photograph, filled-out visa application form, proof of vaccination, and a confirmed round-trip ticket.
              </p>
            )}
          </div>

          {/* Question 2 */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(1)}
              className="w-full text-left flex justify-between items-center text-xl sm:text-lg lg:text-xl font-semibold text-gray-600 focus:outline-none"
            >
              Can I apply for a Hajj visa online?
              <span className="ml-2 text-gray-500">{openIndex === 1 ? '−' : '+'}</span>
            </button>
            {openIndex === 1 && (
              <p className="text-base sm:text-sm lg:text-lg text-gray-500 mt-2">
                Yes, many agencies and embassies now allow you to apply for a Hajj visa online. Be sure to follow the specific guidelines of your country&apos;s embassy.
              </p>
            )}
          </div>

          {/* Question 3 */}
          <div className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(2)}
              className="w-full text-left flex justify-between items-center text-xl sm:text-lg lg:text-xl font-semibold text-gray-600 focus:outline-none"
            >
              How long does it take to process a Hajj visa?
              <span className="ml-2 text-gray-500">{openIndex === 2 ? '−' : '+'}</span>
            </button>
            {openIndex === 2 && (
              <p className="text-base sm:text-sm lg:text-lg text-gray-500 mt-2">
                Processing times for a Hajj visa typically range from 7 to 14 days, depending on your nationality and embassy processing times.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HajjFaqSection;
