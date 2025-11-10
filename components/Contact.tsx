import React from 'react';

const Contact: React.FC = () => {
    return (
        <footer id="contact" className="bg-brand-dark text-brand-cream py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold font-serif mb-6">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="bg-brand-green rounded-full p-4 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-1">Call Us</h3>
                        <a href="tel:+918439988051" className="hover:text-brand-yellow transition-colors">+91 8439988051</a>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-brand-green rounded-full p-4 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-1">WhatsApp Support</h3>
                        <a href="https://wa.me/919654314000" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">+91 9654314000</a>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-brand-green rounded-full p-4 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-xl mb-1">Email</h3>
                        <a href="mailto:yadukul_dairy@proton.me" className="hover:text-brand-yellow transition-colors">yadukul_dairy@proton.me</a>
                    </div>
                </div>

                <div className="mt-10 flex justify-center gap-6">
                    <a href="https://instagram.com/yadukul_dairy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg className="w-6 h-6 text-brand-cream hover:text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                        </svg>
                    </a>
                    <a href="https://facebook.com/yadukul_dairy" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg className="w-6 h-6 text-brand-cream hover:text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
                        </svg>
                    </a>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Yadukul Dairy Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
