import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-24">
      <div className="max-w-5xl">
        <motion.p
          className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Web Design Studio — Worldwide
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          We craft digital
          <br />
          <span className="italic font-cursive font-light text-chrome">
            experiences
          </span>
          <br />
          that captivate
        </motion.h1>

        <motion.div
          className="mt-12 flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-12 h-px bg-chrome" />
          <p className="font-body text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
            Premium web design for brands that demand excellence. 
            From concept to launch, we bring your vision to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
