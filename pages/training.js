import Image from "next/image";
import localFont from "next/font/local";
import Header from "../components/Header";
import HeroTraining from "../components/Training/HeroTraining";
import CoursesSection from "../components/Training/CourseSection";
import JoinCohort from "../components/Training/JoinCohort";
import Footer from "../components/Footer";



export default function Training() {
  return (
   <div>
    <Header/>
    <HeroTraining/>
    <CoursesSection/>
    <JoinCohort/>
    <Footer/>
   </div>
  );
}
