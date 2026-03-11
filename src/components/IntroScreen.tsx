import { motion, AnimatePresence } from "framer-motion";

interface IntroScreenProps {
  onComplete: () => void;
  isVisible: boolean;
}

const IntroScreen = ({ onComplete, isVisible }: IntroScreenProps) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center px-6">
            {/* Top line */}
            <motion.div
              className="w-16 h-px line-chrome mx-auto mb-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Studio name - cursive */}
            <motion.h1
              className="font-cursive italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wide text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Shariful's
            </motion.h1>

            <motion.p
              className="font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              Studio & Co.
            </motion.p>

            {/* Bottom line */}
            <motion.div
              className="w-16 h-px line-chrome mx-auto mt-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Enter text */}
            <motion.button
              className="mt-16 font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground cursor-pointer bg-transparent border-none hover:text-foreground transition-colors duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {}}
              whileHover={{ letterSpacing: "0.5em" }}
            >
              Enter
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
