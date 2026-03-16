import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhoneMockups from "@/components/PhoneMockups";
import { StatsBand, Features, HowItWorks, Roles } from "@/components/Sections";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Activates .reveal animations on scroll */}
      <ScrollReveal />

      <Navbar />
      <Hero />
      <PhoneMockups />
      <StatsBand />
      <Features />
      <HowItWorks />
      <Roles />
      <Download />
      <Footer />
    </>
  );
}