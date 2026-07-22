import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#impact", label: "Impact" },
  { href: "#programs", label: "Programs" },
  { href: "#stories", label: "Stories" },
  { href: "#events", label: "Events" },
  { href: "#involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <div
          className={`flex w-full items-center justify-between rounded-full px-4 py-2 transition-all ${
            scrolled ? "glass shadow-lg shadow-black/5" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <img src={logo.url} alt="Born To Give Foundation" className="h-10 w-auto" />
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#donate"
              className="hidden items-center gap-2 rounded-full gradient-hope px-5 py-2.5 text-sm font-semibold text-hope-foreground shadow-lg shadow-hope/30 transition hover:-translate-y-0.5 hover:shadow-xl md:inline-flex"
            >
              <Heart className="h-4 w-4 fill-current" />
              Donate
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="mx-4 mt-2 rounded-3xl glass p-4 shadow-xl lg:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground/85 hover:bg-foreground/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-hope px-5 py-3 text-sm font-semibold text-hope-foreground"
            >
              <Heart className="h-4 w-4 fill-current" /> Donate Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
