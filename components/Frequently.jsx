import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long is the blockchain bootcamp?",
      answer: "Our intensive bootcamp runs for 16 weeks, providing hands-on training from industry experts in blockchain development."
    },
    {
      question: "What prerequisites are needed?",
      answer: "Basic programming knowledge and understanding of web development fundamentals are recommended for the bootcamp."
    },
    {
      question: "What technologies will I learn?",
      answer: "You'll learn Ethereum, Solidity, Web3.js, and other essential blockchain development tools and frameworks."
    },
    {
      question: "Is there job placement assistance?",
      answer: "Yes, we provide career guidance and connect you with our network of blockchain companies and startups."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4FA0E3] dark:text-[#4FA0E3]">
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
