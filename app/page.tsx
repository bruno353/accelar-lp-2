import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <About />
      <Features />
      <Brands />
      <Contact />
      <NewsletterSignup />
    </>
  );
}
