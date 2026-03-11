import { motion } from "framer-motion";

const MarqueeSection = () => {
  const cities = [
    "London", "Tokyo", "New York", "Dubai", "Berlin", "Paris", 
    "Mumbai", "Shanghai", "Copenhagen", "Sydney", "Milan", "Seoul"
  ];

  return (
    <section className="py-16 border-t border-border overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1920] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...cities, ...cities, ...cities].map((city, i) => (
          <span
            key={i}
            className="font-body text-[10px] tracking-[0.4em] uppercase text-chrome mx-8"
          >
            {city}
            <span className="mx-8 text-chrome-light">·</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
