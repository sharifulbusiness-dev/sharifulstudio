import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery", desc: "We immerse ourselves in your brand, audience, and goals to define the perfect creative direction." },
  { number: "02", title: "Strategy", desc: "Architecture, user flows, and content strategy aligned to deliver measurable results." },
  { number: "03", title: "Design", desc: "Pixel perfect designs that balance beauty with functionality where every detail is considered." },
  { number: "04", title: "Launch", desc: "Clean code, rigorous testing, and a seamless handoff. Then we refine based on real-world data." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How We Work
        </motion.p>

        <motion.h2
          className="font-display text-3xl sm:text-4xl font-light text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Our <span className="font-cursive italic">Process</span>
        </motion.h2>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-8 sm:gap-12 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-body text-[10px] tracking-wider text-chrome-dark pt-2 flex-shrink-0">
                {step.number}
              </span>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-light mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-[1.8] max-w-md">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="w-px h-8 bg-border mt-8 ml-0" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
