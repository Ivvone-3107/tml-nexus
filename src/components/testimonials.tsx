"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Antes usábamos Excel y WhatsApp. Con Nexus TML pasamos de 60% a 97% de cumplimiento de PM en tres meses. El dashboard nos cambió completamente la forma de gestionar.",
    initials: "JM",
    name: "Jorge Muñoz",
    role: "Jefe de Mantenimiento",
    company: "Planta Industrial — Región Metropolitana",
  },
  {
    quote:
      "La app móvil fue el cambio real. Mis técnicos registran en terreno, el supervisor ve el estado en tiempo real desde la oficina. Sin papeles, sin llamadas, sin errores.",
    initials: "CP",
    name: "Claudia Pereira",
    role: "Supervisora de Operaciones",
    company: "Centro Acuícola — Región de Los Lagos",
  },
  {
    quote:
      "En 8 semanas teníamos todos los activos cargados, el equipo capacitado y los primeros KPIs en pantalla. Por primera vez pudimos ver nuestro MTBF y MTTR reales. Antes lo estimábamos. Ahora lo medimos y actuamos sobre eso.",
    initials: "RA",
    name: "Roberto Araya",
    role: "Gerente de Mantenimiento",
    company: "Manufactura — Región del Biobío",
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-label mb-3">Clientes</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Lo que dicen los{" "}
            <span className="text-gradient-accent">equipos de mantenimiento</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Resultados reales de operaciones que transformaron su mantenimiento.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
            >
              <div>
                <StarRating />
                <p className="mt-5 text-sm leading-relaxed text-foreground/90 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-primary-foreground"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--gradient-primary), var(--gradient-secondary))",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-muted-foreground/60">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
