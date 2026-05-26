"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"

const checklistItems = [
  "Disponibilidad y PM siempre visibles — no al final del mes",
  "MTBF y MTTR actualizados: mide si tu gestión mejora mes a mes",
  "Reportes de OTs, performance y análisis de tiempos",
  "Notificaciones push cuando una OT urgente se abre",
]

export function MobileShowcase() {
  return (
    <section id="app-movil" className="py-20 md:py-28">
      <style>{`
        @keyframes phone-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes phone-alarm {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          10% { transform: translateY(0) rotate(0deg); }
          12% { transform: translateY(-3px) rotate(-1.8deg); }
          14% { transform: translateY(2px) rotate(1.8deg); }
          16% { transform: translateY(-3px) rotate(-1.5deg); }
          18% { transform: translateY(2px) rotate(1.5deg); }
          20% { transform: translateY(-2px) rotate(-1deg); }
          22% { transform: translateY(1px) rotate(1deg); }
          24% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(0deg); }
          56% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes alarm-pulse {
          0%, 100% { opacity: 0; transform: scale(0.9); }
          12% { opacity: 1; transform: scale(1.05); }
          24% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 0.6; transform: scale(1.08); }
          56% { opacity: 0; transform: scale(0.9); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative flex items-end justify-center">
            <div
              className="pointer-events-none absolute inset-[-60px] -z-10"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.18), transparent 65%)",
              }}
            />

            <div
              className="pointer-events-none absolute inset-[-20px] -z-10 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(59,130,246,0.15), transparent 70%)",
                animation: "alarm-pulse 4s ease-in-out infinite",
              }}
            />

            <div
              className="relative w-[170px] shrink-0 md:w-[190px]"
              style={{ animation: "phone-float 8s ease-in-out infinite" }}
            >
              <Image
                src="/images/dashboard-mobile.jpeg"
                alt="Nexus TML — App móvil MTBF y MTTR"
                width={739}
                height={1600}
                quality={100}
                className="w-full rounded-[24px] border-2 border-white/[0.1] shadow-[0_32px_64px_rgba(0,0,0,0.6)]"
              />
            </div>

            <div
              className="relative -ml-6 z-10 w-[190px] shrink-0 md:w-[210px]"
              style={{ animation: "phone-alarm 4s ease-in-out infinite" }}
            >
              <Image
                src="/images/dashboard-mobile-2.jpeg"
                alt="Nexus TML — App móvil Dashboard"
                width={739}
                height={1600}
                quality={100}
                className="w-full rounded-[28px] border-2 border-white/[0.1]"
                style={{
                  boxShadow:
                    "0 40px 80px rgba(36,89,168,0.35), 0 0 0 1px rgba(36,89,168,0.3)",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                App Móvil
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Tus técnicos conectados{" "}
              <span className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
                desde cualquier lugar
              </span>
            </h2>

            <p className="max-w-lg text-muted-foreground md:text-lg">
              El mismo poder del dashboard web en el bolsillo de cada técnico.
              Resumen operativo, confiabilidad, reportes y gestión de OTs desde
              el celular.
            </p>

            <ul className="flex flex-col gap-3">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <Button
                variant="outline"
                className="cursor-pointer rounded-full px-6"
              >
                Explorar app →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
