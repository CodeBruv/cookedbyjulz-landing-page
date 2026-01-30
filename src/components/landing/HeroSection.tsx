import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-lavender-400/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-lavender-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-plum-500/10 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 shadow-soft mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-plum-500" />
            <span className="text-sm font-medium text-foreground">Your Voice, Amplified</span>
          </div> */}

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6 animate-fade-up-delay-1">
            Stay Consistent Online
            <span className="block text-gradient text-[0.7em] md:text-[0.75em]">Without Re-Deciding Everything Every Time You Post</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up-delay-2">
           A personalized content system built on clarity, planning, and repeatability so your hooks, topics and captions are decided once and your content stays consistent without the mental load.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            {/* <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#get-started">
                Shop Digital Products
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button> */}
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#who-we-help">Learn More</a>
            </Button>
          </div>

          {/* Trust indicator */}
          <p className="mt-12 text-sm text-muted-foreground animate-fade-up-delay-3">
            Trusted by creators, professionals, and brands who value authenticity
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
