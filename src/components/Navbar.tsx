import { motion } from "framer-motion";

const Navbar = () => {
  const links = ["Work", "Services", "About", "Contact"];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-12 py-6 bg-background/80 backdrop-blur-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-cursive italic text-lg sm:text-xl text-foreground">
        Shariful's
      </span>

      <div className="hidden sm:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 sm:hidden"
      >
        Menu
      </a>
    </motion.nav>
  );
};

export default Navbar;
