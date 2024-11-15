
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DAppsSection = () => {
  const dapps = [
    {
      name: "Appname",
      description: "Fermentum in ridiculus sed molestie. Vitae eget egestas at vitae magna tellus aliquet convallis. Vitae elit ante nibh eu mattis lobortis. Porta proin in sed rhoncus vel turpis nulla. Sed lectus pellentesque urna pretium.",
      image: "/community-2.svg"
    },
    {
      name: "Appname",
      description: "Fermentum in ridiculus sed molestie. Vitae eget egestas at vitae magna tellus aliquet convallis. Vitae elit ante nibh eu mattis lobortis. Porta proin in sed rhoncus vel turpis nulla. Sed lectus pellentesque urna pretium.",
      image: "/community-2.svg"
    },
    {
      name: "Appname",
      description: "Fermentum in ridiculus sed molestie. Vitae eget egestas at vitae magna tellus aliquet convallis. Vitae elit ante nibh eu mattis lobortis. Porta proin in sed rhoncus vel turpis nulla. Sed lectus pellentesque urna pretium.",
      image: "/community-2.svg"
    },
    {
      name: "Appname",
      description: "Fermentum in ridiculus sed molestie. Vitae eget egestas at vitae magna tellus aliquet convallis. Vitae elit ante nibh eu mattis lobortis. Porta proin in sed rhoncus vel turpis nulla. Sed lectus pellentesque urna pretium.",
      image: "/community-2.svg"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
 

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4FA0E3] text-center mb-4">
          Building for Your Web3 Journey!
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          Dapps are a growing movement of applications that use Ethereum to disrupt business models or invent new ones.
        </p>

        <div className="flex justify-center mb-16">
          <button className="px-6 py-3 bg-[#E94E5C] text-white rounded-full hover:bg-red-600 transition-colors">
            Explore some of our DApps
          </button>
        </div>

        <div className="space-y-6">
          {dapps.map((dapp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-6 flex gap-6">
              <div className="flex-shrink-0 w-32 h-32 relative rounded-2xl overflow-hidden">
                <Image
                  src={dapp.image}
                  alt={dapp.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-[#4FA0E3] text-xl font-semibold mb-2">
                  {dapp.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {dapp.description}
                </p>
                <button className="px-4 py-2 bg-[#E94E5C] text-white rounded-full text-sm hover:bg-red-600 transition-colors">
                  Explore Appname
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DAppsSection;
