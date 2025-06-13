
import Slider from "../../components/Slider";
import About from "../../components/About";
import SuccessSection from "../../components/SuccessSection";
import JoyfulMomentsSection from "../../components/JoyfulMomentsSection";
import LearningAchievementsSection from "../../components/LearningAchievementsSection";



import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Review from "../../components/Revew/Review";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      
    });
  }, []);

  return (
    <div className="my-10 container mx-auto">
       <div data-aos="zoom-in">
       <Slider></Slider>
       </div>
      <About></About>
      <div data-aos="zoom-in-down">
        <SuccessSection></SuccessSection>
      </div>
      <div data-aos="zoom-in-up">
        <JoyfulMomentsSection></JoyfulMomentsSection>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <LearningAchievementsSection></LearningAchievementsSection>
      </div>
      <Review></Review>
      <div className="hidden">
        check
      </div>
    </div>
  );
};

export default Home;
