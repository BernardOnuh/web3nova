import { Calendar, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

export default function EventsSection() {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const deviceWidth = window.innerWidth;
        setWidth(deviceWidth);
    }, []);
    
    const eventsData = [
        {
            iFrameLink: "https://www.youtube.com/embed/OfeXlX8r--M",
            name: "SUI on Campus FUTA workshop",
            date: "September, 2025",
            xLink: "https://x.com/web3_nova/status/1970811022782181823",
            description: "An engaging workshop at FUTA introducing students to SUI blockchain technology, covering smart contracts, decentralized applications, and hands-on development sessions."
        }, 
        {
            iFrameLink: "https://www.youtube.com/embed/rOSsVTRAo00",
            name: "Farcaster Meetup, Akure",
            date: "August, 2025",
            xLink: "https://x.com/web3_nova/status/1960754143607267542",
           description: "A community gathering focused on Farcaster protocol, exploring decentralized social networking, building on Farcaster, and connecting with local Web3 enthusiasts in Akure."
        },
        {
            iFrameLink: "https://www.youtube.com/embed/x5bABfUCNjU",
            name: "Avalanche Workshop, Akure",
            date: "June, 2025",
            xLink: "https://x.com/web3_nova/status/1947194757652070749",
            description: "Deep dive into Avalanche blockchain ecosystem, featuring subnet development, cross-chain capabilities, and practical demonstrations of building scalable dApps on Avalanche."
        },
        {
            iFrameLink: "https://www.youtube.com/embed/cOiMfXCZk9g?si=Gq8nOBcHgQi82DGr",
            name: "Base Bathches 2.0 Hacker House",
            date: "May, 2025",
            xLink: "https://x.com/web3_nova/status/1919359225660047643",
            description: "An intensive hacker house event on Base L2 blockchain, bringing developers together to build innovative projects, learn best practices, and compete for prizes."
        },
        {
            iFrameLink: "https://www.youtube.com/embed/x5bABfUCNjU?si=iq2xOKaSLACpmr7e",
            name: "Avalanche Meetup, Akure",
            date: "April, 2025",
            xLink: "https://x.com/web3_nova/status/1909868260649992327",
            description: "Community meetup exploring Avalanche's consensus mechanism, discussing DeFi opportunities, and networking with developers building on the Avalanche network."
        },
        {
            iFrameLink: "https://www.youtube.com/embed/N4Y0CBuQH3M?si=rWGq94Gs2coGo6RD",
            name: "DEVCON Workshop, Akure",
            date: "February, 2025",
            xLink: "https://x.com/web3_nova/status/1885406092647178367",
            description: "Post-DEVCON community workshop sharing insights from the global Ethereum conference, discussing protocol updates, new EIPs, and the future of Ethereum development."
        },
        {
            iFrameLink: "https://www.youtube.com/embed/TgSjjvs2ky8",
            name: "Base Hacker Workshop, Akure",
            date: "October, 2024",
            xLink: "https://x.com/baseakure/status/1845184532414333066",
            description: "Introduction to building on Base, Coinbase's Layer 2 solution, covering smart contract deployment, gas optimization, and integrating Base into existing Web3 applications."
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
                                        <button className="bg-blue-400 hover:bg-blue-500 rounded-3xl md:px-10 px-5 md:py-3 py-1 flex items-center gap-2">
                                            <Twitter size={20} />
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