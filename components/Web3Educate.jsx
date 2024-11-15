import React from 'react';
import Image from 'next/image';

const Web3Roadmap = () => {
  const roadmapItems = [
    {
      title: "Introduction to Blockchain",
      icon: "/intro-blockchain.svg",
      position: "left",
    },
    {
      title: "Ethereum",
      icon: "/ethereum.svg",
      position: "center",
    },
    {
      title: "Solidity",
      icon: "/solidity.svg",
      position: "right",
    },
    {
      title: "EtherJS & Web3JS",
      icon: "/etherjs.svg",
      position: "left",
    },
    {
      title: "Hardhat",
      icon: "/hardhat.svg",
      position: "center",
    },
    {
      title: "Foundry",
      icon: "/foundry.svg",
      position: "right",
    },
    {
      title: "Non-Fungible Token",
      icon: "/nft.svg",
      position: "left",
    },
    {
      title: "Blockchain Security",
      icon: "/security.svg",
      position: "center",
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4FA0E3] to-[#155284] inline-block text-transparent bg-clip-text">
            Web3 Roadmap
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Start your career in the Blockchain Development industry by receiving
            training from industry experts through our 16 weeks hands on bootcamp.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto min-h-[800px]">
          {/* SVG Path */}
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
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main connecting path */}
            <path
              d="M200,100 
                 L600,100 
                 L1000,100
                 L1000,400
                 L600,400
                 L200,400
                 L200,700
                 L600,700"
              fill="none"
              stroke="url(#pathGradient)"
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

          {/* Roadmap Grid */}
          <div className="relative z-10 grid grid-cols-3 gap-8 gap-y-32">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg transition-transform hover:scale-110">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-xl font-medium text-gray-800 dark:text-gray-200 text-center">
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