import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface IntroScreenProps {
  onComplete: () => void;
  onEnter: () => void;
  isVisible: boolean;
}

const IntroScreen = ({ onComplete, onEnter, isVisible }: IntroScreenProps) => {
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
              className="font-ballet text-6xl sm:text-8xl md:text-9xl font-normal tracking-normal text-foreground"
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
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                variant="ghost"
                onClick={onEnter}
                className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors duration-500"
              >
                Enter
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
