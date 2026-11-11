import { motion } from "framer-motion";

const PhilosophySection = () => {
  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Philosophy
        </motion.p>

        <motion.h2
          className="font-cursive italic text-3xl sm:text-5xl md:text-6xl font-light leading-[1.2] text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          We don't follow trends.
          <br />
          <span className="text-chrome">We set them.</span>
        </motion.h2>

        <motion.div
          className="w-12 h-px line-chrome mx-auto mt-12 mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.p
          className="font-body text-sm text-muted-foreground max-w-lg mx-auto leading-[1.9]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
           Every brand has a story worth telling beautifully. We take the time to 
           understand yours, then translate it into a digital experience that 
           resonates with precision, elegance, and purpose.
        </motion.p>
      </div>
    </section>
  );
};

export default PhilosophySection;
