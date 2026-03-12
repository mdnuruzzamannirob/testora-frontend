import About from "@/components/home/About";
import AppScreens from "@/components/home/AppScreens";
import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import CTA from "@/components/home/CTA";
import Exam from "@/components/home/Exam";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Marketplace from "@/components/home/Marketplace";
import Packages from "@/components/home/Packages";
import Stats from "@/components/home/Stats";

const HomePage = () => {
  return (
    <section className="flex-1">
      <Banner />
      <Stats />
      <About />
      <Exam />
      <HowItWorks />
      <Features />
      <AppScreens />
      <Packages />
      <Marketplace />
      <Blog />
      <CTA />
    </section>
  );
};

export default HomePage;
