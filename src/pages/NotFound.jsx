import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase font-mono-tag tracking-widest text-signal">
        [ 404 ]
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink">
        This page doesn't exist.
      </h1>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-cloud transition-colors hover:bg-signal"
      >
        Back to home
      </Link>
    </section>
  );
}
