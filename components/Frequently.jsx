import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Web3Nova ",
      answer:"is a tech company focused on training developers both web2 and web3 developers to achieve there maximum potential."
    },
    {
      question: "What are the benefits of web3nova",
      answer: "We educate you from novice to proffessional and help you achieve your maximum potential"
    },
    {
      question: "Can I join web3nova without having any knowledge about blockchain ",
      answer: "Yes we will educate you on the basics and importance of web3"
    },
    {
      question: "Is web3nova only for web3 developers ?",
      answer: "No, we are focused on builders and technical skills providing neccesary resources for you to achieve your maximum potentials."
    },
    {
      question: "Would I get a certificate after the course ?",
      answer: "Yes, we would provide certificate and also digital certifictes(NFTs)."
    },
    {
      question: "Is web3nova only for web3 developers ?",
      answer: "No, we are focused on builders and technical skills providing neccesary resources for you to achieve your maximum potentials."
    },
    {
      question: "If I an a total newbie would i be taught the basics ?",
      answer: "Yes, We educate you from novice to proffessional and help you achieve your maximum potential."
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl py-4 font-bold mb-4 bg-gradient-to-r from-[#4FA0E3] to-[#155284] dark:text-white bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] dark:[-webkit-text-fill-color:white]">
            FAQs
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Start your career in the Blockchain Development industry by receiving
            training from industry experts through our 16 weeks hands on bootcamp.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-[#4FA0E3] rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left text-[#4FA0E3] hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="flex-shrink-0" />
                ) : (
                  <Plus className="flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
