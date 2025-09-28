import Image from "next/image"
import { useState, useEffect } from "react"

const images = [
    { src: '/avalanche-workshop.jpg', alt: 'logo' },
    { src: '/facaster-meet.png', alt: 'logo' },
    { src: '/base-batches-2.jpg', alt: 'logo' },
    { src: '/devcon.jpg', alt: 'logo' },
    { src: '/web3conference.png', alt: 'logo' },
    { src: '/sui1.jpg', alt: 'logo' },
    { src: '/sui2.jpg', alt: 'logo' },
    { src: '/class.png', alt: 'logo' },
]

export default function EventGallery() {
    return (
        <div className="bg-blue-100 py-20">
        <div className="max-w-fit mx-auto p-5">
            <section className="grid grid-cols-4 gap-2 grid-row-2">
            <Image
                src={images[1].src}
                alt={images[1].alt}
                loading="lazy"
                width={300}
                height={100}
                className="transition-all duration-700 rounded "
            />
             <Image
                src={images[0].src}
                alt={images[0].alt}
                loading="lazy"
                width={300}
                height={100}
                className="transition-all duration-700 rounded"
            />
            <Image
                src={images[2].src}
                alt={images[2].alt}
                loading="lazy"
                width={300}
                height={100}
                className="transition-all duration-700 rounded"
            />
            <Image
                src={images[3].src}
                alt={images[3].alt}
                loading="lazy"
                width={300}
                height={100}
                className="transition-all duration-700 rounded"
            />
            <Image
                src={images[4].src}
                alt={images[4].alt}
                loading="lazy"
                width={300}
                height={100}
                className="transition-all duration-700 rounded"
            />
              <Image
                src={images[5].src}
                alt={images[5].alt}
                loading="lazy"
                width={300}
                height={100}
                className="transition-all duration-700 rounded h-full"
            />
            <Image
                src={images[6].src}
                alt={images[6].alt}
                loading="lazy"
                width={300}
                height={100}
                className="transition-all duration-700 rounded h-full"
            />
            <Image
                src={images[7].src}
                alt={images[7].alt}
                loading="lazy"
                width={300}
                height={100}
                className="transition-all duration-700 rounded"
            />
            </section>
        </div>
    </div>
)
}