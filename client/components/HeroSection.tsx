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
    <section
      className={cn(
        "relative min-h-screen overflow-hidden flex items-center",
        className,
      )}
      style={{
        backgroundImage:
          'url("/Minimal Modern You Are Enough Quote Desktop Wallpaper.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background decorative yellow shapes */}
      <div className="absolute top-1/4 right-0 -translate-y-1/4 w-96 h-96 bg-primary rounded-full opacity-100 blur-2xl -z-10" />
      <div className="absolute bottom-0 right-12 w-72 h-96 bg-primary rounded-full opacity-80 blur-3xl -z-10" />

      {/* Content container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 z-10 w-[750px]">
            {/* Logo/Brand - image placeholder */}
            <div className="flex items-center">
              <img src="/Logo.png" alt="Logo" className="h-auto w-[180px] -ml-[30px] -mb-[70px]" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {heading}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-8 py-6 rounded-lg h-auto w-full sm:w-auto"
              >
                <a href={buttonHref}>{buttonText}</a>
              </Button>
            </div>
          </div>

          {/* Right column - Visual area (transparent placeholder) */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] -order-1 lg:order-1 w-[50px]" />
        </div>
      </div>
    </section>
  );
}
