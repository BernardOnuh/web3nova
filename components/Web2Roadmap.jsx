import React from 'react';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      title: "Introduction to HTML",
      description: "Nunc non in viverra ultrices odio vitae magna ornare odio. Volutpat tellus nibh neque id sapien egestas. Tincidunt tortor magna."
    },
    {
      title: "Introduction to HTML",
      description: "Nunc non in viverra ultrices odio vitae magna ornare odio. Volutpat tellus nibh neque id sapien egestas. Tincidunt tortor magna."
    },
    {
      title: "Introduction to HTML",
      description: "Nunc non in viverra ultrices odio vitae magna ornare odio. Volutpat tellus nibh neque id sapien egestas. Tincidunt tortor magna."
    },
    {
      title: "Introduction to HTML",
      description: "Nunc non in viverra ultrices odio vitae magna ornare odio. Volutpat tellus nibh neque id sapien egestas. Tincidunt tortor magna."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4FA0E3] dark:text-[#4FA0E3]">
            Web2 Roadmap
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Start your career in the Blockchain Development industry by receiving
            training from industry experts through our 16 weeks hands on bootcamp.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="relative">
          {/* Background Card */}
          <div className="absolute inset-0 bg-[#2388DA] dark:bg-[#4FA0E3]/10 rounded-3xl " />
          
          {/* Content Grid */}
          <div className="relative grid md:grid-cols-2 gap-12 md:gap-16 p-8 md:p-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white dark:bg-gray-200 rounded-full" />
                    <h3 className="text-xl md:text-2xl font-semibold text-white dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/90 dark:text-gray-200 leading-relaxed pl-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional: Add decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#4FA0E3]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#4FA0E3]/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default RoadmapSection;