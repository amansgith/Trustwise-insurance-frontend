import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const updateCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="custom-cursor fixed w-8 h-8 bg-primary rounded-full pointer-events-none delay-3000 transform -translate-x-1/2 -translate-y-1/2 z-50"></div>
  );
};

export default CustomCursor;
