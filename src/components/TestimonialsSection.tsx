import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Shariful's Studio transformed our entire digital presence. The attention to detail is unparalleled — every interaction feels intentional.",
    name: "Alexandra Chen",
    title: "CEO, Lumière Brands",
    location: "Shanghai",
  },
  {
    quote: "Working with them felt effortless. They understood our vision before we could even articulate it. The result exceeded every expectation.",
    name: "Marcus Reinhardt",
    title: "Founder, Atelier Noir",
    location: "Berlin",
  },
  {
    quote: "The level of sophistication they bring to web design is rare. Our conversion rates doubled within the first quarter of launch.",
    name: "Priya Kapoor",
    title: "Creative Director, Maison Verte",
    location: "Mumbai",
  },
  {
    quote: "They don't just design websites — they craft experiences. Our clients constantly compliment the elegance of our digital platform.",
    name: "James Whitfield",
    title: "Managing Partner, Sterling & Co.",
    location: "London",
  },
  {
    quote: "Minimalism done right. Every pixel has a purpose. Shariful's Studio is the gold standard for premium web design.",
    name: "Yuki Tanaka",
    title: "Brand Strategist, Sakura Digital",
    location: "Tokyo",
  },
  {
    quote: "From our first call to final delivery, the process was seamless. They elevated our brand to a level we didn't think possible.",
    name: "Sofia Andersen",
    title: "Co-Founder, Nordic Haus",
    location: "Copenhagen",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-32 px-6 sm:px-12 lg:px-24 border-t border-border">
      <motion.p
        className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Trusted Worldwide
      </motion.p>

      <div className="max-w-3xl mx-auto text-center min-h-[280px] flex flex-col items-center justify-center">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Quote mark */}
          <span className="font-cursive text-6xl text-chrome-light leading-none mb-6">"</span>

          <p className="font-cursive italic text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-foreground mb-10">
            {current.quote}
          </p>

          <div className="w-8 h-px line-chrome mb-6" />

          <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground">
            {current.name}
          </p>
          <p className="font-body text-[10px] tracking-[0.15em] text-muted-foreground mt-1">
            {current.title}
          </p>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-chrome-dark mt-2">
            {current.location}
          </p>
        </motion.div>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "bg-foreground w-6"
                : "bg-chrome-light hover:bg-chrome"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
