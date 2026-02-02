import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "CookedByJulz completely changed how I approach content. Instead of thinking from scratch every time, I now have clear direction, defined topics, and a repeatable structure. I finally sound like myself and I’m consistent without forcing it.",
    link: "https://www.facebook.com/share/p/184v2HEyJP/",
    author: "Code Bruv",
    role: "Software Engineer",
    rating: 5,
  },
  {
    content:
      "I was skeptical at first, but this isn't like other systems. It's genuinely personalized and so easy to follow. My engagement has doubled.",
    author: "H-Glitters Couture",
    role: "Fashion Designer",
    rating: 4,
  },
  {
    content:
      "As a small business owner, I don't have time to overthink content. This system gave me clarity and confidence. Worth every penny.",
    author: "Ruthie's Bakes & Chops",
    role: "Pastry Chef",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground">
            What People Are Saying
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real results from real people who finally found their voice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-2xl bg-plum-500 shadow-soft transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-background opacity-40" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-background text-background"
                  />
                ))}
              </div>

              {testimonial.link ? (
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background leading-relaxed mb-6 block hover:underline"
                >
                  “{testimonial.content}”
                </a>
              ) : (
                <p className="text-background leading-relaxed mb-6">
                  “{testimonial.content}”
                </p>
              )}

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <span className="text-sm font-semibold text-plum-500">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <div>
                  <p className="font-medium text-background">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-background opacity-70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
