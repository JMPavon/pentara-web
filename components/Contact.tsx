"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Replace YOUR_FORM_ID with your Formspree form ID
// Get it free at https://formspree.io → New Form
const FORMSPREE_ID = "YOUR_FORM_ID";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Error al enviar. Por favor escríbenos a contacto@pentara.io");
      }
    } catch {
      setError("Error de conexión. Por favor escríbenos a contacto@pentara.io");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" ref={ref} className="relative py-32"
      style={{ background: "#0D0D0D" }}>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(193,18,31,0.4), transparent)" }} />

      {/* Red glow bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C1121F, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C1121F]" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#C1121F]">Contacto</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight">
            ¿Listo para Conocer<br />
            <span className="text-[#C1121F]">tu Exposición Real?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="p-10 text-center"
                style={{ border: "1px solid rgba(193,18,31,0.3)", background: "rgba(193,18,31,0.05)" }}>
                <div className="text-4xl mb-4">✓</div>
                <p className="text-white font-bold text-lg mb-2">Mensaje recibido</p>
                <p className="text-[#666] text-sm">Nos pondremos en contacto en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Nombre" value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })} placeholder="Tu nombre" />
                  <FormField label="Email" type="email" value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })} placeholder="tu@empresa.com" />
                </div>
                <FormField label="Empresa" value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })} placeholder="Nombre de la organización" />
                <FormField label="¿En qué podemos ayudarte?" value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  placeholder="Describe brevemente lo que buscas..." textarea />

                <button type="submit" disabled={loading}
                  className="w-full py-4 bg-[#C1121F] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#a00e18] transition-colors duration-300 hover:shadow-[0_0_30px_rgba(193,18,31,0.35)] disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? "Enviando..." : "Enviar Mensaje"}
                </button>
                {error && <p className="text-[10px] text-[#C1121F] text-center">{error}</p>}
                <p className="text-[10px] text-[#444] text-center">
                  Confidencial. Respondemos en menos de 24 horas.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right: info panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* CTA box */}
            <div className="p-7"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-8 h-px bg-[#C1121F] mb-5" />
              <h3 className="text-lg font-black text-white mb-4">Agenda una llamada de 30 min</h3>
              <p className="text-xs text-[#666] leading-relaxed mb-6">
                Sin compromiso. Evaluamos si hay fit entre tus necesidades y nuestros servicios. Si no lo hay, te lo decimos directamente.
              </p>
              <div className="space-y-3">
                {[
                  "Definimos alcance y objetivos",
                  "Firmamos NDA antes de cualquier detalle",
                  "Propuesta personalizada en 48h",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#C1121F] flex-shrink-0" />
                    <span className="text-xs text-[#888]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                {
                  icon: <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="1" y="3" width="14" height="10" rx="1" /><path d="M1 4l7 5 7-5" /></svg>,
                  label: "Email",
                  value: "contacto@pentara.io",
                  href: "mailto:contacto@pentara.io",
                },
                {
                  icon: <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="8" cy="8" r="6" /><path d="M8 4v4l2.5 2.5" /></svg>,
                  label: "Web",
                  value: "pentara.io",
                  href: "https://pentara.io",
                },
                {
                  icon: <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5z" /><circle cx="8" cy="6" r="1.5" /></svg>,
                  label: "Ubicación",
                  value: "Honduras, CA",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3 py-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="text-[#C1121F]">{c.icon}</div>
                  <div>
                    <div className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#444]">{c.label}</div>
                    <div className="text-xs text-[#888] mt-0.5">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label, value, onChange, placeholder, type = "text", textarea = false,
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder: string; type?: string; textarea?: boolean;
}) {
  const base = {
    background: "#161616",
    border: "1px solid rgba(255,255,255,0.07)",
    color: "white",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "12px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  return (
    <div>
      <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#555] mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder} rows={4} required
          style={{ ...base, padding: "12px 14px", resize: "vertical" }}
          onFocus={(e) => (e.target.style.borderColor = "#C1121F")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.07)")}
        />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder} type={type} required
          style={{ ...base, padding: "12px 14px" }}
          onFocus={(e) => (e.target.style.borderColor = "#C1121F")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.07)")}
        />
      )}
    </div>
  );
}
