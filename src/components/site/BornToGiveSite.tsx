import { motion } from "framer-motion";
import {
  Utensils, Home, GraduationCap, Users, HeartHandshake, Sparkles,
  Calendar, MapPin, Mail, Phone, Facebook, Instagram, Youtube,
  Handshake, Gift, Megaphone, Building2, Trophy, ShieldCheck,
  Globe2, Leaf, HandCoins, ArrowRight, ChevronDown, Search, Send,
  Star, Quote, Heart,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { SectionHeader } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";

import logo from "@/assets/logo.png.asset.json";
import missionImg from "@/assets/thanksgiving.jpg.asset.json";
import volunteerGive from "@/assets/volunteer-give.jpg.asset.json";
import kidsMeal from "@/assets/kids-meal.png.asset.json";
import kidsGroup from "@/assets/kids-group.jpg.asset.json";
import familyFood from "@/assets/family-food.jpg.asset.json";
import toyDrive from "@/assets/toy-drive.jpg.asset.json";
import kidGift from "@/assets/kid-gift.jpg.asset.json";
import slimeFun from "@/assets/slime-fun.jpg.asset.json";
import kidsGroupMeal from "@/assets/kids-group-meal.jpg.asset.json";

/* ---------------- Mission ---------------- */
function Mission() {
  return (
    <section id="mission" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={missionImg.url} alt="Family gathered around Thanksgiving meal" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-56 rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-black/5 sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full gradient-hope text-hope-foreground">
                <Heart className="h-5 w-5 fill-current" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Since</div>
                <div className="text-xl font-extrabold">2019</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Loving our neighbors, one family at a time.
            </p>
          </div>
          <div className="absolute -left-4 -top-6 hidden h-24 w-24 rotate-6 rounded-2xl gradient-warm shadow-xl sm:block" aria-hidden />
        </motion.div>

        <div>
          <SectionHeader
            eyebrow="Our Mission"
            title={<>Love through action. <span className="text-hope">Hope</span> through community.</>}
            intro="Born To Give Foundation exists to walk alongside underserved children and low-income families — meeting real needs with dignity, warmth, and steady presence. Food on the table. Supplies for school. Gifts for the holidays. And people who care."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              { icon: Utensils, title: "Nourishing Families", text: "Weekly food support so no child goes to bed hungry." },
              { icon: GraduationCap, title: "Empowering Kids", text: "School supplies, mentorship, and joyful learning." },
              { icon: HeartHandshake, title: "Standing Together", text: "Neighbors helping neighbors through every season." },
              { icon: Sparkles, title: "Restoring Hope", text: "Small moments of kindness that change everything." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-hope/10 text-hope">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold">{f.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Impact ---------------- */
function Impact() {
  const stats = [
    { to: 48200, suffix: "+", label: "Meals served" },
    { to: 3400, suffix: "+", label: "Families assisted" },
    { to: 120, suffix: "+", label: "Community events" },
    { to: 8600, suffix: "+", label: "Children supported" },
    { to: 15200, suffix: "+", label: "Volunteer hours" },
    { to: 96, suffix: "%", label: "Goes to programs" },
  ];
  return (
    <section id="impact" className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
      <div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          "radial-gradient(circle at 20% 10%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
        backgroundSize: "40px 40px, 60px 60px",
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          align="center"
          eyebrow="Our Impact"
          title={<span className="text-white">Real numbers. <span className="text-[oklch(0.86_0.16_90)]">Real lives.</span></span>}
          intro={<span className="text-white/75">A snapshot of what your generosity has made possible across our community and beyond.</span>}
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="bg-gradient-to-r from-[oklch(0.86_0.16_90)] via-[oklch(0.78_0.17_55)] to-[oklch(0.72_0.11_235)] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Programs ---------------- */
function Programs() {
  const programs = [
    {
      icon: Utensils,
      color: "hope",
      title: "Food Assistance",
      text: "Meal programs, emergency food, and daily essentials for families facing food insecurity.",
      items: ["Weekly food distribution", "Emergency food packs", "Holiday meal drives"],
      img: familyFood.url,
    },
    {
      icon: Home,
      color: "trust",
      title: "Family Support",
      text: "Household necessities and connection to resources so parents can breathe again.",
      items: ["Household necessities", "Essential supplies", "Community resources"],
      img: volunteerGive.url,
    },
    {
      icon: GraduationCap,
      color: "growth",
      title: "Children's Programs",
      text: "School supplies, holiday gifts, and joyful activities that build confidence.",
      items: ["School supplies", "Holiday gifts", "Youth engagement"],
      img: slimeFun.url,
    },
    {
      icon: Users,
      color: "gold",
      title: "Community Outreach",
      text: "Neighborhood events, volunteer days, and donation drives that bring us together.",
      items: ["Volunteer events", "Neighborhood programs", "Donation drives"],
      img: toyDrive.url,
    },
  ];
  return (
    <section id="programs" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="What We Do"
          title={<>Programs built around <span className="text-hope">real need</span>.</>}
          intro="Every program starts with listening. Then we show up with what families actually need — consistently, and with heart."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className={`absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl text-white shadow-lg bg-${p.color}`}>
                  <p.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-foreground/80">
                      <span className={`h-1.5 w-1.5 rounded-full bg-${p.color}`} />
                      {it}
                    </li>
                  ))}
                </ul>
                <a href="#donate" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-hope">
                  Support this program <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stories ---------------- */
function Stories() {
  const stories = [
    {
      img: kidsMeal.url,
      tag: "Feeding Kids Abroad",
      title: "A hot meal in every hand",
      quote:
        "When the food arrived, the classroom went silent. Then came the smiles. Then the giggles. That's what hope sounds like.",
      author: "— Field Volunteer",
    },
    {
      img: kidGift.url,
      tag: "Holiday Drive",
      title: "\"She held it like a treasure.\"",
      quote:
        "One little girl carried her gift with both hands the whole way home. Her mom cried. So did we.",
      author: "— Community Organizer",
    },
    {
      img: kidsGroup.url,
      tag: "Global Outreach",
      title: "A whole village, standing tall",
      quote:
        "Because of donors half a world away, these kids know they are seen, loved, and cheered on.",
      author: "— Partner Coordinator",
    },
  ];
  const [i, setI] = useState(0);
  const s = stories[i];
  return (
    <section id="stories" className="relative overflow-hidden bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Success Stories"
          title={<>The moments <span className="text-growth">that change everything</span>.</>}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div
            key={s.img}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img src={s.img} alt={s.title} className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-widest">
                {s.tag}
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-5">
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-card p-8 shadow-xl ring-1 ring-black/5"
            >
              <Quote className="h-8 w-8 text-hope" />
              <h3 className="mt-4 text-2xl font-bold leading-snug">{s.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/85">"{s.quote}"</p>
              <div className="mt-4 text-sm font-medium text-muted-foreground">{s.author}</div>
            </motion.div>
            <div className="mt-6 flex items-center gap-2">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Show story ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${idx === i ? "w-10 bg-hope" : "w-4 bg-foreground/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Events ---------------- */
function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useMemo(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  return { d, h, m };
}

function EventCard({ e }: { e: { title: string; date: Date; place: string; tag: string; img: string } }) {
  const { d, h, m } = useCountdown(e.date);
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={e.img} alt={e.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground">
          {e.tag}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {e.date.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}
        </div>
        <h3 className="mt-2 text-lg font-bold">{e.title}</h3>
        <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {e.place}
        </div>
        <div className="mt-5 flex items-center gap-2">
          {[
            { l: "Days", v: d },
            { l: "Hrs", v: h },
            { l: "Min", v: m },
          ].map((c) => (
            <div key={c.l} className="flex-1 rounded-xl bg-muted px-2 py-2 text-center">
              <div className="text-xl font-extrabold leading-none">{String(c.v).padStart(2, "0")}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">{c.l}</div>
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-hope px-4 py-2.5 text-sm font-semibold text-hope-foreground">
          Register
        </a>
      </div>
    </motion.article>
  );
}

function Events() {
  const today = new Date();
  const events = [
    { title: "Community Food Drive", date: new Date(today.getFullYear(), today.getMonth() + 1, 12), place: "Phoenix, AZ", tag: "Food", img: familyFood.url },
    { title: "Back-to-School Giveaway", date: new Date(today.getFullYear(), today.getMonth() + 1, 24), place: "Community Center", tag: "Children", img: slimeFun.url },
    { title: "Holiday Toy Drive", date: new Date(today.getFullYear(), today.getMonth() + 2, 8), place: "Downtown", tag: "Holiday", img: toyDrive.url },
  ];
  return (
    <section id="events" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Upcoming Events"
          title={<>Show up. <span className="text-trust">Serve together.</span></>}
          intro="Join our next community events — bring your family, bring a friend, and be the reason someone smiles."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => <EventCard key={e.title} e={e} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Donation ---------------- */
function Donate() {
  const options = [25, 50, 100, 250];
  const [amt, setAmt] = useState<number>(50);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);
  const value = custom ? Number(custom) || 0 : amt;
  const goal = 50000;
  const raised = 32450;
  const pct = Math.min(100, Math.round(((raised + value) / goal) * 100));

  const impact =
    value >= 250 ? "sponsors a full family for a month" :
    value >= 100 ? "supports community outreach" :
    value >= 50 ? "supplies school materials" :
    value >= 25 ? "feeds a family for a week" : "starts real change";

  return (
    <section id="donate" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 gradient-warm opacity-[0.08]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Donate"
            title={<>Turn <span className="text-hope">generosity</span> into groceries, gifts, and grace.</>}
            intro="100% of your donation fuels programs that reach families where they are. Give once — or become a monthly hero."
          />
          <div className="mt-8 rounded-3xl bg-card p-6 shadow-xl ring-1 ring-black/5 sm:p-8">
            <div className="flex items-center justify-between text-sm">
              <div className="font-semibold">Winter Support Campaign</div>
              <div className="text-muted-foreground">${(raised).toLocaleString()} of ${goal.toLocaleString()}</div>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full gradient-hope"
              />
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {options.map((o) => (
                <button
                  key={o}
                  onClick={() => { setAmt(o); setCustom(""); }}
                  className={`rounded-2xl border px-3 py-3 text-lg font-bold transition ${
                    !custom && amt === o
                      ? "border-hope bg-hope text-hope-foreground shadow-lg shadow-hope/30"
                      : "border-border bg-background hover:border-hope/60"
                  }`}
                >
                  ${o}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-2xl border border-border bg-background px-4 py-3">
              <span className="text-lg font-semibold text-muted-foreground">$</span>
              <input
                inputMode="decimal"
                placeholder="Custom amount"
                value={custom}
                onChange={(e) => setCustom(e.target.value.replace(/[^0-9.]/g, ""))}
                className="w-full bg-transparent text-lg font-semibold outline-none"
              />
            </div>
            <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-2xl bg-muted p-3">
              <input
                type="checkbox"
                checked={recurring}
                onChange={(e) => setRecurring(e.target.checked)}
                className="h-5 w-5 accent-[oklch(0.72_0.17_55)]"
              />
              <span className="text-sm">
                Make this a <span className="font-semibold">monthly gift</span> — sustained impact all year.
              </span>
            </label>
            <div className="mt-5 rounded-2xl bg-hope/10 p-4 text-sm">
              <span className="font-semibold">${value || 0}</span> {impact}.
            </div>
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-hope px-6 py-4 text-base font-semibold text-hope-foreground shadow-2xl shadow-hope/40 transition hover:-translate-y-0.5">
              <Heart className="h-5 w-5 fill-current" />
              Donate ${value || 0} {recurring && "/ month"}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Secure checkout. Tax-deductible. 501(c)(3) compliant.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            { amt: "$25", text: "Feeds a family for a week", icon: Utensils },
            { amt: "$50", text: "Supplies a child with school materials", icon: GraduationCap },
            { amt: "$100", text: "Fuels a full community outreach day", icon: Users },
            { amt: "$250", text: "Sponsors a family through a full month", icon: HeartHandshake },
          ].map((row, i) => (
            <motion.div
              key={row.amt}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-3xl border border-border/70 bg-card p-5 shadow-sm"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-hope text-hope-foreground shadow-lg">
                <row.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold">{row.amt}</div>
                <div className="text-sm text-muted-foreground">{row.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Get Involved ---------------- */
function GetInvolved() {
  const items = [
    { icon: HandHeartIcon, title: "Volunteer", text: "Give your time at events, drives, and outreach days.", cta: "Sign up" },
    { icon: Handshake, title: "Become a Sponsor", text: "Fuel long-term programs with monthly sponsorship.", cta: "Learn more" },
    { icon: Building2, title: "Corporate Partnerships", text: "Bring your team into meaningful community work.", cta: "Partner with us" },
    { icon: Trophy, title: "Host a Fundraiser", text: "Rally your circle around a cause that matters.", cta: "Start hosting" },
    { icon: Gift, title: "Donate Supplies", text: "Food, hygiene items, school supplies, holiday gifts.", cta: "See wishlist" },
    { icon: Megaphone, title: "Community Ambassador", text: "Amplify our mission in your neighborhood.", cta: "Get involved" },
  ];
  return (
    <section id="involved" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Get Involved"
          title={<>Find your way <span className="text-growth">to give back</span>.</>}
          intro="However you show up — with time, talent, or resources — there's a place for you here."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-hope/10 blur-2xl transition group-hover:bg-hope/20" />
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-foreground/5 text-foreground transition group-hover:bg-hope group-hover:text-hope-foreground">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 text-xl font-bold">{it.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{it.text}</p>
              <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-hope">
                {it.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Provide a friendly alias so we can use the imported HandHeart icon */
function HandHeartIcon(props: React.SVGProps<SVGSVGElement>) {
  // reuse Lucide HeartHandshake as a stand-in
  return <HeartHandshake {...props} />;
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const shots = [
    { src: kidsGroupMeal.url, h: "row-span-2" },
    { src: kidGift.url, h: "" },
    { src: slimeFun.url, h: "" },
    { src: familyFood.url, h: "row-span-2" },
    { src: kidsMeal.url, h: "" },
    { src: kidsGroup.url, h: "" },
    { src: toyDrive.url, h: "row-span-2" },
    { src: volunteerGive.url, h: "" },
  ];
  return (
    <section id="gallery" className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Gallery"
          title={<>Moments from <span className="text-hope">the field</span>.</>}
          intro="Real families, real volunteers, real joy — captured across events at home and around the world."
        />
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {shots.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ${s.h}`}
            >
              <img src={s.src} alt="Community moment" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Support ---------------- */
function WhySupport() {
  const items = [
    { icon: ShieldCheck, title: "Transparency", text: "Every dollar tracked. Every program measured." },
    { icon: Users, title: "Community Driven", text: "Built with — not just for — the people we serve." },
    { icon: HandCoins, title: "Trusted Volunteers", text: "Vetted, trained, and full of heart." },
    { icon: Leaf, title: "Real Impact", text: "Programs designed for lasting change." },
    { icon: Globe2, title: "Local & Global", text: "From our neighborhood to villages abroad." },
    { icon: Heart, title: "Compassion First", text: "People before paperwork. Always." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why Support Us"
          title={<>Six reasons donors <span className="text-trust">choose us</span>.</>}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-3xl border border-border/70 bg-card p-7 shadow-sm"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-trust/10 text-trust">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const t = [
    { name: "Maria G.", role: "Family Served", quote: "They didn't just bring groceries. They brought hope back into our home." },
    { name: "Jamal R.", role: "Volunteer", quote: "The most joyful people I've ever served with. It's changed how I see my city." },
    { name: "Ana & Luis", role: "Monthly Donors", quote: "We know exactly where our money goes — and we see the results every month." },
    { name: "Pastor Kim", role: "Community Partner", quote: "A team that truly loves people. It shows in everything they do." },
  ];
  return (
    <section className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          align="center"
          eyebrow="Testimonials"
          title={<span className="text-white">Words from <span className="text-[oklch(0.86_0.16_90)]">the heart</span>.</span>}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.map((x, i) => (
            <motion.figure
              key={x.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-1 text-sun">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-white/90">"{x.quote}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-semibold">{x.name}</div>
                <div className="text-white/60">{x.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Blog ---------------- */
function Blog() {
  const posts = [
    { tag: "Community", title: "Inside our Thanksgiving family drive", excerpt: "How volunteers packed 400 meals in a single afternoon — and why that matters.", img: familyFood.url },
    { tag: "Volunteer Spotlight", title: "Meet the teens leading our slime lab", excerpt: "A joyful youth program that's building real leaders one giggle at a time.", img: slimeFun.url },
    { tag: "Global", title: "A school in Uganda gets a hot lunch program", excerpt: "Your donations reached across the world — and back into a village's heart.", img: kidsGroup.url },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="News & Stories"
            title={<>From the <span className="text-hope">field journal</span>.</>}
          />
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-hope">
            View all posts <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-hope">
                  Read story <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "Where does my donation go?", a: "96% of every dollar funds programs directly — meals, supplies, outreach, and children's initiatives. We publish an annual impact report for full transparency." },
    { q: "How can I volunteer?", a: "Head to the Get Involved section and choose Volunteer. You'll receive event invites and onboarding within 48 hours." },
    { q: "Can businesses sponsor?", a: "Absolutely. We build custom corporate partnerships — from event sponsorship to employee volunteer days." },
    { q: "Can I donate supplies?", a: "Yes. We accept non-perishable food, hygiene items, school supplies, and gently used toys during announced drives." },
    { q: "Are donations tax deductible?", a: "Yes. Born To Give Foundation is a registered 501(c)(3), and you'll receive a receipt automatically." },
    { q: "How can I organize a fundraiser?", a: "Reach out via the contact form and our partnerships team will send you a host toolkit and support kit." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  const [q, setQ] = useState("");
  const filtered = faqs.filter((f) => (f.q + f.a).toLowerCase().includes(q.toLowerCase()));

  return (
    <section id="faq" className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader
          align="center"
          eyebrow="FAQ"
          title={<>Answers, <span className="text-hope">quickly</span>.</>}
        />
        <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm ring-1 ring-black/5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search questions..."
            className="w-full bg-transparent py-2 text-sm outline-none"
          />
        </div>
        <div className="mt-8 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          {filtered.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="px-6 py-8 text-center text-sm text-muted-foreground">No results. Try another search.</div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <img src={kidGift.url} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      </div>
      <div className="mx-auto max-w-7xl px-4 text-white sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-balance text-5xl font-extrabold leading-[1.05] sm:text-6xl"
        >
          Be the reason someone <span className="text-[oklch(0.86_0.16_90)]">smiles today</span>.
        </motion.h2>
        <p className="mt-5 max-w-xl text-lg text-white/85">
          Give, volunteer, or share our mission — every action ripples further than you know.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#donate" className="inline-flex items-center gap-2 rounded-full gradient-hope px-7 py-4 text-base font-semibold text-hope-foreground shadow-2xl shadow-hope/40 transition hover:-translate-y-0.5">
            <Heart className="h-5 w-5 fill-current" /> Donate Now
          </a>
          <a href="#involved" className="inline-flex items-center gap-2 rounded-full border border-white/40 glass-dark px-7 py-4 text-base font-semibold text-white hover:bg-white/10">
            Join Our Mission
          </a>
          <a href="#involved" className="inline-flex items-center gap-2 rounded-full border border-white/40 glass-dark px-7 py-4 text-base font-semibold text-white hover:bg-white/10">
            Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title={<>Say hi — we'd love to <span className="text-growth">hear from you</span>.</>}
            intro="Questions, partnership ideas, or ready to volunteer? Drop us a note and we'll respond within 1–2 business days."
          />
          <div className="mt-8 space-y-4">
            {[
              { icon: MapPin, label: "Phoenix, AZ", sub: "Serving Arizona & partner sites worldwide" },
              { icon: Mail, label: "hello@borntogivefoundation.org", sub: "General inquiries & partnerships" },
              { icon: Phone, label: "(602) 555-0142", sub: "Mon–Fri · 9am – 5pm MST" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-hope/10 text-hope">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.label}</div>
                  <div className="text-sm text-muted-foreground">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            {[Facebook, Instagram, Youtube].map((I, i) => (
              <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground/70 transition hover:border-hope hover:text-hope">
                <I className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-border bg-card p-6 shadow-xl ring-1 ring-black/5 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium">Name</span>
              <input required maxLength={80} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-hope" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input required type="email" maxLength={120} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-hope" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-medium">Subject</span>
            <select className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-hope">
              <option>Volunteer inquiry</option>
              <option>Partnership</option>
              <option>Donation question</option>
              <option>Media / press</option>
              <option>Other</option>
            </select>
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-medium">Message</span>
            <textarea required maxLength={1000} rows={5} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-hope" />
          </label>
          <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-hope px-6 py-3.5 text-base font-semibold text-hope-foreground shadow-lg shadow-hope/30 transition hover:-translate-y-0.5">
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </div>

      {/* Newsletter */}
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12">
          <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.86_0.16_90)]">Newsletter</div>
              <h3 className="mt-2 text-3xl font-extrabold leading-tight">Stories of hope, in your inbox.</h3>
              <p className="mt-2 text-white/70">One thoughtful email a month. No spam, ever.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 sm:flex-row">
              <input type="email" required placeholder="you@email.com" className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/50 outline-none focus:border-white/60" />
              <button className="inline-flex items-center justify-center gap-2 rounded-full gradient-hope px-6 py-3.5 font-semibold text-hope-foreground">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4">
        <div>
          <img src={logo.url} alt="Born To Give Foundation" className="h-12 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A nonprofit foundation restoring hope and dignity to children and families through food, support, and community.
          </p>
          <div className="mt-4 flex items-center gap-2">
            {[Facebook, Instagram, Youtube].map((I, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-muted text-foreground/70 hover:text-hope">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Explore" links={["Mission", "Programs", "Events", "Stories", "Gallery"]} />
        <FooterCol title="Get Involved" links={["Donate", "Volunteer", "Sponsor", "Partnerships", "Ambassador"]} />
        <FooterCol title="Foundation" links={["Blog", "FAQ", "Contact", "Privacy Policy", "Terms of Service"]} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <div>© {new Date().getFullYear()} Born To Give Foundation. All rights reserved. 501(c)(3) nonprofit.</div>
          <div>Made with <Heart className="inline h-3 w-3 fill-hope text-hope" /> for our community.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-hope">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Floating Donate ---------------- */
function FloatingDonate() {
  const [show, setShow] = useState(false);
  useMemo(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    if (typeof window !== "undefined") {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);
  return (
    <a
      href="#donate"
      aria-label="Donate now"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full gradient-hope px-5 py-3.5 text-sm font-semibold text-hope-foreground shadow-2xl shadow-hope/40 transition-all ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <Heart className="h-4 w-4 fill-current" /> Donate
    </a>
  );
}

export function BornToGiveSite() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Impact />
        <Programs />
        <Stories />
        <Events />
        <Donate />
        <GetInvolved />
        <Gallery />
        <WhySupport />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
