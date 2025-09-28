import EventsHero from "./Event/Hero"
import EventsPatnersCarousel from "./Event/Carousel"
import EventsSection from "./Event/Events"
import EventGallery from "./Event/Gallery"

export default function Events(){
    return(
        <div>
            <EventsHero />
            <EventGallery />
            <EventsPatnersCarousel />
            <EventsSection />
        </div>
    )
}