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
                className="dark:invert"
              />
            </div>
            <div>
              <h3 className="text-gray-600 dark:text-gray-400 mb-4">Connect with us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com/web3nova"
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
            <div key={title} className="md:col-span-3">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
