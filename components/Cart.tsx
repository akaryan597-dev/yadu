import React from 'react';
import { CartItem } from '../types';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (productId: number, quantity: number) => void;
    onRemove: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const generateOrderMessage = () => {
        let message = "Hello Yadukul Dairy! I would like to place an order for the following items:\n\n";
        items.forEach(item => {
            message += `- ${item.name}: ${item.quantity} (${item.unit.replace('/', '')})\n`;
        });
        message += `\nTotal: ₹${subtotal.toFixed(2)}\n\nThank you!`;
        return encodeURIComponent(message);
    };

    const whatsappOrderUrl = `https://wa.me/918439988051?text=${generateOrderMessage()}`;

    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose}></div>
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
                        <h2 className="text-2xl font-bold font-serif text-brand-dark dark:text-white">Your Cart</h2>
                        <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    {items.length === 0 ? (
                        <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">Your cart is empty</p>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Add some delicious dairy products to get started!</p>
                        </div>
                    ) : (
                        <div className="flex-grow overflow-y-auto p-6">
                            {items.map(item => (
                                <div key={item.id} className="flex mb-4 pb-4 border-b last:border-b-0 dark:border-gray-700">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-brand-dark dark:text-white">{item.name}</h3>
                                        <p className="text-gray-500 dark:text-gray-400">₹{item.price.toFixed(2)}</p>
                                        <div className="flex items-center mt-2">
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 border dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                                aria-label="Decrease quantity"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                            </button>
                                            <span className="px-4 font-semibold w-8 text-center dark:text-gray-200">{item.quantity}</span>
                                            <button
                                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 border dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                                aria-label="Increase quantity"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                            </button>
                                        </div>
                                        <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700 dark:hover:text-red-400 text-xs mt-2 font-semibold transition-colors">
                                            Remove
                                        </button>
                                    </div>
                                    <div className="text-right font-bold text-brand-dark dark:text-white w-24">
                                        ₹{(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {items.length > 0 && (
                        <div className="p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Subtotal:</span>
                                <span className="text-xl font-bold text-brand-dark dark:text-white">₹{subtotal.toFixed(2)}</span>
                            </div>
                            <a
                                href={whatsappOrderUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center bg-brand-green text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-dark transition-colors duration-300"
                            >
                                Order on WhatsApp
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
