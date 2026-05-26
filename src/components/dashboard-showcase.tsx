"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

const checklistItems = [
  "¿Tu MTBF está bajando? Identifica el activo y actúa antes de la parada",
  "¿Tu MTTR está subiendo? Es una señal de gestión, no de mala suerte",
  "Top 5 malos actores: sabe dónde se va el 80% de tus horas de correctivo",
  "PM bajo 90%: el sistema te avisa para que intervengas a tiempo",
]

const kpiChips = [
  {
    label: "Disponibilidad",
    value: "98.2%",
    note: "Últimas 24h",
    color: "text-[oklch(62%_0.19_245)]",
    position: "-top-4 -left-6 md:-top-6 md:-left-10",
    animation: "chip-a",
    delay: "0s",
    duration: "8s",
  },
  {
    label: "OTs críticas",
    value: "0",
    note: "Sin pendientes",
    color: "text-amber-400",
    position: "-top-4 -right-6 md:-top-6 md:-right-10",
    animation: "chip-b",
    delay: "1.5s",
    duration: "10s",
  },
  {
    label: "Cumplimiento PM",
    value: "97%",
    note: "Meta: 90%",
    color: "text-teal-400",
    position: "-bottom-4 -right-6 md:-bottom-6 md:-right-10",
    animation: "chip-a",
    delay: "3s",
    duration: "9s",
  },
  {
    label: "MTBF",
    value: "168h",
    note: "Tendencia ↑",
    color: "text-[oklch(62%_0.19_245)]",
    position: "-bottom-4 -left-6 md:-bottom-6 md:-left-10",
    animation: "chip-b",
    delay: "2s",
    duration: "11s",
  },
  {
    label: "MTTR",
    value: "2.4h",
    note: "Promedio mensual",
    color: "text-indigo-400",
    position: "top-1/2 -left-10 -translate-y-1/2 hidden md:block",
    animation: "chip-a",
    delay: "4s",
    duration: "12s",
  },
]

export function DashboardShowcase() {
  return (
    <section className="py-20 md:py-28">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        @keyframes chip-a {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, -9px); }
        }
        @keyframes chip-b {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5px, 9px); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                Dashboard Web
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ve tus indicadores.{" "}
              <span className="text-gradient-accent">
                Toma decisiones hoy.
              </span>
            </h2>

            <p className="max-w-lg text-muted-foreground md:text-lg">
              El dashboard de Nexus TML consolida todos tus KPIs críticos en una
              sola pantalla. No para el informe del lunes — para decidir ahora,
              en terreno, con datos reales.
            </p>

            <ul className="flex flex-col gap-3">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <a href="#cta">
                <Button className="cursor-pointer rounded-full px-6">
                  Ver dashboard en acción →
                </Button>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 -z-10 scale-150"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(62% 0.19 245 / 0.15), transparent 65%)",
                }}
              />

              <div
                className="relative"
                style={{ animation: "float 10s ease-in-out infinite" }}
              >
                <div
                  className="relative overflow-hidden rounded-xl border border-white/[0.1]"
                  style={{
                    background: "#04091a",
                    boxShadow:
                      "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(36,89,168,0.2)",
                  }}
                >
                  <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="block h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
                      <span className="block h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
                      <span className="block h-[9px] w-[9px] rounded-full bg-[#28c840]" />
                    </div>
                    <div className="ml-3 flex-1 rounded-md bg-white/[0.06] px-3 py-1">
                      <span className="font-mono text-[11px] text-muted-foreground/50">
                        app.nexustml.cl/dashboard
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <Image
                      src="/images/nexus-dashboard.png"
                      alt="Nexus TML — Dashboard Operativo"
                      width={1916}
                      height={1042}
                      quality={100}
                      className="w-full"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04091a]/30 via-transparent to-white/[0.03]" />
                  </div>
                </div>
              </div>

              {kpiChips.map((chip) => (
                <div
                  key={chip.label}
                  className={`absolute z-10 rounded-2xl border border-white/[0.1] bg-black/90 p-3.5 shadow-[0_28px_60px_rgba(0,0,0,0.58)] backdrop-blur-xl ${chip.position}`}
                  style={{
                    animation: `${chip.animation} ${chip.duration} ease-in-out infinite`,
                    animationDelay: chip.delay,
                  }}
                >
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                    {chip.label}
                  </span>
                  <p className={`text-2xl font-extrabold ${chip.color}`}>
                    {chip.value}
                  </p>
                  <span className="text-[10px] text-muted-foreground/40">
                    {chip.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
