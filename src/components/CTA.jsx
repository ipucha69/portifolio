import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-cloud sm:px-16">
        <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-signal/20 blur-[110px]" aria-hidden="true" />
        <p className="relative font-mono text-xs uppercase font-mono-tag tracking-widest text-signal-bright">
          [ next project ]
        </p>
        <h2 className="relative mx-auto mt-4 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Have a system that needs building?
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-sm text-cloud/65 sm:text-base">
          Whether it's a remote role or a local business that needs software
          that actually fits how it works — let's talk about it.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-medium text-cloud transition-colors hover:bg-signal-bright"
          >
            Contact Me
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-cloud/25 px-6 py-3 font-medium text-cloud transition-colors hover:border-cloud/60"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
