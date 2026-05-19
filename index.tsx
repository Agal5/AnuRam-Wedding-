import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Calendar, MapPin, Clock, Phone, Sparkles, Infinity as InfinityIcon } from "lucide-react";
import couple1 from "@/assets/IMG-20260518-WA0073.jpg";
import couple2 from "@/assets/IMG-20260518-WA0067.jpg";
import couple3 from "@/assets/IMG-20260518-WA0069.jpg";
import couple4 from "@/assets/IMG-20260518-WA0070.jpg";
import couple5 from "@/assets/IMG-20260518-WA0064.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ram Prasath & Anuvarsha — Wedding Invitation" },
      { name: "description", content: "Join us in celebrating the wedding of Ram Prasath & Anuvarsha on 7th June 2026 at RKM Convention Centre, Cuddalore." },
      { property: "og:title", content: "Ram Prasath weds Anuvarsha" },
      { property: "og:description", content: "07.06.2026 · RKM Convention Centre, Cuddalore" },
    ],
  }),
  component: Wedding,
});

function useCountdown(target: Date) {
  const [t, setT] = useState(() => target.getTime() - Date.now());
  useEffect(() => {
    const i = setInterval(() => setT(target.getTime() - Date.now()), 1000);
    return () => clearInterval(i);
  }, [target]);
  const d = Math.max(0, Math.floor(t / 86400000));
  const h = Math.max(0, Math.floor((t / 3600000) % 24));
  const m = Math.max(0, Math.floor((t / 60000) % 60));
  const s = Math.max(0, Math.floor((t / 1000) % 60));
  return { d, h, m, s };
}

