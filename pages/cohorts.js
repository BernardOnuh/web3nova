import Image from "next/image";
import localFont from "next/font/local";
import Header from "../components/Header";
import GallerySection from "../components/Cohorts/Gallery";
import JoinCohort from "../components/Training/JoinCohort";
import Footer from "../components/Footer";



export default function Cohorts() {
  return (
   <div>
    <Header/>
    <GallerySection/>
    <JoinCohort/>
    <Footer/>
   </div>
  );
}
