import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function WhatsappIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.57-.48-.49-.65-.5h-.56c-.2 0-.51.07-.78.37-.26.29-1.02 1-1.02 2.42 0 1.43 1.05 2.82 1.19 3.01.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34Z" />
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.86.51 3.65 1.47 5.22L2 22l4.9-1.44A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1c-1.65 0-3.26-.44-4.66-1.28l-.33-.2-3.06.9.9-3-.22-.34a8.1 8.1 0 0 1-1.25-4.28c0-4.48 3.65-8.13 8.14-8.13S20.15 7.52 20.15 12c0 4.48-3.64 8.1-8.13 8.1Z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: serverTimestamp(),
        read: false,
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to save message:", err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-ink text-cloud">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase font-mono-tag tracking-widest text-signal-bright">
            [ contact ]
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build something that lasts.
          </h1>
          <p className="mt-5 max-w-md text-cloud/65">
            Open to remote roles and freelance projects — especially ones that
            need a real system built, not just a screen.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ipucha69@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="flex items-center gap-3 text-cloud/80 transition-colors hover:text-signal-bright"
            >
              <Mail size={18} />
              ipucha69@gmail.com
            </a>
            <a
              href="https://wa.me/255788858654"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-cloud/80 transition-colors hover:text-signal-bright"
            >
              <WhatsappIcon />
              +255 788 858 654
            </a>
            <p className="flex items-center gap-3 text-cloud/60">
              <MapPin size={18} />
              Dar es Salaam, Tanzania — available worldwide, remote
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-cloud/10 bg-ink-soft/70 p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Your name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Mushi"
              required
            />
            <Field
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              required
            />
          </div>

          <div className="mt-5">
            <label className="font-mono text-[11px] uppercase font-mono-tag tracking-widest text-cloud/50">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me a bit about the project or role..."
              className="mt-2 w-full rounded-lg border border-cloud/15 bg-transparent px-4 py-3 text-sm text-cloud placeholder:text-cloud/30 focus:border-signal-bright"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 font-medium text-cloud transition-colors hover:bg-signal-bright disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>

          {status === "sent" && (
            <p className="mt-4 font-mono text-xs uppercase font-mono-tag tracking-widest text-signal-bright">
              Message sent — I'll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 font-mono text-xs uppercase font-mono-tag tracking-widest text-amber">
              Something went wrong — email me directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", required }) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase font-mono-tag tracking-widest text-cloud/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-lg border border-cloud/15 bg-transparent px-4 py-3 text-sm text-cloud placeholder:text-cloud/30 focus:border-signal-bright"
      />
    </div>
  );
}