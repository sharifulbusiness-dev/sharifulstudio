import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import IntroScreen from "@/components/IntroScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import WorkSection from "@/components/WorkSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PhilosophySection from "@/components/PhilosophySection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <IntroScreen isVisible={showIntro} onComplete={() => setShowMain(true)} />

      {showMain && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Navbar />
          <HeroSection />
          <MarqueeSection />
          <WorkSection />
          <FeaturedInSection />
          <ServicesSection />
          <ProcessSection />
          <PhilosophySection />
          <AboutSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
          <FooterSection />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
