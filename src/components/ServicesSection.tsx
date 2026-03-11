import { motion } from "framer-motion";

const services = [
  { number: "01", title: "Web Design", description: "Bespoke websites that embody your brand's essence with meticulous attention to detail." },
  { number: "02", title: "Brand Identity", description: "Cohesive visual systems that establish presence and command recognition globally." },
  { number: "03", title: "UI/UX Design", description: "Intuitive interfaces crafted for seamless user journeys and lasting impressions." },
  { number: "04", title: "Development", description: "Clean, performant code that brings designs to life with pixel-perfect precision." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6 sm:px-12 lg:px-24">
      <motion.p
        className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Services
      </motion.p>

      <div className="space-y-0">
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 border-t border-border last:border-b cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-baseline gap-6 sm:gap-10">
              <span className="font-body text-[10px] text-muted-foreground tracking-wider">
                {service.number}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-light group-hover:italic transition-all duration-500">
                {service.title}
              </h3>
            </div>
            <p className="font-body text-xs text-muted-foreground max-w-xs mt-3 sm:mt-0 ml-12 sm:ml-0 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
