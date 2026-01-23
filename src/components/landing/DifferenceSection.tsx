import { Heart, Mic, Clock, Layers } from "lucide-react";

const differences = [
  {
    icon: Heart,
    title: "Personalized, Not Templated",
    description: "We don't give you cookie-cutter content. Everything is built around your unique voice, values, and goals.",
  },
  {
    icon: Mic,
    title: "Human, Not Automated",
    description: "Our system ensures your content sounds like you wrote it — because the foundation comes from you.",
  },
  {
    icon: Clock,
    title: "Built for Consistency",
    description: "This isn't a one-time fix. It's a sustainable system designed for long-term, stress-free content creation.",
  },
  {
    icon: Layers,
    title: "Simple & Flexible",
    description: "No complicated frameworks or overwhelming processes. Just a clear, repeatable system that adapts to your life.",
  },
];

const DifferenceSection = () => {
  return (
    <section id="difference" className="py-20 md:py-28 bg-plum-900 text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-lavender-400 uppercase tracking-wider">
            What Makes Us Different
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold">
            This Isn't Another Content Template
          </h2>
          <p className="mt-4 text-lg text-lavender-300">
            We built something that actually works for real people with real lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differences.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-5 p-6 rounded-2xl bg-plum-800/50 border border-plum-700/50 hover:bg-plum-800 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-lavender-200 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-plum-700" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-lavender-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
