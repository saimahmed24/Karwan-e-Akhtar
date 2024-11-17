import Image from 'next/image';

const HajjVisaRequirements = () => {
    return (
        <section className="w-screen bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Section for Title and Content */}
                <div className="flex items-center justify-between lg:flex-nowrap md:flex-nowrap flex-wrap-reverse gap-y-6 ">

                    {/* Left Column: Text Content */}
                    <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-8">
                        <h3 className="text-xl sm:text-lg lg:text-2xl font-semibold text-gray-600">Visa Acquisition</h3>
                        <h2 className="text-3xl sm:text-2xl lg:text-4xl font-bold text-gray-800 mt-2">Hajj Visa Requirements</h2>

                        <div className="space-y-6 mt-6">
                            <ul className="list-disc pl-5 space-y-4">
                                <li className="flex items-center text-sm sm:text-base lg:text-lg">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-green-500 mr-2"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <span>One recent passport size color photograph (white background).</span>
                                </li>
                                <li className="flex items-center text-sm sm:text-base lg:text-lg">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-green-500 mr-2"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <span>Application form filled in with black ink pen or printed.</span>
                                </li>
                                <li className="flex items-center text-sm sm:text-base lg:text-lg">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-green-500 mr-2"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <span>A non-refundable roundtrip ticket with confirmed reservations.</span>
                                </li>
                                <li className="flex items-center text-sm sm:text-base lg:text-lg">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-green-500 mr-2"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <span>Proof of vaccination.</span>
                                </li>
                                {/* Add more items as needed */}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <a
                                href="#hajjFAQ"
                                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg sm:text-base lg:text-xl font-semibold hover:bg-blue-700"
                            >
                                Hajj Visa FAQ&apos;s
                            </a>
                        </div>
                    </div>


                    {/* Right Column: Image */}
                    <div className="w-full md:w-1/2 ">
                        <Image
                            src="/hajj.jpg"
                            alt="Visa Acquisition"
                            width={550}
                            height={550}
                            className="w-full md:h-[500px] h-[300px]  object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HajjVisaRequirements;
