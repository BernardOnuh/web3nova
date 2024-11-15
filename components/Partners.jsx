import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const InfinitePartnerScroll = () => {
  const partners = [
    { name: 'aptos', lightIcon: '/aptos.svg', darkIcon: '/aptosw.svg', twitter: 'https://x.com/aptos?s=21' },
    { name: 'arbitrum', lightIcon: '/arbitrum.svg', darkIcon: '/arbitrumw.svg', twitter: 'https://x.com/arbitrum?s=21' },
    { name: 'base', lightIcon: '/base.svg', darkIcon: '/base.svg', twitter: 'https://x.com/base?s=21' },
    { name: 'optimism', lightIcon: '/optimism.svg', darkIcon: '/optimism.svg', twitter: 'https://x.com/optimism?s=21' },
    { name: 'Lisk', lightIcon: '/lisk.svg', darkIcon: '/Liskw.svg', twitter: 'https://x.com/liskhq?s=21' },
    { name: 'scroll', lightIcon: '/scroll.svg', darkIcon: '/scrollw.svg', twitter: 'https://x.com/scroll_zkp?s=21' },
    { name: 'sui', lightIcon: '/sui.svg', darkIcon: '/sui.svg', twitter: 'https://x.com/suinetwork?s=21' },
    { name: 'solana', lightIcon: '/solana.svg', darkIcon: '/solanaw.svg', twitter: 'https://x.com/solana?s=21' },
  ];

  // Create a triple-repeated array for smoother infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-8 overflow-hidden">
      <div className="relative w-full">
        <div className="flex animate-scroll hover:pause">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-none w-[160px] md:w-[200px] mx-4 md:mx-8"
            >
              <Link
                href={partner.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center justify-center p-3 md:p-4 mt-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg dark:hover:bg-gray-800">
                  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <div className="dark:hidden w-24 h-24 md:w-32 md:h-32 relative">
                      <Image
                        src={partner.lightIcon}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="hidden dark:block w-24 h-24 md:w-32 md:h-32 relative">
                      <Image
                        src={partner.darkIcon}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0px));
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: fit-content;
          display: flex;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @layer utilities {
          .pause {
            animation-play-state: paused;
          }
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
};

export default InfinitePartnerScroll;