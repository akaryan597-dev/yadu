import React, { useState, FormEvent } from 'react';
import { REVIEWS } from '../constants';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex text-brand-yellow">
        {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const ReviewCard: React.FC<{ review: typeof REVIEWS[0] }> = ({ review }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col">
        <StarRating rating={review.rating} />
        <p className="text-gray-600 dark:text-gray-300 my-4 flex-grow">"{review.comment}"</p>
        <p className="font-bold text-brand-dark dark:text-white">{review.name}</p>
    </div>
);

const Reviews: React.FC = () => {
    const [name, setName] = useState('');
    const [suggestion, setSuggestion] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert(`Thank you, ${name}! Your suggestion has been received:\n\n"${suggestion}"`);
        setName('');
        setSuggestion('');
    };

    return (
        <section id="reviews" className="py-20 bg-brand-cream dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold font-serif text-center text-brand-dark dark:text-brand-cream mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
                    {REVIEWS.map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-12">
                    <h3 className="text-3xl font-bold font-serif text-center text-brand-dark dark:text-white mb-6">Have a Suggestion?</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="suggestion" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Suggestion / Review</label>
                            <textarea
                                id="suggestion"
                                value={suggestion}
                                onChange={(e) => setSuggestion(e.target.value)}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-dark transition-colors duration-300">
                            Submit Review
                        </button>
                    </form>
                </div>

                <div className="text-center">
                    <a
                        href="https://wa.me/918439988051?text=I'd like to share my feedback about Yadukul Dairy."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-green hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Send Feedback via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
