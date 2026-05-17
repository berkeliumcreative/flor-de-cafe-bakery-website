// @ts-nocheck
"use client";

import { Lobster, Inter, Caveat } from "next/font/google";
import content from "../data/content.json";

const display = Lobster({ subsets: ["latin"], weight: ["400"] });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const script = Caveat({ subsets: ["latin"], weight: ["400", "600"] });

// Panadería palette — concha pink, cinnamon canela, cream, chocolate
const PINK = "#D8527A";
const PINK_DEEP = "#A02F58";
const CANELA = "#B86A2C";
const CHOCO = "#5C2A14";
const CREAM = "#FFF6E5";
const PARCH = "#F5E8C9";
const VANILLA = "#F8EFD8";
const TEXT = "#3A1E18";
const MUTED = "#8A6750";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: CREAM, color: TEXT }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes steam { 0%,100% { transform: translateY(0); opacity: 0.6; } 50% { transform: translateY(-8px); opacity: 1; } }
        .fade-up { animation: fadeUp 1s cubic-bezier(.2,.7,.2,1) forwards; }
        .fade-in { animation: fadeIn 1.2s ease-out forwards; }
        .steam { animation: steam 3s ease-in-out infinite; }
        .d1 { animation-delay: .12s; opacity: 0; }
        .d2 { animation-delay: .26s; opacity: 0; }
        .d3 { animation-delay: .4s; opacity: 0; }
        .scallop { background-image: radial-gradient(circle at 8px 0, ${PINK} 6px, transparent 7px); background-size: 16px 12px; background-position: 0 -6px; }
      `}</style>

      {/* SCALLOP PINK STRIP — bakery awning */}
      <div className="fixed top-0 left-0 right-0 z-40 h-3" style={{ backgroundColor: PINK }} />
      <div className="fixed top-3 left-0 right-0 z-40 scallop h-3" />

      {/* NAV */}
      <nav className="fixed top-6 left-0 right-0 z-50" style={{ backgroundColor: CREAM, borderBottom: `3px solid ${PINK_DEEP}` }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className={display.className} style={{ fontSize: "1.9rem", color: PINK_DEEP, lineHeight: 1 }}>Flor</span>
            <span className={script.className} style={{ fontSize: "1.5rem", color: CANELA }}>de Café</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm uppercase tracking-wider font-semibold" style={{ color: CHOCO }}>
            <a href="#menu" className="hover:text-rose-700 transition">Menú</a>
            <a href="#story" className="hover:text-rose-700 transition">La Panadería</a>
            <a href="#visit" className="hover:text-rose-700 transition">Visítanos</a>
          </div>
          <a href={phoneTel} className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-transform hover:scale-105" style={{ backgroundColor: PINK, color: CREAM, boxShadow: `3px 3px 0 ${PINK_DEEP}` }}>
            Llámanos ☎
          </a>
        </div>
      </nav>

      {/* HERO — bakery card */}
      <section id="top" className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className={script.className + " fade-in d1"} style={{ fontSize: "2.5rem", color: CANELA, transform: "rotate(-3deg)", display: "inline-block" }}>
              ¡buenos días!
            </p>
            <h1 className={display.className + " fade-up d1 mt-2"} style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", color: PINK_DEEP, lineHeight: 1.05 }}>
              Pan dulce,<br /><span style={{ color: CANELA }}>conchas,</span><br />y café — <span style={{ color: CHOCO }}>fresh from 5 AM.</span>
            </h1>
            <p className="fade-up d2 mt-8 text-lg max-w-xl leading-relaxed" style={{ color: MUTED }}>
              {content.hero.subheading}
            </p>
            <div className="fade-up d3 mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#visit" className="px-9 py-4 rounded-full text-sm uppercase tracking-wider font-bold transition-transform hover:scale-105" style={{ backgroundColor: PINK_DEEP, color: CREAM, boxShadow: `4px 4px 0 ${CHOCO}` }}>
                Visit la panadería
              </a>
              <a href="#menu" className="px-9 py-4 rounded-full text-sm uppercase tracking-wider font-bold transition-colors border-2" style={{ borderColor: CHOCO, color: CHOCO }}>
                See the menú
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-cover bg-center fade-in d2" style={{ backgroundImage: `url("${content.hero.image}")`, border: `8px solid ${CREAM}`, boxShadow: `0 0 0 4px ${PINK_DEEP}, 12px 12px 0 ${CANELA}` }} />
            {/* Steaming café tag */}
            <div className="absolute -top-6 -right-4 md:-right-8 steam z-10 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center" style={{ backgroundColor: VANILLA, border: `4px solid ${CHOCO}` }}>
              <div className="text-center" style={{ color: CHOCO }}>
                <p className={display.className} style={{ fontSize: "1.3rem", lineHeight: 1, color: PINK_DEEP }}>café</p>
                <p className={script.className} style={{ fontSize: "1.5rem", lineHeight: 0.9, color: CANELA }}>de olla</p>
                <p className={display.className + " text-sm mt-1"} style={{ color: CHOCO }}>$3.50</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="px-6 py-24 md:py-32" style={{ backgroundColor: VANILLA }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className={script.className} style={{ fontSize: "2rem", color: PINK_DEEP, transform: "rotate(-2deg)", display: "inline-block" }}>nuestra historia</p>
          <h2 className={display.className + " mt-3"} style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: CHOCO, lineHeight: 1.05 }}>
            {content.about.heading}
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed" style={{ color: MUTED }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* MENU — bakery card grid */}
      <section id="menu" className="px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className={script.className} style={{ fontSize: "2rem", color: CANELA, transform: "rotate(1deg)", display: "inline-block" }}>de la cocina</p>
            <h2 className={display.className + " mt-3"} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: PINK_DEEP, lineHeight: 1 }}>
              El menú
            </h2>
            <div className="w-32 h-1 mt-6 mx-auto rounded-full" style={{ backgroundColor: PINK }} />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {content.services.map((s, i) => {
              const tones = [PINK, CANELA, CHOCO, PINK, CANELA, CHOCO];
              const tone = tones[i % tones.length];
              return (
                <div key={i} className="p-7 rounded-3xl transition-transform hover:-translate-y-1" style={{ backgroundColor: CREAM, border: `3px solid ${tone}`, boxShadow: `5px 5px 0 ${tone}33` }}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className={display.className} style={{ fontSize: "1.7rem", color: PINK_DEEP, lineHeight: 1.05 }}>{s.title}</h3>
                    {s.price && (
                      <div className={script.className} style={{ fontSize: "1.5rem", color: tone, whiteSpace: "nowrap" }}>{s.price}</div>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {content.gallery && (
        <section className="px-6 py-20" style={{ backgroundColor: PARCH }}>
          <div className="max-w-6xl mx-auto">
            <p className={script.className + " text-center"} style={{ fontSize: "1.8rem", color: PINK_DEEP, display: "inline-block" }}>de la vitrina</p>
            <h2 className={display.className + " text-center mt-2 mb-10"} style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: CHOCO }}>
              From the case
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {content.gallery.map((src, i) => (
                <div key={i} className="aspect-square rounded-3xl bg-cover bg-center" style={{ backgroundImage: `url("${src}")`, border: `5px solid ${CREAM}`, boxShadow: `0 0 0 2px ${PINK_DEEP}, 5px 5px 0 ${CANELA}` }} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REVIEWS */}
      <section className="px-6 py-24" style={{ backgroundColor: PINK_DEEP, color: CREAM }}>
        <div className="max-w-6xl mx-auto">
          <p className={script.className + " text-center"} style={{ fontSize: "1.9rem", color: VANILLA, display: "inline-block" }}>palabras amables</p>
          <h2 className={display.className + " text-center mt-3 mb-14"} style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", color: CREAM, lineHeight: 1 }}>
            What the <span style={{ color: PARCH }}>regulars</span> say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.reviews.slice(0, 3).map((r, i) => (
              <div key={i} className="p-7 rounded-3xl" style={{ backgroundColor: CREAM, color: TEXT, border: `3px solid ${VANILLA}` }}>
                <div className="flex gap-1 mb-4" style={{ color: PINK, fontSize: "1.2rem" }}>
                  {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="text-base leading-relaxed" style={{ color: TEXT }}>"{r.text}"</p>
                <p className={display.className + " mt-5 text-base"} style={{ color: PINK_DEEP }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="px-6 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className={script.className} style={{ fontSize: "2rem", color: CANELA, transform: "rotate(-1deg)", display: "inline-block" }}>visítanos</p>
            <h2 className={display.className + " mt-3"} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: PINK_DEEP, lineHeight: 1 }}>
              On <span style={{ color: CANELA }}>Colorado</span> Street.
            </h2>
            <p className="mt-6 text-base" style={{ color: MUTED }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className} style={{ display: "block", marginTop: "0.5rem", fontSize: "2rem", color: PINK_DEEP }}>
              {content.contact.phone}
            </a>
            <table className="mt-10 w-full text-sm">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} style={{ borderBottom: `2px dashed ${PINK}33` }}>
                    <td className={display.className + " py-3"} style={{ color: CHOCO, fontSize: "1rem" }}>{day}</td>
                    <td className={script.className + " py-3 text-right"} style={{ color: CANELA, fontSize: "1.15rem" }}>{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-3xl overflow-hidden h-[520px]" style={{ border: `5px solid ${PINK_DEEP}`, boxShadow: `8px 8px 0 ${CANELA}` }}>
            <iframe title="Flor De Cafe location" width="100%" height="100%" loading="lazy" style={{ border: 0 }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: CHOCO, color: CREAM, borderTop: `4px solid ${PINK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className={display.className} style={{ fontSize: "2rem", color: PINK }}>Flor</span>
            <span className={script.className} style={{ fontSize: "1.7rem", color: VANILLA }}>de Café</span>
            <span className="text-xs uppercase tracking-widest font-bold ml-2" style={{ color: PARCH }}>Panadería · Since 2008</span>
          </div>
          {content.social && (
            <div className="flex flex-wrap gap-5 text-sm font-bold uppercase tracking-wider">
              {Object.entries(content.social).map(([k, v]) => (
                <a key={k} href={String(v)} target="_blank" rel="noreferrer" className="capitalize hover:opacity-70 transition" style={{ color: PINK }}>{k}</a>
              ))}
            </div>
          )}
        </div>
        <div className="py-4 text-center text-xs font-bold uppercase tracking-[0.3em]" style={{ borderTop: `1px solid ${CREAM}20`, color: PARCH }}>
          ¡Mil gracias! · © {new Date().getFullYear()} Flor De Cafe Bakery
        </div>
      </footer>
    </main>
  );
}