import { Mail } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.25h4V23h-4V8.25ZM8.5 8.25h3.83v2.01h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.83c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.77-2.62 3.6V23h-4V8.25Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-cloud/10 bg-ink text-cloud/70">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-cloud">
              Rashid Iddi<span className="text-signal-bright">.</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-cloud/60">
              Full stack developer & AI automation engineer, building scalable
              business systems with React & React Native, Firebase, and intelligent workflows.
            </p>
          </div>

          <div className="flex gap-5">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ipucha69@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="rounded-full border border-cloud/15 p-2.5 transition-colors hover:border-signal-bright hover:text-signal-bright"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rashid-iddi-161347187"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-cloud/15 p-2.5 transition-colors hover:border-signal-bright hover:text-signal-bright"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-cloud/10 pt-6 text-xs text-cloud/40 md:flex-row md:items-center">
          <p className="font-mono">© {new Date().getFullYear()} Rashid Iddi. Built with React & Tailwind CSS.</p>
          <p className="font-mono uppercase font-mono-tag tracking-widest text-signal-bright/80">
            [ status: available for work ]
          </p>
        </div>
      </div>
    </footer>
  );
}
