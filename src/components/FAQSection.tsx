import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is your design process?",
    answer: "We follow a refined four-phase process: Discovery, where we immerse ourselves in your brand and vision; Strategy, where we define the architecture and creative direction; Design & Development, where we craft every detail with precision; and Launch & Refine, where we ensure a flawless delivery and ongoing optimization.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on scope and complexity. A focused brand website typically takes 4 to 6 weeks, while a comprehensive digital platform may require 8 to 12 weeks. We believe in taking the time needed to deliver exceptional quality, never rushing the craft.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely. We operate worldwide, with clients spanning London, Dubai, Tokyo, New York, and beyond. Our workflow is designed for seamless remote collaboration across any timezone, ensuring the same premium experience regardless of location.",
  },
  {
    question: "What makes Shariful's Studio different?",
    answer: "We merge the precision of Swiss design with contemporary digital innovation. Every project receives our full creative attention — no templates, no shortcuts. We design experiences that are not only visually striking but strategically sound, ensuring your investment delivers lasting impact.",
  },
  {
    question: "What are your pricing structures?",
    answer: "Our pricing is project-based, tailored to the scope and requirements of each engagement. We offer transparent proposals after an initial consultation. We believe premium design should be an investment that pays for itself through elevated brand perception and measurable results.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 sm:px-12 lg:px-24 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked
        </motion.p>

        <motion.h2
          className="font-display text-3xl sm:text-4xl font-light text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Questions & <span className="font-cursive italic">Answers</span>
        </motion.h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-t border-border last:border-b"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-display text-base sm:text-lg font-light group-hover:italic transition-all duration-300">
                  {faq.question}
                </span>
                <motion.span
                  className="font-body text-sm text-muted-foreground ml-4 flex-shrink-0"
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm text-muted-foreground leading-[1.8] pb-6 pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
