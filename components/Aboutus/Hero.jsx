import React from 'react';

const Hero = () => {
  // Get viewport width to adjust animation timing
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative  bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20">
        {/* Hero Text */}
        <div className="text-center my-3 md:my-20">
          <div className="mb-4">
            <h1 className="text-3xl md:text-[56px] font-semibold opacity-0 animate-fadeInDown">
              <span className="inline-block py-2 bg-gradient-to-r from-[#4FA0E3] to-[#155284] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
                Learn, Build and Network
              </span>
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl md:text-[56px] font-semibold opacity-0 animate-fadeInDown animation-delay-200">
              <span className="inline-block py-2 bg-gradient-to-r from-[#4FA0E3] to-[#155284] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]">
                at Web3Nova
              </span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-0 animate-fadeInDown animation-delay-400">
            Start your career in the Blockchain Development industry
            by receiving training from industry experts through our 16
            weeks hands on bootcamp.
          </p>
          <button className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 opacity-0 animate-fadeInDown animation-delay-600">
            Join The Next Cohort →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;