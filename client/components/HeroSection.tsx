import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
  highlightWord?: string;
}

const AnimatedText = ({
  text,
  delay = 0,
  className = "",
  highlightWord,
}: AnimatedTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * 0.1 },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, idx) => {
        const isHighlighted =
          highlightWord &&
          word.toUpperCase().includes(highlightWord.toUpperCase());

        return (
          <motion.span key={idx} variants={child} className="inline-block mr-2">
            <span className={isHighlighted ? "text-yellow-400 font-bold" : ""}>
              {word}
            </span>
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export interface HeroSectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function HeroSection({
  heading = "Acelere o faturamento do seu delivery com o Método CAC",
  description = "Agende uma análise gratuita e descubra como a aplicação do nosso método pode levar o seu delivery para o próximo nível.",
  buttonText = "Agendar Análise Gratuita",
  buttonHref = "#",
  className,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background decorative yellow shapes with blur */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow-400 rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            className="space-y-8 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Logo/Brand area */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">C</span>
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <AnimatedText
                  text={heading}
                  delay={1}
                  highlightWord="CAC"
                  className="text-white"
                />
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                <AnimatedText
                  text={description}
                  delay={2}
                  className="text-gray-300"
                />
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base sm:text-lg px-8 py-6 rounded-lg h-auto w-full sm:w-auto transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/50"
                >
                  <a href={buttonHref}>{buttonText}</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social proof - users section */}
            <motion.div variants={itemVariants} className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-black flex items-center justify-center text-black font-bold text-sm">
                    👤
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-white font-bold text-sm">
                    👤
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-white font-bold text-sm">
                    👤
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">+500</span>
                  <span className="text-sm text-gray-400">Deliveries acelerados</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Visual area with animated gradient */}
          <motion.div
            className="relative h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-yellow-400/5 rounded-2xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative flex items-center justify-center text-center px-6"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-400">+230%</div>
                    <div className="text-xs text-gray-300">Crescimento</div>
                  </div>
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-400">5.2k</div>
                    <div className="text-xs text-gray-300">Clientes</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-400">7.2k</div>
                    <div className="text-xs text-gray-300">Análises</div>
                  </div>
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-yellow-400">9.8k</div>
                    <div className="text-xs text-gray-300">Resultados</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
