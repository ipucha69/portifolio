import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

// Submissions are written straight to Firestore, into the "messages"
// collection — see the README for how to set up your Firebase project,
// environment variables, and security rules, and how to read these back
// (Firebase console, or a simple admin view).

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
              href="mailto:hello@rashididdi.dev"
              className="flex items-center gap-3 text-cloud/80 transition-colors hover:text-signal-bright"
            >
              <Mail size={18} />
              ipucha69@gmail.com
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