import Image from "next/image";
import localFont from "next/font/local";
import Header from "../components/Header";
import DAppsSection from "../components/Dapp/Hero";
import JoinCohort from "../components/Training/JoinCohort";
import Footer from "../components/Footer";



export default function Cohorts() {
  return (
   <div>
    <Header/>
   <DAppsSection/>
    <JoinCohort/>
    <Footer/>
   </div>
  );
}
