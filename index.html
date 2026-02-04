import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useRef, useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reference to the hidden Zoho form
  const zohoFormRef = useRef<HTMLFormElement>(null);
  const zohoEmailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    // Inject email into Zoho hidden form
    if (zohoEmailRef.current && zohoFormRef.current) {
      zohoEmailRef.current.value = email;
      zohoFormRef.current.submit();
    }

    // Maintain YOUR UI behavior
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-medium text-plum-500 uppercase tracking-wider">
            Stay Connected
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Get Updates, Drops & Insights
          </h2>

          <p className="mt-4 text-lg text-muted-foreground mb-8">
            Join the community. Be first to know about new products and content tips.
          </p>

          {isSubmitted ? (
            <div className="p-6 rounded-2xl bg-lavender-200 text-foreground">
              <p className="font-medium">Welcome to the community! 🎉</p>
              <p className="text-sm text-muted-foreground mt-2">
                Check your inbox for a confirmation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 bg-card border-border rounded-xl focus:ring-2 focus:ring-plum-500 focus:border-transparent"
              />

              <Button variant="hero" size="lg" type="submit" className="gap-2">
                Subscribe
                <Send className="w-4 h-4" />
              </Button>
            </form>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* ===================== */}
      {/* ZOHO SILENT INTEGRATION */}
      {/* ===================== */}

      {/* Hidden iframe to swallow Zoho response */}
      <iframe
        name="zoho_hidden_iframe"
        style={{ display: "none" }}
        title="Zoho Hidden Iframe"
      />

      {/* Hidden Zoho RAW HTML form (scriptless) */}
      <form
        ref={zohoFormRef}
        method="POST"
        action="https://zgpp-zppg.maillist-manage.com/weboptin.zc"
        target="zoho_hidden_iframe"
        style={{ display: "none" }}
      >
        <input
          ref={zohoEmailRef}
          type="email"
          name="CONTACT_EMAIL"
        />

        <input type="hidden" name="submitType" value="optinCustomView" />
        <input type="hidden" name="formType" value="QuickForm" />
        <input type="hidden" name="zx" value="13674dbc8" />
        <input type="hidden" name="zcvers" value="3.0" />
        <input type="hidden" name="mode" value="OptinCreateView" />
        <input type="hidden" name="zcld" value="1161fdb605ada5d4a" />
        <input type="hidden" name="zctd" value="1161fdb605ada5b91" />
        <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
        <input
          type="hidden"
          name="zc_formIx"
          value="3z9bc28c37612ca125881cf5dc35aeb6a4b93309dac2f4ad4f4cba5b0ef3d95799"
        />
        <input type="hidden" name="scriptless" value="yes" />
      </form>
    </section>
  );
};

export default NewsletterSection;
