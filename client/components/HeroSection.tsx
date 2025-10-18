import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function HeroSection({
  heading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  buttonText = "AGENDAR AGORA",
  buttonHref = "#",
  className,
}: HeroSectionProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen bg-black text-white overflow-hidden",
        className
      )}
    >
      {/* Background decorative yellow shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-20 h-screen flex items-center">
        {/* Left column - Text content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Logo/Brand - image placeholder */}
          <div className="mb-8 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center opacity-0"></div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            {heading}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
          <div className="flex">
            <Button
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg rounded-lg transition-colors"
            >
              <a href={buttonHref}>{buttonText}</a>
            </Button>
          </div>
        </div>

        {/* Right column - Visual area (transparent placeholder) */}
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          <div className="w-full h-96 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-2xl opacity-10 blur-xl"></div>
        </div>
      </div>
    </div>
  );
}
