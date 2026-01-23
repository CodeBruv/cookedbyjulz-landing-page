import { AlertCircle, Volume2, Battery, Brain } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Inconsistent Posting",
    description: "You show up for a week, then disappear for a month. Your audience forgets you exist.",
  },
  {
    icon: Volume2,
    title: "Losing Your Voice",
    description: "Templates and AI tools make you sound like everyone else. Generic. Forgettable.",
  },
  {
    icon: Battery,
    title: "Content Burnout",
    description: "Creating content feels exhausting. You dread opening the app. The spark is gone.",
  },
  {
    icon: Brain,
    title: "Overthinking Everything",
    description: "You spend hours on one post. Perfectionism kills your momentum before you start.",
  },
];

const ProblemSection = () => {
  return (
    <section id="the-problem" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-plum-500 uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Sound Familiar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These are the struggles we hear every day. You're not alone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative p-6 rounded-2xl bg-lavender-200/50 border border-lavender-300/50 hover:bg-lavender-200 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-plum-500/10 flex items-center justify-center mb-4 group-hover:bg-plum-500/20 transition-colors">
                <problem.icon className="w-5 h-5 text-plum-600" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground font-medium">
            It's not a "you" problem. It's a <span className="text-gradient">system</span> problem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
