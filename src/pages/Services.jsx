import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { services, process } from "../data/services";
import CTA from "../components/CTA";

export default function Services() {
    return (
        <>
            <section className="border-b border-ink/8 bg-ink py-20 text-cloud">
                <div className="mx-auto max-w-6xl px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-xs uppercase font-mono-tag tracking-widest text-signal-bright"
                    >
                        [ services ]
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 }}
                        className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl"
                    >
                        Systems built around how your business actually runs.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-5 max-w-xl text-cloud/65"
                    >
                        From a first working prototype to a live, automated system —
                        here's what I can build for you.
                    </motion.p>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid gap-6 md:grid-cols-2">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.name}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.45, delay: i * 0.06 }}
                            className="flex flex-col rounded-2xl border border-ink/8 bg-white/60 p-7"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-signal/10">
                                    <s.icon size={19} className="text-signal" />
                                </span>
                                <span className="font-mono text-[11px] uppercase font-mono-tag tracking-widest text-signal">
                                    {s.tag}
                                </span>
                            </div>

                            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                                {s.name}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-ink/60">{s.summary}</p>

                            <ul className="mt-5 space-y-2 border-t border-ink/8 pt-5">
                                {s.deliverables.map((d) => (
                                    <li key={d} className="flex items-start gap-2.5 text-sm text-ink/70">
                                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-signal" />
                                        {d}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTA />
        </>
    );
}