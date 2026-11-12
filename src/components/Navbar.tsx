import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = ["Work", "Services", "About", "Testimonials", "FAQ", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="flex items-center justify-between px-6 sm:px-12 pt-6 pb-4 max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-cursive italic text-xl sm:text-2xl lg:text-3xl tracking-tight text-foreground leading-none"
          >
            Shariful's <span className="text-muted-foreground">Studio &amp; Co.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(link.toLowerCase());
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="group flex items-center font-body text-[10px] tracking-[0.25em] uppercase text-foreground hover:text-muted-foreground transition-colors duration-500"
              >
                {link}
                {link === "Contact" && (
                  <span className="ml-2 w-1.5 h-1.5 rounded-full bg-foreground group-hover:bg-muted-foreground transition-colors duration-500" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
          >
            <span className="block w-full h-px bg-foreground" />
            <span className="block w-full h-px bg-foreground" />
          </button>
        </nav>

        {/* Chrome divider with subtle shine */}
        <div className="relative max-w-7xl mx-auto h-px">
          <div className="absolute inset-0 h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          <div className="absolute inset-0 mx-auto w-1/3 h-px bg-gradient-to-r from-transparent via-background to-transparent" />
        </div>
      </motion.div>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 font-body text-[11px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Close
            </button>

            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById(link.toLowerCase());
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 500);
                  }}
                  className="font-display text-3xl font-light text-foreground hover:text-muted-foreground transition-colors duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>

            <motion.p
              className="absolute bottom-8 font-body text-[9px] tracking-[0.3em] uppercase text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Operating Worldwide
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
