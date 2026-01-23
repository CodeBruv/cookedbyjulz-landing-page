import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import WhoWeHelpSection from "@/components/landing/WhoWeHelpSection";
import ProblemSection from "@/components/landing/ProblemSection";
import DifferenceSection from "@/components/landing/DifferenceSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhoWeHelpSection />
        <ProblemSection />
        <DifferenceSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
