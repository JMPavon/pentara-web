export default function Footer() {
  return (
    <footer className="relative py-10" style={{ background: "#C1121F" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
            <circle cx="20" cy="20" r="19" fill="rgba(255,255,255,0.15)" />
            <path d="M11 10 L11 30 L16 30 L16 23 L25 23 C29 23 32 20 32 17 C32 13.5 29 10 25 10 Z M16 14.5 L24 14.5 C26.5 14.5 27.5 15.8 27.5 17 C27.5 18.2 26.5 19.5 24 19.5 L16 19.5 Z" fill="white" />
          </svg>
          <div>
            <div className="text-sm font-black tracking-[0.15em] text-white leading-none">PENTARA SECURITY</div>
            <div className="text-[9px] font-medium tracking-[0.2em] text-red-200 mt-0.5">Break It Before They Do.</div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {[
            { label: "Servicios", href: "#servicios" },
            { label: "Metodología", href: "#metodologia" },
            { label: "Contacto", href: "#contacto" },
          ].map((l) => (
            <a key={l.href} href={l.href}
              className="text-[10px] font-semibold tracking-[0.18em] uppercase text-red-200 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Copy */}
        <div className="text-[10px] text-red-200 tracking-wide">
          © 2025 Pentara Security · Honduras, CA
        </div>
      </div>
    </footer>
  );
}
