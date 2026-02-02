import { Heart, Mic, Clock, Layers } from "lucide-react";

const differences = [
  {
    icon: Heart,
    title: "Personalized Planning, Not Generic Templates",
    description: "Your content isn’t built from one-size-fits-all templates. We create a personalized planning system based on your brand voice, goals, and audience so your topics, hooks, and captions actually fit you.",
  },
  {
    icon: Mic,
    title: "Clarity-Driven, Not auto-Generated",
    description: "This isn’t AI spitting out random captions. Your content comes from clear decisions made upfront so every hook, caption, and topic sounds intentional, aligned, and human.",
  },
  {
    icon: Clock,
    title: "Built for Repeatability",
    description: "This isn’t a one-time content fix. It’s a repeatable planning system that helps you stay consistent without starting from scratch every time you post. Consistency becomes a result of clarity not effort.",
  },
  {
    icon: Layers,
    title: "Structured, Yet Flexible",
    description: "No overwhelming frameworks or rigid rules. Just a clear planning system that adapts to your schedule, supports your workflow, and makes creating content feel lighter over time.",
  },
];

const DifferenceSection = () => {
  return (
    <section id="difference" className="py-20 md:py-28 bg-plum-900 text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold">
            This Isn't Another Content Template
          </h2>
          <p className="mt-4 text-lg text-lavender-300">
            We've built a planning-first content system designed to remove guesswork, reduce mental load, and make consistency repeatable.
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
