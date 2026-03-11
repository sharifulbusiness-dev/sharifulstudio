import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="py-12 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-cursive italic text-lg text-foreground">
          Shariful's Studio & Co.
        </span>

        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} — All rights reserved
        </p>

        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          Operating Worldwide
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
