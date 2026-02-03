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
    content:[
      "The personalized content plan gave me a strong sense of structure and accountability. Knowing exactly what to post, how often, and when to post made showing up feel much easier.",
      "Having a clear template to follow removed the stress of overthinking. I didn’t have to worry about timing or guessing what would work, the system already accounted for that, and I could see it reaching the right audience.",
      "The clarity around the number of posts each day was especially helpful. It became a simple routine: wake up and follow through.",
      "Even though I’m still working on improving consistency on our business page, the impact is already clear. I can see a noticeable difference on my dashboard, and overall, the plan helped me show up more consistently and at the right time.",
    ],
    author: "Fanapy’s Kitchen",
    role: "Restaurant Owner",
    rating: 5,
  },
  {
    content: [
      "Before CookedByJulz, I struggled with consistency. I woke up daily trying to figure out what to post, with no clear direction. I was just posting anything.",
      "With the personalized content plan, everything changed. I now plan my posts ahead, wake up, and post with ease. The structure brought clarity, reduced stress, and made consistency feel natural.",
      "The hooks are premium, the direction is clear, and the results are showing. I recorded more orders in January than I expected, and I’m confident heading into February.",
      "This content plan has been a true blessing to my brand.",
    ],
    author: "Ruthie's Bakes",
    role: "Pastry Chef",
    rating: 5,
  },
  {
    content:[
      "The CookedByJulz content plan was very helpful. It gave me the structure I needed to show up consistently, even on days I didn’t feel motivated.",
      "While I believe my TikTok account may be shadow-banned, the plan still helped drive visibility to my profile and attracted more people to engage with my content. That showed me the content itself was clear and interesting.",
      "Overall, the system helped me stay consistent, receive positive feedback, and feel confident that I’m on the right track.",
    ],
    author: "Big Nicky",
    role: "Enterprenur",
    rating: 5,
  },
  {
    content:
      "The content plan gave me much-needed clarity. Having structure made it easier to stay consistent without overthinking. Engagement is improving, and more importantly, I now feel confident that I’m building in the right direction. The system makes posting feel simple, intentional, and achievable.",
    author: "H-Glitters Couture",
    role: "Fashion Designer",
    rating: 4,
  },
  {
    content:[
      "The CookedByJulz content plan helped me narrow down my content ideas and gave me a clear direction to work with. Nothing felt unclear, as I was able to build my research and content around the structure provided.",
      "Most importantly, it made showing up feel easier. While my brand leans more toward a professional tone and I’m still navigating how to adapt certain ideas with a small team, the plan made a noticeable impact.",
      "It provided clarity, structure, and a sense of direction that made consistency more achievable.",
      ],
    author: "Ski Logistics",
    role: "Logistics Company",
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
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.author}-${index}`}
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

              {/* COMPACT INLINE QUOTE — NO EXTRA SPACING */}
              <p className="text-background leading-tight mb-6 whitespace-pre-line">
                “
                {Array.isArray(testimonial.content)
                  ? testimonial.content.join("\n")
                  : testimonial.link
                  ? testimonial.content
                  : testimonial.content}
                ”
              </p>

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
