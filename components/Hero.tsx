import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
    const orderMessage = encodeURIComponent("Hello Yadukul Dairy! I'm interested in your products and would like to place an order. Could you please share more details?");
    const subscribeMessage = encodeURIComponent("Hello Yadukul Dairy! I would like to subscribe to your products. Please provide information on your subscription plans.");
    
    const whatsappOrderUrl = `https://wa.me/918439988051?text=${orderMessage}`;
    const whatsappSubscribeUrl = `https://wa.me/918439988051?text=${subscribeMessage}`;

    return (
        <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 w-full h-full object-cover"
            >
                <source src="https://res.cloudinary.com/dxbugufks/video/upload/v1762728578/14618596_2160_3840_30fps_oyejpt.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-20 text-center p-4 flex flex-col items-center">
                <Logo showText={false} size={120} className="mb-6 text-white" />
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-4 text-shadow-lg">
                    Yadukul Dairy
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-shadow-md max-w-3xl mx-auto">
                    From Our Farm to Your Family: Pure, Fresh, and Trusted.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href={whatsappOrderUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-brand-green hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
                    >
                        Order Now
                    </a>
                    <a 
                        href={whatsappSubscribeUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-brand-cream hover:bg-white text-brand-green dark:text-brand-dark dark:bg-brand-yellow dark:hover:bg-yellow-300 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
                    >
                        Subscribe Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
