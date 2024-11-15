import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      text: "Lectus nulla neque ipsum ut laoreet. Neque fames in molestie quam feugiat vitae et elit nibh. Ut malesuada duis donec nec facilisis varius. Quis risus proin neque morbi purus. Pellentesque fringilla quisque tempus sit nec.",
      author: "Akande Abidemi",
      role: "Frontend Developer",
      avatar: "/student-avatar.jpg"
    },
    {
      text: "Lectus nulla neque ipsum ut laoreet. Neque fames in molestie quam feugiat vitae et elit nibh. Ut malesuada duis donec nec facilisis varius. Quis risus proin neque morbi purus. Pellentesque fringilla quisque tempus sit nec.",
      author: "Akande Abidemi",
      role: "Fronte Developer",
      avatar: "/student-avatar.jpg"
    },
    {
      text: "Lectus nulla neque ipsum ut laoreet. Neque fames in molestie quam feugiat vitae et elit nibh. Ut malesuada duis donec nec facilisis varius. Quis risus proin neque morbi purus. Pellentesque fringilla quisque tempus sit nec.",
      author: "Akande Abidemi",
      role: "Frontend Developer",
      avatar: "/student-avatar.jpg"
    },
    {
      text: "Lectus nulla neque ipsum ut laoreet. Neque fames in molestie quam feugiat vitae et elit nibh. Ut malesuada duis donec nec facilisis varius. Quis risus proin neque morbi purus. Pellentesque fringilla quisque tempus sit nec.",
      author: "Akande Abidemi",
      role: "Frontend Developer",
      avatar: "/student-avatar.jpg"
    }
  ];

  const stats = [
    {
      number: "1000+",
      text: "Student have been introduced to blockchain"
    },
    {
      number: "1000+",
      text: "Student have been introduced to blockchain"
    },
    {
      number: "1000+",
      text: "Student have been introduced to blockchain"
    }
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSwipeOffset(-100);
      setTimeout(() => {
        setCurrentTestimonial((prev) => 
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
        setSwipeOffset(0);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSwipeOffset(100);
      setTimeout(() => {
        setCurrentTestimonial((prev) => 
          prev === 0 ? testimonials.length - 1 : prev - 1
        );
        setSwipeOffset(0);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;
    const offset = Math.min(Math.max(-diff, -100), 100);
    setSwipeOffset(offset);
    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    } else {
      setSwipeOffset(0); // Reset if not enough to trigger swipe
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const getNextIndex = () => {
    return currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4FA0E3] to-[#155284] inline-block text-transparent bg-clip-text">
            What our students are saying
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Start your career in the Blockchain Development industry by receiving
            training from industry experts through our 16 weeks hands on bootcamp.
          </p>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden text-center mb-4 text-gray-500 dark:text-gray-400 flex items-center justify-center space-x-2">
          <ChevronLeft className="w-4 h-4" />
          <span>Swipe to navigate</span>
          <ChevronRight className="w-4 h-4" />
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div 
            className="relative overflow-hidden h-[400px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Current Card */}
            <div 
              className="absolute w-full transform transition-all duration-300 ease-out"
              style={{
                transform: `translateX(${swipeOffset}%) rotate(${swipeOffset * 0.1}deg)`,
                zIndex: 20,
              }}
            >
              <TestimonialCard testimonial={testimonials[currentTestimonial]} />
            </div>

            {/* Next Card (Showing underneath) */}
            <div 
              className="absolute w-full transform scale-95 opacity-70"
              style={{
                zIndex: 10,
              }}
            >
              <TestimonialCard testimonial={testimonials[getNextIndex()]} />
            </div>

            {/* Desktop Navigation Buttons */}
            <div className="hidden md:block">
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-red-500 hover:bg-red-600 p-3 rounded-full text-white transition-all z-30"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-red-500 hover:bg-red-600 p-3 rounded-full text-white transition-all z-30"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-red-500 w-4' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#2388DA] rounded-2xl p-8 text-center text-white"
            >
              <div className="flex justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-sm opacity-90">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Separate card component for better organization
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
    <div className="text-center">
      <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8">
        &#34;{testimonial.text}&#34;
      </p>
      
      <div className="flex items-center justify-center">
        <Image
          src={testimonial.avatar}
          alt={testimonial.author}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
        <div className="ml-4 text-left">
          <h3 className="font-bold text-gray-900 dark:text-white">
            {testimonial.author}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;