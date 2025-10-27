import { Button } from "@/components/ui/button";
import "./hero-animations.css";

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

  return (
    <div className={className}>
      {words.map((word, idx) => {
        const isHighlighted =
          highlightWord &&
          word.toUpperCase().includes(highlightWord.toUpperCase());

        return (
          <span
            key={idx}
            className={`inline-block mr-2 ${isHighlighted ? "text-yellow-400 font-bold" : ""}`}
            style={{
              animationName: "fadeUp",
              animationDuration: "0.8s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              animationIterationCount: 1,
              animationDelay: `${delay * 0.1 + idx * 0.05}s`,
              opacity: 0,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
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
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Background decorative yellow shapes with CSS animation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow-400 rounded-full opacity-5 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* Logo/Brand area */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">C</span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <AnimatedText
                  text={heading}
                  delay={0.5}
                  highlightWord="CAC"
                  className="text-white"
                />
              </h1>
            </div>

            {/* Description */}
            <div className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
                <AnimatedText
                  text={description}
                  delay={1}
                  className="text-gray-300"
                />
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <div className="w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                <Button
                  asChild
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base sm:text-lg px-8 py-6 rounded-lg h-auto w-full sm:w-auto transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/50"
                >
                  <a href={buttonHref}>{"Agendar Análise Gratuita"}</a>
                </Button>
              </div>
            </div>

            {/* Social proof - users section */}
            <div
              className="pt-6 animate-fade-up"
              style={{ animationDelay: "1s" }}
            >
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
                  <span className="text-sm text-gray-400">
                    Deliveries acelerados
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual area with animated gradient */}
          <div
            className="relative h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-yellow-400/5 rounded-2xl animate-pulse" />
            <div className="relative flex items-center justify-center text-center px-6">
              <div className="space-y-4 animate-float">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 backdrop-blur-sm hover:bg-yellow-400/20 transition-colors duration-300">
                    <div className="text-2xl font-bold text-yellow-400">
                      +230%
                    </div>
                    <div className="text-xs text-gray-300">Crescimento</div>
                  </div>
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 backdrop-blur-sm hover:bg-yellow-400/20 transition-colors duration-300">
                    <div className="text-2xl font-bold text-yellow-400">
                      5.2k
                    </div>
                    <div className="text-xs text-gray-300">Clientes</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 backdrop-blur-sm hover:bg-yellow-400/20 transition-colors duration-300">
                    <div className="text-2xl font-bold text-yellow-400">
                      7.2k
                    </div>
                    <div className="text-xs text-gray-300">Análises</div>
                  </div>
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 backdrop-blur-sm hover:bg-yellow-400/20 transition-colors duration-300">
                    <div className="text-2xl font-bold text-yellow-400">
                      9.8k
                    </div>
                    <div className="text-xs text-gray-300">Resultados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
