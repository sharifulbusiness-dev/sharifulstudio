import { motion } from "framer-motion";

const publications = [
  "Forbes",
  "The Financial Express",
  "The Daily Star",
  "Prothom Alo",
  "Bloomberg",
  "TechCrunch",
  "The Guardian",
  "Vogue Business",
  "Fast Company",
  "Wired",
];

const FeaturedInSection = () => {
  return (
    <section className="py-16 border-t border-border overflow-hidden">
      <motion.p
        className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Featured In
      </motion.p>

      <div className="overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...publications, ...publications, ...publications].map((pub, i) => (
            <span
              key={i}
              className="font-body text-[10px] tracking-[0.4em] uppercase text-chrome mx-8"
            >
              {pub}
              <span className="mx-8 text-chrome-light">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
