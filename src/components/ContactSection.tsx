import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.p>

        <motion.h2
          className="font-cursive italic text-4xl sm:text-6xl md:text-7xl font-light text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Let's create together
        </motion.h2>

        <motion.p
          className="font-body text-sm text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to elevate your digital presence? We'd love to hear about your project.
        </motion.p>

        <motion.a
          href="mailto:sharifulstudio.corporate@gmail.com"
          className="inline-block font-body text-xs tracking-[0.3em] uppercase text-foreground border-b border-foreground pb-2 hover:text-muted-foreground hover:border-muted-foreground transition-colors duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          sharifulstudio.corporate@gmail.com
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
