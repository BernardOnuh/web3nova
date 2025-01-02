import React from 'react';
import Image from 'next/image';

const Web3Roadmap = () => {
  const roadmapItems = [
    {
      title: "Introduction to Blockchain",
      icon: "/intro-blockchain.svg",
    },
    {
      title: "Ethereum",
      icon: "/ethereum.svg",
    },
    {
      title: "Solidity",
      icon: "/solidity.svg",
    },
    {
      title: "EtherJS & Web3JS",
      icon: "/etherjs.svg",
    },
    {
      title: "Hardhat",
      icon: "/hardhat.svg",
    },
    {
      title: "Foundry",
      icon: "/foundry.svg",
    },
    {
      title: "Non-Fungible Token",
      icon: "/nft.svg",
    },
    {
      title: "Blockchain Security",
      icon: "/security.svg",
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl py-4 font-bold mb-4 bg-gradient-to-r from-[#4FA0E3] to-[#155284] dark:text-white bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] dark:[-webkit-text-fill-color:white]">
            Web3 Roadmap
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Start your career in the Blockchain Development industry by receiving
            training from industry experts through our 16 weeks hands on bootcamp.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto min-h-[800px] overflow-hidden">
          {/* SVG Path - Desktop */}
          <div className="hidden md:block">
            <svg 
              className="absolute top-0 left-0 w-full h-full pointer-events-none" 
              viewBox="0 0 1200 800" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4FA0E3">
                    <animate 
                      attributeName="offset" 
                      values="-1;1" 
                      dur="3s" 
                      repeatCount="indefinite" 
                    />
                  </stop>
                  <stop offset="100%" stopColor="#155284">
                    <animate 
                      attributeName="offset" 
                      values="0;2" 
                      dur="3s" 
                      repeatCount="indefinite" 
                    />
                  </stop>
                </linearGradient>
              </defs>

              <path
                d="M200,100 L600,100 L1000,100 L1000,400 L600,400 L200,400 L200,700 L600,700"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                filter="url(#glow)"
                className="dark:opacity-75"
                strokeDasharray="4000"
                strokeDashoffset="4000"
                style={{ zIndex: 0 }}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="4000"
                  to="0"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          {/* SVG Path - Mobile */}
          <div className="md:hidden">
            <svg 
              className="absolute top-0 left-0 w-full h-full pointer-events-none" 
              viewBox="0 0 800 1600" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pathGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4FA0E3">
                    <animate 
                      attributeName="offset" 
                      values="-1;1" 
                      dur="3s" 
                      repeatCount="indefinite" 
                    />
                  </stop>
                  <stop offset="100%" stopColor="#155284">
                    <animate 
                      attributeName="offset" 
                      values="0;2" 
                      dur="3s" 
                      repeatCount="indefinite" 
                    />
                  </stop>
                </linearGradient>
              </defs>

              <path
                d="M200,100 
                   L600,100 
                   L600,300 
                   L200,300
                   L200,500
                   L600,500
                   L600,700
                   L200,700
                   L200,900
                   L600,900
                   L600,1100
                   L200,1100
                   L200,1300
                   L600,1300"
                fill="none"
                stroke="url(#pathGradientMobile)"
                strokeWidth="4"
                filter="url(#glow)"
                className="dark:opacity-75"
                strokeDasharray="4000"
                strokeDashoffset="4000"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="4000"
                  to="0"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          {/* Roadmap Grid */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-16 md:gap-y-32 p-4">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  index % 3 === 1 ? 'md:translate-y-16' : ''
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-0 relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 relative">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="relative z-20 text-base md:text-xl font-medium text-gray-800 dark:text-gray-200 text-center bg-white/90 dark:bg-gray-900/90 px-2 rounded-lg backdrop-blur-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3Roadmap;
