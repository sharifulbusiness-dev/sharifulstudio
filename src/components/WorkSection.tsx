import { motion } from "framer-motion";

const projects = [
  { name: "Lumière Brands", category: "E-Commerce", year: "2025" },
  { name: "Atelier Noir", category: "Brand Identity", year: "2025" },
  { name: "Maison Verte", category: "Web Platform", year: "2024" },
  { name: "Sterling & Co.", category: "Corporate Site", year: "2024" },
  { name: "Nordic Haus", category: "Brand & Web", year: "2024" },
  { name: "Sakura Digital", category: "UI/UX Design", year: "2023" },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6 sm:px-12 lg:px-24 border-t border-border">
      <motion.p
        className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Selected Work
      </motion.p>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="group flex items-center justify-between py-6 border-t border-border last:border-b cursor-pointer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-baseline gap-6">
              <span className="font-body text-[10px] text-muted-foreground">{project.year}</span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-light group-hover:italic transition-all duration-500">
                {project.name}
              </h3>
            </div>
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.category}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
