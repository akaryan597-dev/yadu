import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductsProps {
    onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<{ product: Product, onAddToCart: (product: Product) => void }> = ({ product, onAddToCart }) => {
    const orderMessage = encodeURIComponent(`Hello Yadukul Dairy! I would like to order ${product.name}.`);
    const subscribeMessage = encodeURIComponent(`Hello Yadukul Dairy! I would like to subscribe to ${product.name}.`);
    
    const whatsappOrderUrl = `https://wa.me/918439988051?text=${orderMessage}`;
    const whatsappSubscribeUrl = `https://wa.me/918439988051?text=${subscribeMessage}`;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold font-serif text-brand-dark dark:text-white">{product.name}</h3>
                <p className="text-2xl font-semibold text-brand-green dark:text-brand-yellow mt-2">
                    ₹{product.price}<span className="text-base font-normal text-gray-500 dark:text-gray-400">{product.unit}</span>
                </p>
                <div className="mt-auto pt-4">
                    <button onClick={() => onAddToCart(product)} className="w-full bg-brand-green text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-dark transition-colors duration-300 mb-2">
                        Add to Cart
                    </button>
                    <div className="flex gap-2">
                        <a href={whatsappOrderUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 text-sm">
                            Order
                        </a>
                        <a href={whatsappSubscribeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 text-sm">
                            Subscribe
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
    return (
        <section id="products" className="py-20 bg-brand-cream dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold font-serif text-center text-brand-dark dark:text-brand-cream mb-4">Our Products</h2>
                <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">Freshly sourced and delivered with care, bringing the goodness of nature to your home.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {PRODUCTS.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
