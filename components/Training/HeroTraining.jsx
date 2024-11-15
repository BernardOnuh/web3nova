
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const perks = [
    {
      icon: "🎓",
      text: "Scholarship Placements For Web 3.0 Students"
    },
    {
      icon: "🏠",
      text: "Free Internet for onsite Students"
    },
    {
      icon: "🌐",
      text: "Web3 Community Exposure and Hackathons For Students"
    }
  ];
  
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold inline-block py-2 bg-gradient-to-r from-[#4FA0E3] to-[#155284] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text] mb-6">
            Join 1,000+ students
            <br />
            Becoming Web3 Developers.
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl">
            We are supporting web3 developers and startups, and lowering barriers of entry into the Web3 ecosystem.
          </p>

          <div className="space-y-4 mb-8">
            {perks.map((perk, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
              >
                <span className="text-xl">{perk.icon}</span>
                <span>{perk.text}</span>
              </div>
            ))}
          </div>

          <Link 
            href="/join"
          >
        <button className="bg-red-500 hover:bg-red-600 dark:bg-red-600 mb-10 dark:hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 opacity-0 animate-fadeInDown animation-delay-600">
            Join The Next Cohort →
          </button>
          </Link>
        </div>

        {/* Right Images */}
        <div className="relative">
          <div className="relative w-full aspect-[1/2] md:aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/training2.svg"
              alt="Web3 students group photo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -top-8 -right-8 w-48 h-32">
            <div className="relative w-full h-full border-2 border-[#2388DA] rounded-2xl overflow-hidden">
              <Image
                src="/training4.jpg"
                alt="Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-32">
            <div className="relative w-full h-full border-2 border-[#2388DA] rounded-2xl overflow-hidden">
              <Image
                src="/training6.jpg"
                alt="Student"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
