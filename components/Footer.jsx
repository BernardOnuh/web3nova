import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = {
    'Web3Nova': [
      { name: 'About Us', href: '/about' },
      { name: 'Courses', href: '/courses' },
      { name: 'Partners', href: '/partners' },
      { name: 'Alumni', href: '/alumni' },
    ],
    'General': [
      { name: 'Join Community', href: '/community' },
      { name: 'Events', href: '/events' },
      { name: 'DApps', href: '/dapps' },
      { name: 'Blog', href: '/blog' },
    ],
    'Support': [
      { name: 'Terms Of Use', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Resources', href: '/resources' },
      { name: 'FAQs', href: '/faqs' },
    ]
  };

  return (
    <footer className="w-full bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Social Section */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <Image
                src="/logo.svg"
                alt="Web3Nova Logo"
                width={150}
                height={40}
                className="dark:hidden"
              />
              <Image
                src="/logo-light.svg"
                alt="Web3Nova Logo"
                width={150}
                height={40}
                className="hidden dark:block"
              />
            </div>
            <div>
              <h3 className="text-gray-600 dark:text-gray-400 mb-4">Connect with us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://x.com/web3_nova"
                  className="w-10 h-10 rounded-full bg-[#4FA0E3] text-white flex items-center justify-center hover:bg-[#155284] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src="/twitter.svg" 
                    alt="Twitter" 
                    width={20} 
                    height={20}
                    className="invert" 
                  />
                </Link>
                <Link
                  href="https://linkedin.com/company/web3nova"
                  className="w-10 h-10 rounded-full bg-[#4FA0E3] text-white flex items-center justify-center hover:bg-[#155284] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src="/linkedin.svg" 
                    alt="LinkedIn" 
                    width={20} 
                    height={20}
                    className="invert" 
                  />
                </Link>
                <Link
                  href="https://tiktok.com/@web3nova"
                  className="w-10 h-10 rounded-full bg-[#4FA0E3] text-white flex items-center justify-center hover:bg-[#155284] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src="/tiktok.svg" 
                    alt="TikTok" 
                    width={20} 
                    height={20}
                    className="invert" 
                  />
                </Link>
                <Link
                  href="https://facebook.com/web3nova"
                  className="w-10 h-10 rounded-full bg-[#4FA0E3] text-white flex items-center justify-center hover:bg-[#155284] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    src="/facebook.svg" 
                    alt="Facebook" 
                    width={20} 
                    height={20}
                    className="invert" 
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h3 className="text-[#4FA0E3] font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#4FA0E3] dark:hover:text-[#4FA0E3] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information Section */}
          <div className="md:col-span-3">
            <h3 className="text-[#4FA0E3] font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#4FA0E3] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:bernard@web3nova.org" className="text-gray-600 dark:text-gray-400 hover:text-[#4FA0E3] dark:hover:text-[#4FA0E3] transition-colors">
                  bernard@web3nova.org
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-[#4FA0E3] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+2347043314162" className="text-gray-600 dark:text-gray-400 hover:text-[#4FA0E3] dark:hover:text-[#4FA0E3] transition-colors">
                  +234 7043314162
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-[#4FA0E3] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  1/2 opposite Bola Int School, Satellite road, FUTA, Akure, Ondo State, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Web3Nova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;