export default function EventsHero() {
    // this is the hero section with the background image and overlay
    return (
        <div className="relative flex items-center justify-center h-72 w-full">
            
            <img
                src="/training6.jpg"
                alt="events hero section image"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            
            <h1 className="absolute inset-0 flex flex-col items-center justify-center text-5xl font-bold text-blue-400 text-center">
                Some of our events <br /> at Web3Nova
            </h1>
        </div>
    )
}