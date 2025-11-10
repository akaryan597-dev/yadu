import React, { useEffect, useState } from 'react';

interface ToastProps {
    message: string;
    onClear: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClear }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                // Allow time for fade-out animation before clearing message
                setTimeout(onClear, 300);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message, onClear]);

    return (
        <div 
            className={`fixed bottom-5 right-5 bg-brand-green text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            role="alert"
            aria-live="assertive"
        >
            {message}
        </div>
    );
};

export default Toast;