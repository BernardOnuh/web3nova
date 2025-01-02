import React from 'react';
import Image from 'next/image';

const CommunitySection = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl py-4 font-bold mb-4 bg-gradient-to-r from-[#4FA0E3] to-[#155284] dark:text-white bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] dark:[-webkit-text-fill-color:white]">
            Our Community
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Start your career in the Blockchain Development industry by receiving
            training from industry experts through our 16 weeks hands on bootcamp.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Top large image */}
          <div className="col-span-4 md:col-span-2">
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="/community.svg"
                alt="Students attending blockchain development class"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right tall image */}
          <div className="col-span-4 md:col-span-2 md:row-span-3">
            <div className="relative w-full h-[300px] md:h-[700px] rounded-2xl overflow-hidden">
              <Image
                src="/community-5.svg"
                alt="Student developer showcasing work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Left tall image */}
          <div className="col-span-2 md:col-span-1 row-span-2">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/community-1.svg"
                alt="Student learning blockchain"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Bottom images container */}
          <div className="col-span-2 md:col-span-1 space-y-1"> {/* Changed to space-y-1 for minimal gap */}
            <div className="relative w-full h-[195px] rounded-2xl overflow-hidden"> {/* Adjusted height */}
              <Image
                src="/community-3.svg"
                alt="Community meetup discussion"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            <div className="relative w-full h-[195px] rounded-2xl overflow-hidden"> {/* Adjusted height */}
              <Image
                src="/community-4.svg"
                alt="Community workshop session"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;