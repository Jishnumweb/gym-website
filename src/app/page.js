import AboutSection from "@/components/About";
import FinalCTASection from "@/components/Cta";
import FitnessLandingPage from "@/components/Hero";
import MembershipSection from "@/components/Pricing";
import ProgramsSection from "@/components/Programs";
import StatsSection from "@/components/Stats";
import TestimonialsSection from "@/components/Testimonial";
import TrainersSection from "@/components/Trainers";
import WhyChooseSection from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <FitnessLandingPage/>
      <AboutSection/>
      <ProgramsSection/>
      <WhyChooseSection/>
      <TrainersSection/>
      <StatsSection/>
      <TestimonialsSection/>
      <MembershipSection/>
<div id="cta">
        <FinalCTASection/>

</div>
    </div>
  );
}
