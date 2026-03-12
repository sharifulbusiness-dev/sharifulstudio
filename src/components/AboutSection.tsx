import { motion } from "framer-motion";

const AboutSection = () => {
  const values = [
    { label: "Precision", desc: "Every detail is intentional" },
    { label: "Elegance", desc: "Beauty in simplicity" },
    { label: "Innovation", desc: "Pushing boundaries forward" },
  ];

  return (
    <section id="about" className="py-32 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.p
              className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.p>

            <motion.h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Where{" "}
              <span className="italic font-cursive">artistry</span>
              <br />
              meets strategy
            </motion.h2>

            <motion.div
              className="w-12 h-px line-chrome mt-10 mb-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <motion.p
              className="font-body text-sm text-muted-foreground leading-[1.9] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Founded with a singular vision to elevate the digital landscape 
              through uncompromising design. Shariful's Studio & Co. is where 
              creative ambition meets meticulous execution.
            </motion.p>

            <motion.p
              className="font-body text-sm text-muted-foreground leading-[1.9]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From London to Tokyo, New York to Dubai — we serve clients who 
              understand that exceptional design isn't a luxury. It's a necessity 
              for brands that refuse to blend in.
            </motion.p>
          </div>

          <div className="flex flex-col justify-between">
            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "12+", label: "Countries Served" },
                { num: "5★", label: "Client Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-2xl sm:text-3xl font-light">{stat.num}</p>
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Values */}
            <div className="space-y-0">
              {values.map((value, i) => (
                <motion.div
                  key={value.label}
                  className="flex items-center justify-between py-5 border-t border-border last:border-b"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <span className="font-display text-lg font-light">{value.label}</span>
                  <span className="font-body text-[10px] tracking-[0.2em] text-muted-foreground">
                    {value.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
