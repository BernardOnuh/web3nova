import React from 'react';
import Image from 'next/image';

const GallerySection = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4FA0E3] text-center mb-12">
          Some galleries of our previous cohort
        </h2>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {/* First large image */}
          <div className="w-full rounded-3xl overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image
                src="/community.svg"
                alt="Classroom session"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Middle row with tall left image and two right stacked images */}
          <div className="flex gap-4">
            <div className="w-1/2 rounded-3xl overflow-hidden">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/community-1.svg"
                  alt="Student at tech club"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="w-1/2 flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/community-2.svg"
                    alt="Students group discussion"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/community-3.svg"
                    alt="Students in audience"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom large image */}
          <div className="w-full rounded-3xl overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image
                src="/community-5.svg"
                alt="Instructor portrait"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
