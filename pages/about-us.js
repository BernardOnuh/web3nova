import Image from "next/image";
import localFont from "next/font/local";
import Header from "../components/Header";
import Hero from "../components/Aboutus/Hero";
import MissionSection from "../components/Aboutus/Mission";
import VisionSection from "../components/Aboutus/Vision";
import TeamSection from "../components/Aboutus/Team";
import JoinCohort from "../components/Training/JoinCohort";
import Footer from "../components/Footer";



export default function Cohorts() {
  return (
   <div>
    <Header/>
    <Hero/>
    <MissionSection/>
    <VisionSection/>
    <TeamSection/>
    <JoinCohort/>
    <Footer/>
   </div>
  );
}
