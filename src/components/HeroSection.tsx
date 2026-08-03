import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const letter = useTransform(scrollYProgress, [0, 1], ["0.4em", "0.85em"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-24"
    >
      {/* no transformed wrapper: each element blends directly against the 3D backdrop */}
      <div className="max-w-5xl">
        <motion.p
          className="font-body text-[10px] uppercase text-background mix-blend-difference mb-6"
          style={{ letterSpacing: letter, y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Web Design Studio · Worldwide
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-background mix-blend-difference"
          style={{ y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          We craft digital
          <br />
          <span className="italic font-cursive font-light text-chrome-dark">
            experiences
          </span>
          <br />
          that captivate
        </motion.h1>

        <motion.div
          className="mt-12 flex items-center gap-8 text-background mix-blend-difference"
          style={{ y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-12 h-px bg-chrome shrink-0" />
          <p className="font-body text-xs sm:text-sm max-w-sm leading-relaxed opacity-70">
            Premium web design for brands that demand excellence.
            From concept to launch, we bring your vision to life.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-6 sm:left-12 lg:left-24 flex items-center gap-4 mix-blend-difference"
        style={{ opacity }}
      >
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-background opacity-60">
          Scroll
        </span>
        <motion.div
          className="w-16 h-px bg-chrome origin-left"
          animate={{ scaleX: [0.2, 1, 0.2] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
