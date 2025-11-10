import React, { useState } from 'react';
import Logo from './Logo';

interface HeaderProps {
    cartItemCount: number;
    toggleCart: () => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, toggleCart, theme, toggleTheme, activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#home', label: 'Home', id: 'home' },
        { href: '#products', label: 'Products', id: 'products' },
        { href: '#about', label: 'About Us', id: 'about' },
        { href: '#reviews', label: 'Reviews', id: 'reviews' },
        { href: '#contact', label: 'Contact', id: 'contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close mobile menu on click
    };

    return (
        <header className="bg-brand-cream/80 dark:bg-brand-dark/80 backdrop-blur-md sticky top-0 z-40 shadow-md transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className="flex-shrink-0" onClick={(e) => handleNavClick(e, '#home')}>
                        <Logo />
                    </a>
                    <nav className="hidden md:flex md:space-x-8">
                        {navLinks.map(link => {
                             const isActive = activeSection === link.id;
                             return (
                                <a key={link.href} 
                                   href={link.href} 
                                   onClick={(e) => handleNavClick(e, link.href)} 
                                   className={`cursor-pointer text-lg font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:scale-x-0 after:bg-brand-green after:dark:bg-brand-yellow after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 ${isActive ? 'text-brand-green dark:text-brand-yellow after:scale-x-100' : 'text-gray-600 dark:text-gray-300 hover:text-brand-dark dark:hover:text-white'}`}
                                >
                                   {link.label}
                                </a>
                            )
                        })}
                    </nav>
                    <div className="flex items-center space-x-2">
                         <button onClick={toggleTheme} aria-label="Toggle theme" className="relative text-brand-green dark:text-brand-yellow hover:text-brand-dark dark:hover:text-white transition-colors duration-300 p-2 rounded-full">
                            {theme === 'light' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            )}
                        </button>
                        <button onClick={toggleCart} className="relative text-brand-green dark:text-brand-yellow hover:text-brand-dark dark:hover:text-white transition-colors duration-300 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartItemCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cartItemCount}</span>
                            )}
                        </button>
                         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden ml-2 p-2 rounded-md text-brand-green dark:text-brand-yellow hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-green">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                 <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-brand-green dark:text-brand-cream hover:bg-brand-green dark:hover:bg-brand-yellow hover:text-white dark:hover:text-brand-dark transition-colors duration-300">{link.label}</a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;