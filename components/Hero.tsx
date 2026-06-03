"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TAGLINE = "Break It Before They Do.";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(TAGLINE.slice(0, i));
        if (i >= TAGLINE.length) clearInterval(interval);
      }, 55);
      return () => clearInterval(interval);
    }, 900);
    return () => clearTimeout(delay);
  }, []);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0B0B0B" }}>

      {/* Background red radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #C1121F, transparent 70%)", transform: "translate(30%, -20%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #C1121F, transparent 70%)", transform: "translate(-30%, 20%)" }} />
      </div>

      {/* Corner brackets */}
      <CornerBracket position="tl" />
      <CornerBracket position="tr" />
      <CornerBracket position="bl" />
      <CornerBracket position="br" />

      {/* Left red accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: "linear-gradient(180deg, #C1121F 0%, transparent 100%)" }} />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[#C1121F]" />
              <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#C1121F]">
                Offensive Security
              </span>
            </motion.div>

            {/* Typewriter headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="font-black leading-[1.05] mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", letterSpacing: "-0.02em" }}
            >
              {displayed}
              <span className="text-[#C1121F]"
                style={{ opacity: cursorVisible ? 1 : 0, transition: "opacity 0.1s" }}>|</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-base font-normal leading-relaxed max-w-md mb-10"
              style={{
                color: "#888",
                borderLeft: "2px solid rgba(193,18,31,0.4)",
                paddingLeft: "1rem",
              }}
            >
              We Think Like Attackers — So You Don&apos;t Have To.
              <br /><br />
              Simulamos ataques reales para identificar vulnerabilidades críticas antes de que actores maliciosos las exploten.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contacto"
                className="group relative px-8 py-3.5 bg-[#C1121F] text-white text-xs font-bold tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(193,18,31,0.4)]">
                <span className="relative z-10">Agenda una Consulta</span>
                <div className="absolute inset-0 bg-[#a00e18] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              <a href="#servicios"
                className="px-8 py-3.5 border border-[rgba(255,255,255,0.15)] text-white text-xs font-bold tracking-[0.15em] uppercase hover:border-[#C1121F] hover:text-[#C1121F] transition-all duration-300">
                Ver Servicios
              </a>
            </motion.div>
          </div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Bottom metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="mt-20 pt-8 grid grid-cols-3 gap-8 max-w-lg"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {[
            { val: "100%", label: "Enfoque Ofensivo" },
            { val: "+9",   label: "Servicios Especializados" },
            { val: "0",    label: "Compromisos de Datos" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-3xl font-black text-white leading-none"
                style={{ color: "#C1121F" }}>{m.val}</div>
              <div className="text-[10px] font-medium tracking-wide text-[#555] mt-1">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#444]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-[#C1121F] to-transparent"
        />
      </motion.div>
    </section>
  );
}

// Attack map visual
function HeroVisual() {
  const nodes = [
    { id: "target", x: 50, y: 50, label: "TARGET", color: "#C1121F", r: 22, main: true },
    { id: "web",    x: 15, y: 18, label: "WEB",    color: "#C1121F", r: 10, main: false },
    { id: "api",    x: 82, y: 22, label: "API",    color: "#888",    r: 10, main: false },
    { id: "vpn",    x: 12, y: 72, label: "VPN",    color: "#888",    r: 10, main: false },
    { id: "ad",     x: 80, y: 75, label: "AD",     color: "#C1121F", r: 10, main: false },
    { id: "db",     x: 50, y: 88, label: "DB",     color: "#888",    r: 10, main: false },
  ];

  const edges = [
    { from: "web", to: "target", compromised: true },
    { from: "api", to: "target", compromised: false },
    { from: "vpn", to: "target", compromised: false },
    { from: "ad",  to: "target", compromised: true },
    { from: "db",  to: "target", compromised: false },
  ];

  const getNode = (id: string) => nodes.find(n => n.id === id)!;

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#1A1A1A", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-2 h-2 rounded-full bg-[#C1121F]" />
        <span className="text-[10px] tracking-[0.2em] text-[#444] font-mono">pentara — attack surface</span>
      </div>

      {/* Map */}
      <div style={{ background: "#0F0F0F", border: "1px solid rgba(255,255,255,0.05)", borderTop: "none" }}>
        <svg viewBox="0 0 100 100" className="w-full" style={{ height: 280 }}>
          {/* Grid background */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3" />
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />

          {/* Edges */}
          {edges.map((e) => {
            const a = getNode(e.from);
            const b = getNode(e.to);
            return (
              <motion.line key={e.from}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={e.compromised ? "#C1121F" : "rgba(255,255,255,0.12)"}
                strokeWidth={e.compromised ? "0.6" : "0.4"}
                strokeDasharray={e.compromised ? "none" : "2 1"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            );
          })}

          {/* Animated pulse on compromised edges */}
          {edges.filter(e => e.compromised).map((e) => {
            const a = getNode(e.from);
            const b = getNode(e.to);
            return (
              <motion.circle key={"pulse-" + e.from} r="1" fill="#C1121F"
                animate={{
                  cx: [a.x, b.x],
                  cy: [a.y, b.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ duration: 1.8, repeat: Infinity, delay: Math.random() * 1.5, ease: "linear" }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.g key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.12, type: "spring" }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            >
              {/* Outer ring for main node */}
              {node.main && (
                <motion.circle cx={node.x} cy={node.y} r={node.r + 4}
                  fill="none" stroke="#C1121F" strokeWidth="0.4" strokeOpacity="0.4"
                  animate={{ r: [node.r + 4, node.r + 7, node.r + 4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              {/* Node circle */}
              <circle cx={node.x} cy={node.y} r={node.r}
                fill={node.main ? "#C1121F" : "#1A1A1A"}
                stroke={node.color}
                strokeWidth={node.main ? "0" : "0.8"}
                filter={node.main ? "url(#glow)" : "none"}
              />
              {/* Label */}
              <text x={node.x} y={node.y + 0.5}
                textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize={node.main ? "4.5" : "3"}
                fontFamily="Montserrat, sans-serif" fontWeight="700"
                letterSpacing="0.5">
                {node.label}
              </text>
              {/* Status dot for non-main */}
              {!node.main && (
                <circle cx={node.x + node.r - 2} cy={node.y - node.r + 2} r="1.8"
                  fill={node.color === "#C1121F" ? "#C1121F" : "#333"}
                  stroke="#0F0F0F" strokeWidth="0.5"
                />
              )}
            </motion.g>
          ))}
        </svg>

        {/* Legend */}
        <div className="flex items-center gap-5 px-5 py-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-2">
            <div className="w-3 h-px bg-[#C1121F]" />
            <span className="text-[9px] font-mono text-[#C1121F] tracking-wider">COMPROMETIDO</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-px" style={{ background: "rgba(255,255,255,0.2)", borderTop: "1px dashed rgba(255,255,255,0.2)" }} />
            <span className="text-[9px] font-mono text-[#444] tracking-wider">EN ANÁLISIS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function CornerBracket({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const base = "absolute w-12 h-12 pointer-events-none";
  const styles: Record<string, string> = {
    tl: "top-4 left-4 border-t border-l",
    tr: "top-4 right-4 border-t border-r",
    bl: "bottom-4 left-4 border-b border-l",
    br: "bottom-4 right-4 border-b border-r",
  };
  return (
    <div className={`${base} ${styles[position]}`}
      style={{ borderColor: "rgba(193,18,31,0.4)" }} />
  );
}
