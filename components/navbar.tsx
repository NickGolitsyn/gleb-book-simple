'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import LocaleSwitcher from './localeSwitcher';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [showBackground, setShowBackground] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setShowBackground(position > 20); // Change 100 to whatever number of pixels you prefer
  };

  const toggleBackground = () => setShowBackground(true);
  const removeBackground = () => window.pageYOffset <= 100 && setShowBackground(false); // Remove background if not scrolled past 100 pixels

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-4 lg:px-6 h-14 flex items-center fixed top-0 left-0 z-50 w-full border-b ${
        showBackground ? 'bg-white shadow-lg' : 'bg-transparent'
      } transition-colors duration-300 ease-in`}
      onMouseEnter={toggleBackground}
      onMouseLeave={removeBackground}
    >
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
      >
        <Link href="#" className="flex items-center justify-center">
          <MountainIcon className={`h-6 w-6 ${showBackground ? 'text-black' : 'text-white'}`} />
          <span className="sr-only">Gleb Feels</span>
        </Link>
      </motion.div>
      <motion.nav
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }} 
        className="ml-auto flex gap-4 sm:gap-6"
      >
        <LocaleSwitcher bg={showBackground} />
      </motion.nav>
    </header>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}