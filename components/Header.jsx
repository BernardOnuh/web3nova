import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Trainings', href: '/training' },
    { label: 'Cohorts', href: '/cohorts' },
    { label: 'About Us', href: '/about-us' },
    { label: 'DApps', href: '/dapps' },
    { label: "Events", href: '/events' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Us', href: '/contact-us' }
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <header className="w-full shadow-sm bg-gradient-to-br pt-5 from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200 relative z-50">
        <nav className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
              <div className="block dark:hidden">
                <Image src="/logo.svg" width={100} height={32} alt="Logo Light"/>
              </div>
              <div className="hidden dark:block">
                <Image src="/logo-light.svg" width={100} height={32} alt="Logo Dark"/>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center bg-[#E9F3FB] dark:bg-gray-200 border-2 border-[#2388DA] dark:border-blue-600 rounded-[16px] flex-1 py-4 mx-[12vw]">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-[#2388DA] dark:text-blue-400 font-bold'
                      : 'text-[#040E16] dark:text-[#040E16] font-semibold hover:text-blue-500 dark:hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-200" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-200" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-gray-600 dark:text-gray-200" />
        </button>

        <div className="flex flex-col pt-20 px-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`py-3 border-b border-gray-100 dark:border-gray-700 transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-[#2388DA] dark:text-blue-400 font-semibold'
                  : 'text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;