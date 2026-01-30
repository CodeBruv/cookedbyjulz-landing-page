import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Facebook } from "lucide-react";

// Custom TikTok icon since lucide doesn't have one
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
    { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
    // { icon: TikTokIcon, href: "https://tiktok.com/", label: "TikTok" },
  ];

  const quickLinks = [
    { href: "#who-we-help", label: "Who We Help" },
    { href: "#the-problem", label: "The Problem" },
    { href: "#difference", label: "What's Different" },
    { href: "#reviews", label: "Reviews" },
  ];

  return (
    <footer id="get-started" className="py-16 md:py-20 bg-plum-950 text-lavender-200">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-semibold text-lavender-100 mb-4">
              CookedByJulz
            </h3>
            <p className="text-lavender-400 max-w-sm mb-6 leading-relaxed">
              A personalized content system built for those who want to stay consistent online 
              without losing their authentic voice.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#">Shop Digital Products</a>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lavender-100 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-lavender-400 hover:text-lavender-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lavender-100 mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-plum-800 flex items-center justify-center text-lavender-300 hover:bg-plum-700 hover:text-lavender-100 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-plum-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-lavender-500">
            © {new Date().getFullYear()} CookedByJulz. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-lavender-500 hover:text-lavender-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-lavender-500 hover:text-lavender-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
