"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    category: "Pentesting",
    title: "Web Application Testing",
    desc: "Identificamos vulnerabilidades en aplicaciones web — OWASP Top 10, lógica de negocio, autenticación y más.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="13" rx="1" /><path d="M8 20h8M12 17v3" />
      </svg>
    ),
  },
  {
    category: "Pentesting",
    title: "Mobile Application Testing",
    desc: "Análisis estático y dinámico de APKs y apps iOS. Storage, comunicaciones, autenticación y APIs.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2" width="10" height="20" rx="2" /><circle cx="12" cy="18" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    category: "Pentesting",
    title: "External Infrastructure",
    desc: "Reconocimiento pasivo y activo de perímetro externo. Puertos, servicios, CVEs explotables y misconfiguraciones.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18M4.2 7h15.6M4.2 17h15.6" />
      </svg>
    ),
  },
  {
    category: "Seguridad Interna",
    title: "Active Directory Assessment",
    desc: "Ataques AS-REP Roasting, Kerberoasting, Pass-the-Hash, GPP abuse y escalación de privilegios en entornos AD.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 7v8c0 5 4 8 9 9 5-1 9-4 9-9V7z" />
      </svg>
    ),
  },
  {
    category: "Seguridad Interna",
    title: "Internal Network Testing",
    desc: "Simulación de atacante interno. Lateral movement, pivoting, captura de credenciales y acceso a activos críticos.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="9" width="4" height="4" rx="0.5" /><rect x="18" y="9" width="4" height="4" rx="0.5" />
        <rect x="10" y="2" width="4" height="4" rx="0.5" /><rect x="10" y="18" width="4" height="4" rx="0.5" />
        <path d="M6 11h4M14 11h4M12 6v4M12 14v4" />
      </svg>
    ),
  },
  {
    category: "WiFi",
    title: "WiFi Security Assessment",
    desc: "Evaluación de redes inalámbricas. WPA2 cracking, rogue APs, evil twin y ataques de deauthentication.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12.5C7.5 10 10 8.5 12 8.5s4.5 1.5 7 4M8 15.5c1.2-1.2 2.5-2 4-2s2.8.8 4 2" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    category: "Ingeniería Social",
    title: "Ingeniería Social",
    desc: "Phishing, vishing y pretexting para evaluar la resistencia del factor humano ante amenazas reales de manipulación.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="7" r="3"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5"/>
        <circle cx="17" cy="7" r="3"/><path d="M21 20c0-3-2-5-4-5"/>
      </svg>
    ),
  },
  {
    category: "Gestión Continua",
    title: "Vulnerability Management",
    desc: "Identificación, priorización y seguimiento continuo de vulnerabilidades con inteligencia de amenazas aplicada.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 18h18M7 14V9M12 14V5M17 14V10" />
      </svg>
    ),
  },
  {
    category: "Cumplimiento",
    title: "Security Assessment Report",
    desc: "Entrega de informe técnico y ejecutivo con hallazgos, CVSS, evidencias y plan de remediación priorizado.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12h6M9 16h4M7 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8l-5-5z"/>
        <path d="M15 3v5h5"/>
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" ref={ref} className="relative py-32"
      style={{ background: "#0D0D0D" }}>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(193,18,31,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C1121F]" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#C1121F]">
              Lo Que Hacemos
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight">
            Nuestros Servicios
          </h2>
          <p className="text-sm text-[#666] mt-4 max-w-lg leading-relaxed">
            Cada servicio está diseñado para replicar el comportamiento real de un adversario — no para cumplir un checklist.
          </p>
        </motion.div>

        {/* Services grid — 3x3 balanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <motion.div key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <ServiceCard service={svc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 8;
    setTilt({ x, y });
  };

  return (
    <motion.div ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        background: "#161616",
        border: hovered ? "1px solid rgba(193,18,31,0.5)" : "1px solid rgba(255,255,255,0.06)",
        transformStyle: "preserve-3d",
        perspective: 1000,
        transition: "border-color 0.3s",
        cursor: "default",
      }}
      className="relative p-7 group h-full"
    >
      {/* Left red bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{
          background: hovered ? "#C1121F" : "transparent",
          transition: "background 0.3s",
        }} />

      {/* Icon */}
      <div className="mb-5 flex items-center gap-4">
        <div className="text-[#C1121F]">{service.icon}</div>
        <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[#C1121F] opacity-70">
          {service.category}
        </span>
      </div>

      <h3 className="text-base font-bold text-white mb-3 leading-snug">{service.title}</h3>
      <p className="text-xs text-[#666] leading-relaxed">{service.desc}</p>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-7 right-7 h-px"
        style={{ background: "rgba(255,255,255,0.04)" }} />
    </motion.div>
  );
}
