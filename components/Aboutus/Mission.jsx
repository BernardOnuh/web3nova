import React from 'react';
import Image from 'next/image';

const MissionSection = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4FA0E3] text-center mb-8">
          Our Mission
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
          Fermentum in ridiculus sed molestie. Vitae eget egestas at vitae magna tellus aliquet
          convallis. Vitae elit ante nibh eu mattis lobortis. Porta proin in sed rhoncus vel turpis
          nulla. Sed lectus pellentesque urna pretium. Et nec velit id dolor quisque nisi pharetra
          viverra. Nibh mauris vestibulum orci turpis dictum nibh duis mattis. Consectetur sem.
        </p>

        <div className="rounded-3xl overflow-hidden max-w-4xl mx-auto">
          <div className="relative aspect-[16/9]">
            <Image
              src="/community.svg"
              alt="Mission illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
