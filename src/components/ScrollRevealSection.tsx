import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const line =
  "Design that moves · with the scroll · with the eye · with intent · every frame considered · every pause earned";

const words = line.split(" ");

const ScrollRevealSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 sm:px-12 lg:px-24 border-t border-border overflow-hidden"
    >
      <motion.p
        className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        In Motion
      </motion.p>

      <motion.p
        style={{ x }}
        className="font-display text-2xl sm:text-4xl md:text-5xl font-light leading-[1.35] max-w-5xl flex flex-wrap gap-x-3"
      >
        {words.map((word, i) => {
          const start = i / words.length * 0.6 + 0.05;
          const end = start + 0.18;
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const o = useTransform(scrollYProgress, [start, end], [0.12, 1]);
          return (
            <motion.span key={`${word}-${i}`} style={{ opacity: o }}>
              {word}
            </motion.span>
          );
        })}
      </motion.p>
    </section>
  );
};

export default ScrollRevealSection;
