import { Users, Briefcase, Building } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Individuals",
    description: "Creators, coaches, and professionals building their personal brand online.",
    examples: ["Content creators", "Coaches & consultants", "Freelancers"],
  },
  {
    icon: Briefcase,
    title: "Small Businesses",
    description: "Teams that need consistent messaging without hiring a full content team.",
    examples: ["Startups", "Local businesses", "Service providers"],
  },
  {
    icon: Building,
    title: "Brands",
    description: "Organizations that want clarity, consistency, and a voice that connects.",
    examples: ["E-commerce brands", "Agencies", "Growing companies"],
  },
];

const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-plum-500 uppercase tracking-wider">
            Who We Help
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Built for People Who Care About Their Voice
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're an individual creator or a growing brand, we help you show up consistently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group p-8 rounded-2xl bg-gradient-card shadow-soft hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-lavender-200 flex items-center justify-center mb-6 group-hover:bg-lavender-300 transition-colors">
                <audience.icon className="w-6 h-6 text-plum-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {audience.description}
              </p>
              <ul className="space-y-2">
                {audience.examples.map((example) => (
                  <li key={example} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-plum-500" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
