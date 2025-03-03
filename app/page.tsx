import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HeroBlackhole from "@/components/HeroBlackhole";
import Plataform from "@/components/Plataform";
import Pricing from "@/components/Pricing";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HeroBlackhole />
      <Features />
      <Skills />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      {/* <Testimonials /> */}
      {/* 
      <Blog /> */}
      <Contact />
    </>
  );
}
