"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { val: "100%", label: "Enfoque ofensivo puro" },
  { val: "+9",   label: "Servicios especializados" },
  { val: "0",    label: "Compromisos de datos" },
  { val: "5",    label: "Pasos de metodología" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" ref={ref} className="relative py-32 overflow-hidden"
      style={{ background: "#0B0B0B" }}>

      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(193,18,31,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#C1121F]" />
              <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#C1121F]">
                Quiénes Somos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black leading-tight mb-8"
            >
              Seguridad Ofensiva<br />
              <span className="text-[#C1121F]">de Alto Nivel</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 text-sm leading-relaxed text-[#888]"
              style={{ borderLeft: "2px solid rgba(193,18,31,0.3)", paddingLeft: "1.25rem" }}
            >
              <p>
                Pentara Security es una firma especializada en pruebas de seguridad ofensiva. Nuestro
                enfoque se basa en simular ataques reales para identificar vulnerabilidades críticas
                antes de que sean explotadas.
              </p>
              <p>
                No hacemos auditorías de papel. Replicamos el comportamiento de adversarios reales —
                sus tácticas, técnicas y procedimientos — para generar resultados precisos y accionables.
              </p>
              <p>
                Ayudamos a las organizaciones a comprender su nivel real de exposición y tomar
                decisiones informadas para reducir riesgos de negocio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <a href="#contacto"
                className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase text-[#C1121F] hover:gap-5 transition-all duration-300">
                Conoce más
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="group relative p-6 cursor-default"
                style={{
                  background: "#161616",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Red top on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C1121F] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                <div className="text-4xl font-black text-white mb-2 leading-none"
                  style={{ color: i === 0 ? "#C1121F" : "white" }}>
                  {s.val}
                </div>
                <div className="text-[10px] font-medium tracking-wider text-[#555] uppercase leading-relaxed">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-24 py-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-lg md:text-xl font-bold italic text-white max-w-2xl mx-auto leading-relaxed">
            &ldquo;Pentara no busca cumplimiento. Busca encontrar lo que los atacantes encontrarían.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
