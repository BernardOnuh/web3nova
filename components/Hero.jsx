import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20">
        {/* Hero Text */}
        <div className="text-center my-20">
        <div className="text-3xl md:text-[56px] py-2 font-semibold mb-6 opacity-0 animate-fadeInDown bg-gradient-to-r from-[#4FA0E3] to-[#155284] dark:from-[#4FA0E3] dark:to-[#155284] inline-block text-transparent bg-clip-text">
            Learn, Build and Network
          </div>
        <br></br>
          <div className="text-3xl md:text-[56px] py-2 font-semibold mb-6 opacity-0 animate-fadeInDown animation-delay-200 bg-gradient-to-r from-[#4FA0E3] to-[#155284] dark:from-[#4FA0E3] dark:to-[#155284] inline-block text-transparent bg-clip-text">
            at Web3Nova
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

        {/* SVG Path - Updated for dark mode */}
        <div className="relative h-[400px] md:h-[500px] w-screen mt-[-50px] md:mt-[-100px] left-[50%] -translate-x-1/2">
          <svg 
            className="absolute w-full h-full"
            viewBox="0 0 1920 500" 
            preserveAspectRatio="xMidYMid slice"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M-100 50C57.1933 69.2966 218.539 125.679 149.066 190.746C-37.7751 272.081 -8.75551 416.728 278.497 363.574C565.75 310.42 940.694 118.364 1366.92 250.245C1727.9 355.75 1831.05 408.385 2020 421.515" 
              className="dark:stroke-blue-400 stroke-blue-600"
              strokeWidth="3" 
              strokeDasharray="8 8"
            />
            
            {/* Updated gradient for full width */}
            <defs>
              <linearGradient 
                id="paint0_linear_63_396" 
                x1="0" 
                y1="0" 
                x2="1920" 
                y2="300" 
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4FA0E3"/>
                <stop offset="0.585" stopColor="#F3FAFF"/>
                <stop offset="1" stopColor="#2388DA"/>
              </linearGradient>
            </defs>

            {/* Animated Images - Larger Size */}
            <g className="moving-image-1">
              <circle 
                r="4" 
                fill="white" 
                className="animate-pulse"
              >
                <animateMotion
                  dur="20s"
                  repeatCount="indefinite"
                  path="M-100 50C57.1933 69.2966 218.539 125.679 149.066 190.746C-37.7751 272.081 -8.75551 416.728 278.497 363.574C565.75 310.42 940.694 118.364 1366.92 250.245C1727.9 355.75 1831.05 408.385 2020 421.515"
                />
              </circle>
              <image
                href="/student.svg"
                width="150"
                height="150"
                x="-48"
                y="-48"
                className="rounded-full image-shadow"
              >
                <animateMotion
                  dur="20s"
                  repeatCount="indefinite"
                  path="M-100 50C57.1933 69.2966 218.539 125.679 149.066 190.746C-37.7751 272.081 -8.75551 416.728 278.497 363.574C565.75 310.42 940.694 118.364 1366.92 250.245C1727.9 355.75 1831.05 408.385 2020 421.515"
                />
              </image>
            </g>

            <g className="moving-image-2">
              <circle 
                r="4" 
                fill="white" 
                className="animate-pulse"
              >
                <animateMotion
                  dur="20s"
                  repeatCount="indefinite"
                  path="M-100 50C57.1933 69.2966 218.539 125.679 149.066 190.746C-37.7751 272.081 -8.75551 416.728 278.497 363.574C565.75 310.42 940.694 118.364 1366.92 250.245C1727.9 355.75 1831.05 408.385 2020 421.515"
                  begin="6.6s"
                />
              </circle>
              <image
                href="/student1.svg"
                width="150"
                height="150"
                x="-48"
                y="-48"
                className="rounded-full image-shadow"
              >
                <animateMotion
                  dur="20s"
                  repeatCount="indefinite"
                  path="M-100 50C57.1933 69.2966 218.539 125.679 149.066 190.746C-37.7751 272.081 -8.75551 416.728 278.497 363.574C565.75 310.42 940.694 118.364 1366.92 250.245C1727.9 355.75 1831.05 408.385 2020 421.515"
                  begin="6.6s"
                />
              </image>
            </g>

            <g className="moving-image-3">
              <circle 
                r="4" 
                fill="white" 
                className="animate-pulse"
              >
                <animateMotion
                  dur="20s"
                  repeatCount="indefinite"
                  path="M-100 50C57.1933 69.2966 218.539 125.679 149.066 190.746C-37.7751 272.081 -8.75551 416.728 278.497 363.574C565.75 310.42 940.694 118.364 1366.92 250.245C1727.9 355.75 1831.05 408.385 2020 421.515"
                  begin="13.3s"
                />
              </circle>
              <image
                href="/student2.svg"
                width="150"
                height="150"
                x="-48"
                y="-48"
                className="rounded-full image-shadow"
              >
                <animateMotion
                  dur="20s"
                  repeatCount="indefinite"
                  path="M-100 50C57.1933 69.2966 218.539 125.679 149.066 190.746C-37.7751 272.081 -8.75551 416.728 278.497 363.574C565.75 310.42 940.694 118.364 1366.92 250.245C1727.9 355.75 1831.05 408.385 2020 421.515"
                  begin="13.3s"
                />
              </image>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;