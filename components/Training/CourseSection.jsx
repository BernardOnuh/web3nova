import React from 'react';
import Link from 'next/link';

const CourseCard = ({ title, description, stats }) => (
<div className=''>
    <h2 className="text-2xl font-bold text-center text-[#4FA0E3] mb-4">{title}</h2>
  <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-[#4FA0E3] dark:border-blue-600 p-8 mb-8">
    
    
      {/*<div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-1 mb-6">
    <span className="text-blue-600 dark:text-blue-400">{stats}</span>
    </div>*/}

    <p className="text-gray-600 dark:text-gray-300 mb-8">{description}</p>
    
    <div className="space-x-4 mb-6">
      <button className="px-4 py-1 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors">
        Onsite
      </button>
      <button className="px-4 py-1 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors">
        Remote
      </button>
    </div>

    <Link 
      href="/register"
      className="inline-flex items-center px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
    >
      Register for this course
      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14m-7-7l7 7-7 7"/>
      </svg>
    </Link>
  </div>
  </div>
);

const CoursesSection = () => {
  const courses = [
    {
      title: "Web 2 Basic - HTML",
      stats: "996 Fill × 76 Hug",
      description: "Quis lacus pellentesque posuere pulvinar consectetur amet arcu pellentesque. Quam pretium commodo eros eget lacus molestie facilisi. Volutpat ullamcorper est nulla at bibendum gravida quisque. Feugiat risus magna nulla ultrices. Eget mollis arcu tempor volutpat sollicitudin lacus vulputate blandit morbi. Eget tincidunt sagittis senectus nam netus pretium non."
    },
    {
      title: "Web 2 Basic - HTML",
      stats: "996 Fill × 76 Hug",
      description: "Quis lacus pellentesque posuere pulvinar consectetur amet arcu pellentesque. Quam pretium commodo eros eget lacus molestie facilisi. Volutpat ullamcorper est nulla at bibendum gravida quisque. Feugiat risus magna nulla ultrices. Eget mollis arcu tempor volutpat sollicitudin lacus vulputate blandit morbi. Eget tincidunt sagittis senectus nam netus pretium non."
    },
    {
      title: "Web 2 Basic - HTML",
      stats: "996 Fill × 76 Hug", 
      description: "Quis lacus pellentesque posuere pulvinar consectetur amet arcu pellentesque. Quam pretium commodo eros eget lacus molestie facilisi. Volutpat ullamcorper est nulla at bibendum gravida quisque. Feugiat risus magna nulla ultrices. Eget mollis arcu tempor volutpat sollicitudin lacus vulputate blandit morbi. Eget tincidunt sagittis senectus nam netus pretium non."
    }
  ];

  return (
    <div className='w-full bg-white dark:bg-gray-800'>
    <div className="max-w-3xl mx-auto px-4 py-16">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
    </div>
  );
};

export default CoursesSection;