function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 14 }).map((_, i) => (
        <Sparkles
          key={i}
          className="absolute text-rose/40 animate-float"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            width: 14 + (i % 4) * 6,
            height: 14 + (i % 4) * 6,
            animationDelay: `${(i % 6) * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}

function Wedding() {
  const wedding = new Date("2026-06-07T07:30:00+05:30");
  const { d, h, m, s } = useCountdown(wedding);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-blush">
        <Petals />
        <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-20 text-center md:pt-24 md:pb-28">
          <p className="font-script text-3xl md:text-4xl text-rose animate-fade-up">With blessings of Lord Venkateshwara</p>
          <div className="mt-6 flex items-center justify-center gap-3 text-primary animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="h-px w-12 bg-primary/40" />
            <Heart className="h-4 w-4 fill-primary" />
            <span className="text-xs uppercase tracking-[0.4em]">Wedding Invitation</span>
            <Heart className="h-4 w-4 fill-primary" />
            <span className="h-px w-12 bg-primary/40" />
          </div>

          <h1 className="mt-8 font-display text-5xl leading-tight text-foreground md:text-7xl lg:text-8xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Ram Prasath
            <span className="block my-2 flex justify-center">
              <InfinityIcon className="h-10 w-16 md:h-14 md:w-24 text-rose" strokeWidth={1.5} />
            </span>
            Anuvarsha
          </h1>

          <p className="mt-6 text-sm tracking-[0.3em] text-muted-foreground md:text-base animate-fade-up" style={{ animationDelay: "0.3s" }}>
            07 · 06 · 2026  ·  CUDDALORE
          </p>

          <div className="mt-12 grid grid-cols-4 gap-3 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[["Days", d], ["Hours", h], ["Minutes", m], ["Seconds", s]].map(([l, v]) => (
              <div key={l as string} className="rounded-2xl bg-card/80 backdrop-blur px-3 py-4 shadow-soft border border-border/60">
                <div className="font-display text-3xl md:text-4xl text-primary">{String(v).padStart(2, "0")}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUPLE */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="font-script text-rose text-3xl">the happy couple</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">Two souls, one journey</h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="relative">
            <img src={couple1} alt="Ram Prasath and Anuvarsha" className="rounded-3xl shadow-petal w-full object-cover aspect-[4/5]" />
            <div className="absolute -bottom-4 -right-4 hidden md:block h-24 w-24 rounded-full bg-gradient-rose opacity-40 blur-2xl" />
          </div>
          <div className="space-y-8">
            <div className="rounded-2xl bg-card p-6 shadow-soft border border-border/50">
              <p className="font-script text-rose text-2xl">The Groom</p>
              <h3 className="font-display text-3xl mt-1">K. Ram Prasath</h3>
              <p className="text-sm text-muted-foreground mt-1">B.E.</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Son of Thiru. Ra. Jothi (alias) Karthikeyan &amp; Tmt. K. Radha,<br />
                Vadakku Sathipattu.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-soft border border-border/50">
              <p className="font-script text-rose text-2xl">The Bride</p>
              <h3 className="font-display text-3xl mt-1">P. Anuvarsha</h3>
              <p className="text-sm text-muted-foreground mt-1">B.Tech.</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Daughter of Thiru. Aathi. Perumal (DME) &amp; Tmt. P. Geetha (B.Sc., B.Ed.),<br />
                Vilavarayanatham, Cuddalore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-gradient-blush py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="font-script text-rose text-3xl">save the dates</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">Our Celebrations</h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Reception */}
            <article className="rounded-3xl bg-card p-8 shadow-petal border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-rose opacity-20 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1 text-xs uppercase tracking-widest text-primary">
                  <Sparkles className="h-3 w-3" /> Reception
                </div>
                <h3 className="font-display text-3xl md:text-4xl mt-4">Manamakkal Varaverpu</h3>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-3"><Calendar className="h-4 w-4 text-rose" /> Saturday, 06 June 2026</div>
                  <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-rose" /> 6:00 PM onwards</div>
                  <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-rose mt-0.5" /> RKM Convention Centre, Cuddalore</div>
                </div>
              </div>
            </article>

            {/* Wedding */}
            <article className="rounded-3xl bg-gradient-rose p-8 shadow-petal text-primary-foreground relative overflow-hidden">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1 text-xs uppercase tracking-widest">
                  <Heart className="h-3 w-3 fill-current" /> Wedding
                </div>
                <h3 className="font-display text-3xl md:text-4xl mt-4">Subha Muhurtham</h3>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-3"><Calendar className="h-4 w-4" /> Sunday, 07 June 2026</div>
                  <div className="flex items-center gap-3"><Clock className="h-4 w-4" /> 7:30 AM – 9:30 AM</div>
                  <div className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5" /> RKM Convention Centre, Cuddalore</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="font-script text-rose text-3xl">our moments</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">A glimpse of love</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[couple2, couple3, couple5, couple4].map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-3xl shadow-soft ${i % 2 === 1 ? "md:translate-y-8" : ""}`}>
              <img src={src} alt="" className="h-full w-full object-cover aspect-[3/4] hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* VENUE */}
      <section className="bg-gradient-blush py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-script text-rose text-3xl">the venue</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">RKM Convention Centre</h2>
          <p className="mt-3 text-muted-foreground">Cuddalore, Tamil Nadu</p>
          <a
            href="https://maps.app.goo.gl/F12ZAkUovSFBqGiMA?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <MapPin className="h-4 w-4" /> View on Google Maps
          </a>
          <div className="mt-8 overflow-hidden rounded-3xl shadow-petal border border-border/50">
            <iframe
              title="RKM Convention Centre"
              src="https://www.google.com/maps?q=RKM+Convention+Centre+Cuddalore&output=embed"
              className="w-full h-[360px] md:h-[420px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* RSVP / CONTACT */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <p className="font-script text-rose text-3xl">with love</p>
        <h2 className="font-display text-4xl md:text-5xl mt-2">Your presence is our blessing</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          We warmly invite you to share in the joy of this beautiful new beginning.
          Your love and blessings mean the world to us as we step into this lifelong journey together.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-xl mx-auto">
          <a href="tel:+918973850570" className="flex flex-col items-center gap-2 rounded-2xl bg-card border border-border/50 p-6 shadow-soft hover:shadow-petal transition-shadow">
            <span className="font-script text-rose text-xl">The Groom</span>
            <span className="font-display text-xl">K. Ram Prasath</span>
            <span className="inline-flex items-center gap-2 text-primary"><Phone className="h-4 w-4" /> +91 89738 50570</span>
          </a>
          <a href="tel:+916381067053" className="flex flex-col items-center gap-2 rounded-2xl bg-card border border-border/50 p-6 shadow-soft hover:shadow-petal transition-shadow">
            <span className="font-script text-rose text-xl">The Bride</span>
            <span className="font-display text-xl">P. Anuvarsha</span>
            <span className="inline-flex items-center gap-2 text-primary"><Phone className="h-4 w-4" /> +91 63810 67053</span>
          </a>
        </div>
      </section>

      <footer className="bg-gradient-rose text-primary-foreground py-10 text-center">
        <p className="font-script text-3xl">Ram Prasath &amp; Anuvarsha</p>
        <p className="mt-2 text-xs tracking-[0.4em] uppercase opacity-80">07 · 06 · 2026  ·  Cuddalore</p>
      </footer>
    </main>
  );
}
