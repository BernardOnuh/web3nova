import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Bernard O.",
      role: "Founder, Lead Dev.",
      image: "/community-4.svg"
    },
    {
      name: "Bernard O.",
      role: "Founder, Lead Dev.",
      image: "/community-4.svg"
    },
    {
      name: "Bernard O.",
      role: "Founder, Lead Dev.",
      image: "/community-4.svg"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4FA0E3] text-center mb-12">
          Meet the team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <div className="relative w-full h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
