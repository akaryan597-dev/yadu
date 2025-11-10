import React, { useState, useCallback, useEffect, useRef } from 'react';
import { CartItem, Product } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('yadukulCart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Could not parse cart from localStorage", error);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('yadukulTheme') as Theme;
    return savedTheme || 'light';
  });

  const [toastMessage, setToastMessage] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef<{[key: string]: HTMLElement}>({});

  useEffect(() => {
    localStorage.setItem('yadukulCart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('yadukulTheme', theme);
  }, [theme]);

   useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section as HTMLElement);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section as HTMLElement);
      });
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setToastMessage(`${product.name} added to cart!`);
    setIsCartOpen(true);
  }, []);

  const handleRemoveFromCart = useCallback((productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  const handleUpdateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  }, [handleRemoveFromCart]);

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  return (
    <div className="bg-brand-cream dark:bg-brand-dark text-brand-dark dark:text-brand-cream font-sans transition-colors duration-300">
      <Header 
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
        toggleCart={toggleCart}
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <Products onAddToCart={handleAddToCart} />
        <About />
        <Reviews />
      </main>
      <Contact />
      <Cart 
        isOpen={isCartOpen} 
        onClose={toggleCart}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
      <Toast message={toastMessage} onClear={() => setToastMessage('')} />
      <ScrollToTop />
    </div>
  );
};

export default App;