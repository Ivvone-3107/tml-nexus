"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GsapScrollReveal } from "@/components/ui/gsap-scroll-reveal"
import { GsapTextReveal } from "@/components/ui/gsap-text-reveal"
import { GsapStaggerGrid } from "@/components/ui/gsap-stagger-grid"

const traditionalItems = [
  <>Implementación de <strong className="text-foreground">3–6 meses</strong> con consultoras externas</>,
  <>Interfaz de escritorio, <strong className="text-foreground">alta resistencia al cambio</strong> en terreno</>,
  <>Planificación rígida, <strong className="text-foreground">desconectada de los turnos reales</strong> de la planta</>,
  <>Análisis reactivo y manual, dependiente del <strong className="text-foreground">ensayo y error</strong></>,
  <>Contratos anuales amarrados y <strong className="text-foreground">soporte lento</strong> o en inglés</>,
  <>Datos en silos, requiere <strong className="text-foreground">exportar a Excel</strong> para ver indicadores</>,
]

const nexusItems = [
  <>Activos y equipos configurados y operando en <strong className="text-foreground">8 semanas</strong></>,
  <><strong className="text-foreground">App nativa iOS/Android:</strong> el técnico cierra OTs en solo 3 clics</>,
  <>Programación adaptable a la <strong className="text-foreground">rotación y carga de trabajo</strong> real</>,
  <><strong className="text-foreground">CMMS con IA propia:</strong> asistencia inteligente para diagnósticos y pautas</>,
  <><strong className="text-foreground">Pricing flexible</strong> sin amarres y soporte técnico <strong className="text-foreground">en tiempo real</strong></>,
  <><strong className="text-foreground">Dashboard gerencial automático:</strong> Disponibilidad, MTBF y MTTR</>,
]

export function VsComparison() {
  return (
    <GsapScrollReveal animation="fade-up">
      <section className="border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="section-label mb-3">¿Por qué Nexus TML?</p>
            <GsapTextReveal
              text="Construido para el técnico, no para el consultor"
              split="words"
              animation="fade-up"
              as="h2"
              className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            />
            <h2 className="sr-only">
              Construido para el técnico, no para el{" "}
              <span className="text-gradient-accent">consultor</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
              La competencia vende implementaciones interminables. Nosotros te entregamos un
              sistema 100% operativo y configurado en solo 8 semanas.
            </p>
          </div>

          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <GsapStaggerGrid
              animation="fade-up"
              from="start"
              staggerAmount={0.5}
              className="flex flex-col gap-0"
              itemClassName="opacity-70"
            >
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
                <span className="mb-6 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-muted-foreground">
                  Soluciones genéricas
                </span>

                <div className="flex flex-col gap-4">
                  {traditionalItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-base leading-none">❌</span>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GsapStaggerGrid>

            <div className="flex items-center justify-center lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:self-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-lg font-bold text-muted-foreground shadow-lg backdrop-blur-sm">
                vs
              </div>
            </div>

            <GsapStaggerGrid
              animation="fade-up"
              from="start"
              staggerAmount={0.5}
              className="flex flex-col gap-0"
            >
              <div className="rounded-2xl border border-primary/30 bg-white/[0.02] p-6 shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
                    🇨🇱 Hecho en Chile
                  </span>
                  <Image
                    src="/images/logo-n-transparente.png"
                    alt="Nexus TML"
                    width={28}
                    height={28}
                    className="rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  {nexusItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-base leading-none">✅</span>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GsapStaggerGrid>
          </div>

          <div className="mt-14 flex justify-center">
            <Button
              size="lg"
              className="cursor-pointer rounded-full px-8 text-base font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicita una demo gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </GsapScrollReveal>
  )
}
