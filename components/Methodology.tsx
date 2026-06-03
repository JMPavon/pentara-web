"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Reconocimiento",
    desc: "Mapeo completo de la superficie de ataque. Subdominios, puertos, tecnologías, empleados, fugas de información y vectores expuestos — todo sin interacción directa con el objetivo.",
    tags: ["OSINT", "Passive Recon", "Attack Surface"],
  },
  {
    num: "02",
    title: "Enumeración",
    desc: "Identificación activa de servicios, versiones, configuraciones y vectores potenciales. Priorizamos según probabilidad de explotación e impacto real.",
    tags: ["Port Scanning", "Service Detection", "Fingerprinting"],
  },
  {
    num: "03",
    title: "Explotación",
    desc: "Validación controlada de vulnerabilidades con técnicas y herramientas que usan atacantes reales. Sin falsos positivos — solo hallazgos confirmados con evidencia.",
    tags: ["CVE Exploitation", "Manual Testing", "Proof of Concept"],
  },
  {
    num: "04",
    title: "Post-explotación",
    desc: "Evaluación del impacto real una vez obtenido acceso. Lateral movement, privilege escalation y acceso a activos críticos para demostrar el alcance completo del compromiso.",
    tags: ["Lateral Movement", "Privilege Escalation", "Data Access"],
  },
  {
    num: "05",
    title: "Reporte y Mitigación",
    desc: "Entrega de hallazgos con contexto de negocio. Cada vulnerabilidad incluye: descripción técnica, impacto, CVSS, evidencia y pasos de remediación concretos.",
    tags: ["Executive Summary", "Technical Detail", "Remediation Plan"],
  },
];

export default function Methodology() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 90%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="metodologia" ref={sectionRef} className="relative py-32"
      style={{ background: "#0B0B0B" }}>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(193,18,31,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#C1121F]" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#C1121F]">
              Metodología
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Nuestro Proceso<br />
              <span className="text-[#C1121F]">Operativo</span>
            </h2>
            <p className="text-sm text-[#666] leading-relaxed self-end max-w-md">
              Replicamos el comportamiento de atacantes reales para generar resultados precisos y accionables. Sin atajos, sin plantillas genéricas.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Scroll-drawn red line */}
          <div ref={lineRef} className="absolute left-[27px] top-2 w-px"
            style={{ background: "rgba(255,255,255,0.05)", bottom: "2rem" }}>
            <motion.div className="absolute top-0 left-0 right-0 bg-[#C1121F] origin-top"
              style={{ height: lineHeight }} />
          </div>

          <div className="space-y-16 pb-8">
            {steps.map((step, i) => (
              <TimelineStep key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 p-6 flex items-start gap-4"
          style={{ background: "rgba(193,18,31,0.05)", border: "1px solid rgba(193,18,31,0.2)" }}
        >
          <div className="w-px h-12 bg-[#C1121F] flex-shrink-0 mt-1" />
          <p className="text-sm text-[#888] leading-relaxed">
            <strong className="text-white">Confidencialidad garantizada.</strong> Todos los proyectos están protegidos por NDA. Ningún hallazgo, dato o información del cliente es compartida con terceros bajo ninguna circunstancia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isLast = index === steps.length - 1;

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="flex gap-8 group"
    >
      {/* Number circle */}
      <div className="relative flex-shrink-0">
        <motion.div
          animate={inView
            ? isLast
              ? { scale: [0.5, 1.15, 1], boxShadow: ["0 0 0px #C1121F", "0 0 18px #C1121F", "0 0 6px #C1121F"] }
              : { scale: [0.5, 1.1, 1] }
            : { scale: 0.5 }}
          transition={{ duration: 0.6, delay: index * 0.08 + 0.2 }}
          className="w-14 h-14 rounded-full flex items-center justify-center font-black text-sm"
          style={{
            background: "#0B0B0B",
            border: "1px solid #C1121F",
            color: "#C1121F",
            letterSpacing: "0.05em",
          }}
        >
          {step.num}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex items-baseline gap-4 mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-[#C1121F] transition-colors duration-300">
            {step.title}
          </h3>
        </div>
        <p className="text-sm text-[#666] leading-relaxed mb-4 max-w-2xl">
          {step.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span key={tag}
              className="text-[9px] font-semibold tracking-[0.2em] uppercase px-3 py-1"
              style={{
                background: "rgba(193,18,31,0.08)",
                border: "1px solid rgba(193,18,31,0.2)",
                color: "#C1121F",
              }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
