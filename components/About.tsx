import React from 'react';

const About: React.FC = () => {
    const galleryImages = [
        "https://res.cloudinary.com/dxbugufks/image/upload/v1762737477/pexels-cottonbro-4909807_pdfncg.jpg",
        "https://res.cloudinary.com/dxbugufks/image/upload/v1762737516/pexels-dan-hamill-144328-436796_gixsip.jpg",
        "https://res.cloudinary.com/dxbugufks/image/upload/v1762737575/pexels-helenalopes-4766371_dmurlp.jpg",
        "https://res.cloudinary.com/dxbugufks/image/upload/v1762737614/pexels-pixabay-301600_n3hukr.jpg",
        "https://res.cloudinary.com/dxbugufks/image/upload/v1762737644/pexels-nc-farm-bureau-mark-11357094_icb9g9.jpg",
        "https://res.cloudinary.com/dxbugufks/image/upload/v1762737697/pexels-katlovessteve-735967_fnkurj.jpg"
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-brand-dark transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold font-serif text-brand-dark dark:text-white mb-4">From Village to City, From Cow to Cup.</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover the story behind Yadukul Dairy's commitment to purity, innovation, and trust.
                    </p>
                </div>

                <div className="mt-12 max-w-4xl mx-auto bg-brand-cream dark:bg-gray-800 p-8 rounded-xl shadow-md">
                    <blockquote className="text-center text-brand-dark dark:text-gray-200">
                        <p className="text-xl italic">"We didn't just want to sell milk; we wanted to deliver a promise. A promise of uncompromised purity, powered by technology that ensures transparency from our farm to your family's table."</p>
                        <footer className="mt-4 font-semibold">— Yadukul Team, Family, Yadukul Dairy Pvt. Ltd.</footer>
                    </blockquote>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-3xl font-bold font-serif text-brand-green dark:text-brand-yellow mb-4">Our Story</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                            <span>Yadukul Dairy began with a simple yet powerful vision: to bridge the gap between rural purity and urban demand. Born from generations of dairy farming heritage in the heartland of Uttar Pradesh, we saw a need for milk that was not just fresh, but also trustworthy and handled with the utmost care.</span>
                            <span>We started small, with a handful of our best-bred cows and a commitment to ethical, sustainable farming. Our journey from a local village farm to a trusted name in Noida is a testament to our unwavering focus on quality. We believe that the best dairy products come from happy animals and a clean environment, a principle that guides us every single day.</span>
                        </p>

                        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {galleryImages.map((url, index) => (
                                <img key={index} src={url} alt={`Yadukul farm ${index + 1}`} className="rounded-lg shadow-md object-cover w-full h-40" />
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-3xl font-bold font-serif text-brand-green dark:text-brand-yellow mb-4">Our Mission</h3>
                        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                            {[
                                {
                                    title: "Absolute Purity",
                                    desc: "To deliver 100% pure, unadulterated dairy products, free from hormones and preservatives."
                                },
                                {
                                    title: "Customer Trust",
                                    desc: "To build lasting relationships through transparency, reliability, and exceptional service."
                                },
                                {
                                    title: "Innovation & Efficiency",
                                    desc: "To leverage technology to streamline our processes, ensuring freshness and timely delivery."
                                }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green dark:text-brand-yellow mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong className="block text-brand-dark dark:text-white">{item.title}:</strong> {item.desc}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-3xl font-bold font-serif text-brand-green dark:text-brand-yellow mb-6">Our Technology</h3>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Farm-to-Door Traceability",
                                desc: "Our commitment to transparency means you can trust the journey of your milk, from the farm right to your doorstep."
                            },
                            {
                                title: "Automated Quality Checks",
                                desc: "Our processing units have integrated sensors that continuously monitor for quality, temperature, and consistency."
                            },
                            {
                                title: "Smart Delivery Routing",
                                desc: "Our staff panel uses route optimization to ensure the quickest, most efficient delivery, keeping your products fresh."
                            }
                        ].map((tech, i) => (
                            <div key={i} className="bg-brand-cream dark:bg-gray-800 p-6 rounded-lg shadow">
                                <h4 className="font-bold text-xl text-brand-dark dark:text-white mb-2">{tech.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://wa.me/918439988051"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-green hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Talk to Us on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
