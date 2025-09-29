"use-client"

import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";

export default function EventsSection() {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const deviceWidth = window.innerWidth;
        setWidth(deviceWidth);
    }, []);
    
    const eventsData = [
        {
            iFrameLink: "https://www.youtube.com/embed/OfeXlX8r--M?si=wtPZh0dc_PogBNIb",
            name: "SUI on Campus FUTA workshop",
            date: "September, 2025",
            xLink: "https://x.com/web3_nova/status/1970811022782181823",
            description: "Web3Nova teamed up with SUI Builders to ignite a fresh wave of blockchain innovation. It was a rallying point for students to code, build, and deploy the ideas that could become the next big thing. The collaboration breathed new energy into the Sui on Campus Students Club at FUTA, setting a strong foundation for a growing community of builders."
        }, 
        {
            iFrameLink: "",
            name: "SUI on Campus FUTA workshop",
            date: "August, 2025",
            xLink: "https://x.com/web3_nova/status/1962782602986737994",
            description: "SUI on Campus in pattnership with Web3Nova brought together curious minds and hands-on builders in one space. Participants had the chance to: Learn essential blockchain concepts, Build functional applications, Network with peers and mentors. By the end of the sessions, several students had successfully deployed applications on the Sui Network using Move, taking their first real steps into blockchain development."
        },
        {
            iFrameLink: "https://youtube.com/embed/rOSsVTRAo00?si=vb5Ip1C4F_vJeE3k",
            name: "Farcaster Meetup, Akure",
            date: "August, 2025",
            xLink: "https://x.com/web3_nova/status/1960754143607267542",
           description: "Over 200 participants joined our farcaster sessions, where we introduced them to the Farcaster ecosystem. Attendees received invites, built their first mini-apps, and explored new ways to connect onchain. We opened doors to opportunities on Farcaster not just for developers, but also for creators, community builders, and everyday users encouraging everyone to claim their place in the decentralized future."
        },
        {
            iFrameLink: "",
            name: "Avalanche Workshop, Akure",
            date: "June, 2025",
            xLink: "https://x.com/web3_nova/status/1947194757652070749",
            description: "In partnership with AvaxTeam1, we hosted a hands-on Avalanche Developer Workshop at FUTA. Attendees explored the ecosystem through L1 deployment with AvaCloud, NFT minting on the Testnet, and smart contract development wrapping up with a fun Paint & Sip session. The event perfectly blended technical learning and community bonding, leaving builders inspired for the next leap in Web3."
        },
        {
            iFrameLink: "https://www.youtube.com/embed/cOiMfXCZk9g?si=Gq8nOBcHgQi82DGr",
            name: "Base Bathches 2.0 Hacker House",
            date: "May, 2025",
            xLink: "https://x.com/web3_nova/status/1919359225660047643",
            description: "Base Batches Workshop brought together passionate learners and builders eager to explore the Base blockchain. It was a session of creativity and teamwork where participants Formed teams Shared and refined ideas. Started building real projects. The energy in the room was electric, setting the tone for the next wave of Base-powered innovation."
        },
        {
            iFrameLink: "https://www.youtube.com/embed/x5bABfUCNjU?si=iq2xOKaSLACpmr7e",
            name: "Avalanche Meetup, Akure",
            date: "April, 2025",
            xLink: "https://x.com/web3_nova/status/1909868260649992327",
            description: "In partnership with AvaxNG, we hosted a high-energy onboarding program for builders and creatives. The event blended learning and networking, featuring: Engaging sessions introducing builders to Web3 Real-time opportunities to connect and collaborate. An atmosphere filled with creativity and inspiration. This meetup gave participants the momentum to take their first steps into the Avalanche ecosystem."
        },
        {
            iFrameLink: "https://www.youtube.com/embed/N4Y0CBuQH3M?si=rWGq94Gs2coGo6RD",
            name: "DEVCON Workshop, Akure",
            date: "February, 2025",
            xLink: "https://x.com/web3_nova/status/1885406092647178367",
            description: "The Devcon Workshop created a space for builders to strengthen their technical knowledge. Participants explored: Core blockchain concepts Transaction processing flows Fundamentals of swap systems. By the end of the workshop, builders gained the skills and perspective needed to start designing financial applications in Web3."
        },
        {
            iFrameLink: "",
            name: "Base Hacker Workshop, Akure",
            date: "October, 2024",
            xLink: "https://x.com/baseakure/status/1845184532414333066",
            description: "builders rallied around the Base blockchain to put ideas into action. With extra hours, focus, and passion, participants poured their energy into transforming concepts into real applications. captured the determination and creativity that define the Web3 builder community."
        }
    ]
    return (
        <div className="py-16 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 dark:text-white">
            <section className="max-w-7xl mx-auto">
                {eventsData.map((event, index) => (
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 p-4" key={index}>
                        {index % 2 === 0 && width < 768 ?
                            <>
                                <div className="rounded-2xl shadow-lg h-80 flex items-center justify-center bg-black">
                                    {event.iFrameLink ? (
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={event.iFrameLink}
                                            title={event.name}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                            className="w-full h-72 rounded-2xl"
                                        ></iframe>
                                    ) : null}
                                </div>
                                <div className="flex flex-col gap-1 md:h-80 h50 m-3">
                                    <h2 className="md:text-3xl text-2xl font-bold">{event.name}</h2>
                                    <h5 className="flex flex-row gap-1 items-center md:text-2xl text-xl"><Calendar size={20} />{event.date}</h5>
                                    <p className="md:text-xl text-xs">{event.description}</p>
                                    <a href={event?.xLink}>
                                        <button className="bg-blue-400 rounded-3xl md:px-10 px-5 md:py-3 py-1">
                                            <p className="font-semibold">View on X</p>
                                        </button>
                                    </a>
                                </div>
                            </>
                            :
                            <>
                                <div className="flex flex-col gap-1 md:h-80 h-50 m-3">
                                    <h2 className="md:text-3xl text-2xl font-bold">{event.name}</h2>
                                    <h5 className="flex flex-row gap-1 items-center md:text-2xl text-xl"><Calendar size={20} />{event.date}</h5>
                                    <p className="md:text-xl text-xs">{event.description}</p>
                                    <a href={event?.xLink}>
                                        <button className="bg-blue-400 rounded-3xl md:px-10 px-5 md:py-3 py-1">
                                            <p className="font-semibold">View on X</p>
                                        </button>
                                    </a>
                                </div>
                                <div className="rounded-2xl shadow-lg h-80 flex items-center justify-center bg-black m-3">
                                    {event.iFrameLink ? (
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={event.iFrameLink}
                                            title={event.name}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                            className="w-full h-72 rounded-2xl"
                                        ></iframe>
                                    ) : null}
                                </div>
                            </>
                        }
                    </div>
                ))}
            </section>
        </div>
    )
}