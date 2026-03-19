import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhoneMockups from "@/components/PhoneMockups";
import { StatsBand, Features, HowItWorks, Roles, InstallGuide } from "@/components/Sections";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <PhoneMockups />
      <StatsBand />
      <Features />
      <HowItWorks />
      <Roles />
      <InstallGuide />
      <Download />
      <Footer />
    </>
  );
}