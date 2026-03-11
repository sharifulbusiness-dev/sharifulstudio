import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <motion.p
            className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About
          </motion.p>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Design is not
            <br />
            what it{" "}
            <span className="italic font-cursive">looks</span> like.
            <br />
            Design is how
            <br />
            it <span className="italic font-cursive">works</span>.
          </motion.h2>
        </div>

        <div className="flex flex-col justify-center">
          <motion.p
            className="font-body text-sm text-muted-foreground leading-[1.8] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shariful's Studio & Co. is a globally operating web design studio 
            dedicated to crafting refined digital experiences. We believe in the 
            power of minimalism — where every pixel serves a purpose and every 
            interaction tells a story.
          </motion.p>

          <motion.p
            className="font-body text-sm text-muted-foreground leading-[1.8] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Working with clients from London to Tokyo, New York to Dubai, we bring 
            a global perspective to every project. Our approach merges timeless 
            design principles with cutting-edge technology.
          </motion.p>

          <motion.div
            className="flex gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <p className="font-display text-3xl font-light">50+</p>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Projects</p>
            </div>
            <div>
              <p className="font-display text-3xl font-light">12+</p>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Countries</p>
            </div>
            <div>
              <p className="font-display text-3xl font-light">100%</p>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Passion</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
