import { motion } from "framer-motion";
import { Heart, HandHeart, CheckCircle2, ArrowRight } from "lucide-react";
import hero from "@/assets/kids-group-meal.jpg.asset.json";
import overlay1 from "@/assets/kid-gift.jpg.asset.json";
import overlay2 from "@/assets/slime-fun.jpg.asset.json";

const badges = [
  "Community Focused",
  "Serving Families",
  "Making Real Impact",
];

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      {/* Background image (video-ready container) */}
      <div className="absolute inset-0 -z-10">
        <img
          src={hero.url}
          alt="Children being served meals by Born To Give volunteers"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Floating particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[22%] h-3 w-3 rounded-full bg-sun/80 animate-float-slow" />
        <div className="absolute right-[14%] top-[30%] h-2 w-2 rounded-full bg-hope/80 animate-float-slow [animation-delay:1.2s]" />
        <div className="absolute left-[20%] bottom-[18%] h-2.5 w-2.5 rounded-full bg-trust/80 animate-float-slow [animation-delay:2.4s]" />
        <div className="absolute right-[22%] bottom-[26%] h-3 w-3 rounded-full bg-growth/80 animate-float-slow [animation-delay:3.1s]" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-32 pb-16 sm:px-6 lg:pt-40">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/90"
            >
              <span className="h-2 w-2 rounded-full bg-hope animate-pulse-ring" />
              Born To Give Foundation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-balance text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            >
              Together we can{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[oklch(0.86_0.16_90)] via-[oklch(0.78_0.17_55)] to-[oklch(0.72_0.11_235)] bg-clip-text text-transparent">
                  change lives
                </span>
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
            >
              Every act of kindness creates hope. Join us in providing food, essential
              resources, and life-changing support to children and families in need.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#donate"
                className="group inline-flex items-center gap-2 rounded-full gradient-hope px-7 py-4 text-base font-semibold text-hope-foreground shadow-2xl shadow-hope/40 transition hover:-translate-y-0.5"
              >
                <Heart className="h-5 w-5 fill-current" />
                Donate Now
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#involved"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 glass-dark px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <HandHeart className="h-5 w-5" />
                Become a Volunteer
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            >
              {badges.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-white/85">
                  <CheckCircle2 className="h-4 w-4 text-growth" />
                  {b}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Floating image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden h-[420px] lg:col-span-4 lg:block"
          >
            <div className="absolute right-0 top-4 h-56 w-44 overflow-hidden rounded-3xl border-4 border-white/70 shadow-2xl rotate-3 animate-float-slow">
              <img src={overlay1.url} alt="Child receiving gift" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-4 left-0 h-48 w-56 overflow-hidden rounded-3xl border-4 border-white/70 shadow-2xl -rotate-3 animate-float-slow [animation-delay:1.5s]">
              <img src={overlay2.url} alt="Volunteer playing with child" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 right-8 rounded-2xl glass px-4 py-3 shadow-xl">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Lives touched</div>
              <div className="text-2xl font-extrabold text-foreground">12,400+</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 hidden justify-center lg:flex">
          <a href="#mission" className="group inline-flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-white/70">
            Scroll
            <span className="relative h-8 w-5 rounded-full border border-white/50">
              <span className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-white/80 animate-bounce" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
