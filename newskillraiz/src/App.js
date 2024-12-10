import React from "react";
import "./style.css";
import Hero from "./components/Hero";
import OnlineLearningBenefits from "./components/OnlineLearningBenefits";
import LearningPath from "./components/LearningPath";
import OnlineCourses from "./components/OnlineCourses";
import Sessions from "./components/Sessions";
import OurInstructors from "./components/OurInstructors";
import OurWorks from "./components/OurWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Location from "./components/Location";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
function App() {
  return (
    <div>
      
       <Hero/>
       <OnlineLearningBenefits/>
       <LearningPath/>
       <OnlineCourses/>
       <Sessions/>
       <OurInstructors/>
       <OurWorks/>
       <WhyChooseUs/>
       <Location/>
       <ChatBot/>
       <Footer/>
    </div>
  );
}

export default App;
