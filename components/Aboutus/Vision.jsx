import React from 'react';
import Image from 'next/image';

const VisionSection = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4FA0E3] mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Fermentum in ridiculus sed molestie. Vitae eget egestas at vitae magna tellus aliquet convallis.
              Vitae elit ante nibh eu mattis lobortis. Porta proin in sed rhoncus vel turpis nulla. Sed lectus
              pellentesque urna pretium. Et nec velit id dolor quisque nisi pharetra viverra. Nibh mauris
              vestibulum orci turpis dictum nibh duis mattis. Consectetur sem.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/community-2.svg"
                alt="Vision illustration"
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

export default VisionSection;
