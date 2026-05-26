"use client"

import React from "react"
import Image from "next/image"
import {
  Wrench,
  Bell,
  BarChart3,
  Shield,
  Users,
  CheckCircle2,
  ArrowRight,
  Database,
  Settings,
  AlertTriangle,
  Zap,
  Target,
  ShieldCheck,
  CircleDollarSign,
  Timer,
  CalendarCheck,
} from "lucide-react"
import { LinkedInLogoIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { NumberTicker } from "@/components/ui/number-ticker"
import { BorderBeam } from "@/components/ui/border-beam"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { DotPattern } from "@/components/ui/dot-pattern"
import {
  GsapHeroSequence,
  heroPresets,
} from "@/components/ui/gsap-hero-sequence"
import { GsapScrollReveal } from "@/components/ui/gsap-scroll-reveal"
import { GsapTextReveal } from "@/components/ui/gsap-text-reveal"
import { GsapMagnetic } from "@/components/ui/gsap-magnetic"
import { GsapStaggerGrid } from "@/components/ui/gsap-stagger-grid"
import {
  GsapParallax,
  GsapParallaxSection,
} from "@/components/ui/gsap-parallax"

import { HeroDashboardMockup } from "@/components/hero-dashboard-mockup"
import { Faq4 } from "@/components/faq/faq-4"
import { VsComparison } from "@/components/vs-comparison"
import { MobileShowcase } from "@/components/mobile-showcase"
import { SecurityGates } from "@/components/security-gates"
import { Testimonials } from "@/components/testimonials"

/* ─── DATA ─── */

const faqItems = [
  {
    question: "¿Qué es TML NEXUS y en qué se diferencia de un CMMS tradicional?",
    answer:
      "TML NEXUS es una plataforma SaaS de gestión integral de mantenimiento industrial. A diferencia de los CMMS tradicionales que solo registran tareas, NEXUS transforma el mantenimiento en una actividad estratégica: predice fallas, automatiza flujos de trabajo y genera dashboards con KPIs en tiempo real.",
  },
  {
    question: "¿Con qué sistemas se integra?",
    answer:
      "TML NEXUS se integra de forma nativa con sistemas ERP (SAP, Oracle), plataformas IoT para monitoreo de condición, y herramientas de análisis como Power BI y SAP PM, todo dentro de un entorno seguro y escalable.",
  },
  {
    question: "¿Cuánto demora la implementación?",
    answer:
      "El proyecto completo toma 8 semanas: análisis y diseño (semana 1-2), implementación y configuración (semana 2-4), pruebas QA (semana 4-5), entrenamiento por perfil (semana 5-6) y marcha blanca productiva con soporte dedicado (semana 6-8).",
  },
  {
    question: "¿Incluye capacitación de usuarios?",
    answer:
      "Sí. El programa \"Train the Users\" se adapta al tamaño de tu equipo: 2 sesiones para hasta 15 usuarios, 3 sesiones para 15-50 usuarios, y 4 sesiones para más de 50 usuarios. Cada sesión diferencia por perfil funcional (administrador, supervisor, técnico).",
  },
  {
    question: "¿Desde qué dispositivos se puede acceder?",
    answer:
      "La plataforma es 100% web — accesible desde computadores de escritorio, tablets y smartphones sin instalar nada. Ideal para gestión en terreno y en oficina simultáneamente.",
  },
  {
    question: "¿Cómo funciona el modelo de licenciamiento?",
    answer:
      "TML NEXUS opera con licenciamiento recurrente mensual. La membresía base incluye 20 usuarios, con posibilidad de escalar según las necesidades de la empresa. Sin contratos de permanencia.",
  },
]

const modules = [
  {
    icon: Bell,
    title: "Gestión de Avisos",
    description: "Tickets con ubicación técnica, equipo, síntomas y evidencia fotográfica. Un solo flujo para todas las ocurrencias.",
  },
  {
    icon: Wrench,
    title: "Órdenes de Trabajo",
    description: "Creación automática de OTs por criticidad. Flujo completo de gestión, asignación y cierre con trazabilidad.",
  },
  {
    icon: Database,
    title: "Gestión de Activos",
    description: "Inventario a nivel planta, ficha técnica por equipo, historial de intervenciones y control de repuestos.",
  },
  {
    icon: Settings,
    title: "Configuración Multi-Planta",
    description: "Sucursales, roles por perfil, templates de procedimientos y configuración de flujos por tipo de mantenimiento.",
  },
  {
    icon: BarChart3,
    title: "Dashboard de KPIs",
    description: "MTBF, MTTR, disponibilidad, cumplimiento PM, backlog, costos y recurrencia — todo filtrable en tiempo real.",
  },
  {
    icon: Shield,
    title: "Integraciones Enterprise",
    description: "Conexión nativa con SAP, ERP, IoT y Power BI. API abierta para integraciones personalizadas.",
  },
]

const implementationSteps = [
  {
    number: "01",
    title: "Análisis y Diseño",
    description: "Levantamiento de requerimientos funcionales y técnicos. Definición de alcance, KPIs objetivo y plan de migración de datos.",
    weeks: "Sem 1-2",
    icon: Target,
  },
  {
    number: "02",
    title: "Implementación",
    description: "Configuración de módulos, carga de datos maestros, personalización de flujos y configuración de integraciones.",
    weeks: "Sem 2-4",
    icon: Settings,
  },
  {
    number: "03",
    title: "Pruebas QA",
    description: "Ciclo de pruebas funcionales en ambiente de calidad. Validación de flujos críticos y ajustes antes de producción.",
    weeks: "Sem 4-5",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Entrenamiento",
    description: "Programa \"Train the Users\" diferenciado por perfil: administrador, supervisor y técnico. Práctica guiada en ambiente real.",
    weeks: "Sem 5-6",
    icon: Users,
  },
  {
    number: "05",
    title: "Marcha Blanca Productiva",
    description: "Validación en producción con usuarios finales. Soporte dedicado del equipo TML NEXUS durante la transición completa.",
    weeks: "Sem 6-8",
    icon: Zap,
  },
]

const painPoints = [
  {
    icon: AlertTriangle,
    stat: "68%",
    title: "del mantenimiento es reactivo",
    description: "Apagar incendios en lugar de prevenirlos cuesta hasta 3x más que un programa preventivo bien ejecutado.",
  },
  {
    icon: Timer,
    stat: "42%",
    title: "del tiempo se pierde buscando datos",
    description: "Planillas Excel, papeles y sistemas desconectados generan información fragmentada e inconsistente.",
  },
  {
    icon: CircleDollarSign,
    stat: "5-20%",
    title: "del presupuesto se desperdicia",
    description: "Sin visibilidad de KPIs, las decisiones se toman a ciegas: repuestos innecesarios, paradas evitables, personal mal asignado.",
  },
]

const industries = [
  { icon: "🏭", label: "Manufactura" },
  { icon: "⛏️", label: "Minería" },
  { icon: "🌊", label: "Acuicultura" },
  { icon: "🏗️", label: "Construcción" },
  { icon: "⚡", label: "Energía" },
  { icon: "🚢", label: "Logística" },
  { icon: "🏥", label: "Salud" },
]

/* ─── COMPONENTS ─── */

const navLinks = [
  { label: "Plataforma", href: "#features" },
  { label: "Implementación", href: "#process" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "App Móvil", href: "#app-movil" },
  { label: "FAQ", href: "#faq" },
]

function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-400 ${scrolled ? "border-b border-white/[0.055] bg-[rgba(3,9,20,0.88)] backdrop-blur-[32px] backdrop-saturate-[180%]" : "border-b border-transparent bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/images/logo-nexus.png" alt="TML NEXUS" width={36} height={36} className="rounded-lg" />
          <span className="text-lg font-bold tracking-tight">TML NEXUS</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-muted-foreground/65 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <GsapMagnetic strength={0.2}>
            <Button
              className="hidden cursor-pointer rounded-full sm:inline-flex"
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar demo
            </Button>
          </GsapMagnetic>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-muted-foreground transition-colors hover:bg-white/[0.08] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-background/95 px-4 pb-5 pt-3 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 border-t border-white/[0.06] pt-3">
              <Button
                className="w-full cursor-pointer rounded-full"
                onClick={() => {
                  setOpen(false)
                  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Solicitar demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function IndustriesBar() {
  return (
    <div className="border-t border-b border-border py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-6 text-center text-xs font-medium tracking-widest text-muted-foreground/60 uppercase">
          Industrias que operan con Nexus TML
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="flex items-center gap-2.5 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <span className="text-lg">{ind.icon}</span>
              <span className="text-sm font-bold text-foreground">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── PAGE ─── */

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col pt-16">
        {/* ── HERO ── */}
        <section className="relative min-h-screen overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40">
          <style>{`
            @keyframes hero-device-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
            @keyframes hero-chip-a { 0%,100%{transform:translate(0,0)} 50%{transform:translate(5px,-9px)} }
            @keyframes hero-chip-b { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-5px,9px)} }

          `}</style>

          {/* Background layers */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -top-[360px] -left-[220px] h-[900px] w-[900px] rounded-full opacity-[0.2] blur-[100px]" style={{ background: "radial-gradient(circle, oklch(62% 0.19 245), transparent 65%)", animation: "hero-drift 16s ease-in-out infinite" }} />
            <div className="absolute top-[40px] -right-[200px] h-[650px] w-[650px] rounded-full opacity-[0.14] blur-[100px]" style={{ background: "radial-gradient(circle, oklch(68% 0.17 210), transparent 65%)", animation: "hero-drift 20s ease-in-out infinite reverse" }} />
            <div className="absolute bottom-[80px] left-[38%] h-[450px] w-[450px] rounded-full opacity-[0.08] blur-[100px]" style={{ background: "radial-gradient(circle, oklch(55% 0.2 270), transparent 65%)", animation: "hero-drift 13s ease-in-out infinite 5s" }} />
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232459a8' fill-opacity='0.5'%3E%3Cpath d='M0 0h60v1H0zM0 0v60h1V0z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
            {/* Top gradient wash */}
            <div className="absolute inset-x-0 top-0 h-[600px]" style={{ background: "radial-gradient(ellipse 90% 55% at 50% -10%, rgba(36,89,168,.22) 0%, transparent 55%)" }} />
          </div>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
            <GsapHeroSequence steps={heroPresets.dramatic} delay={0.3}>
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">

                {/* Left — Content */}
                <div className="flex flex-col items-start">
                  <div data-gsap="badge" className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.04] px-4 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
                    <span className="h-[5px] w-[5px] rounded-full bg-primary" style={{ animation: "blink-cursor 2.4s ease-in-out infinite" }} />
                    <span className="text-[11px] font-medium tracking-[0.12em] text-muted-foreground/60 uppercase">CMMS — Trazabilidad real</span>
                  </div>

                  <h1
                    data-gsap="title"
                    className="mb-7 text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-5xl lg:text-[58px]"
                  >
                    El Mantenimiento<br />
                    que habla el idioma<br />
                    <span className="text-gradient-accent">de tu industria.</span>
                  </h1>

                  <p
                    data-gsap="subtitle"
                    className="mb-7 max-w-[455px] text-base leading-[1.82] tracking-[0.008em] text-muted-foreground"
                  >
                    Visualiza tu operación en tiempo real con dashboards precisos,
                    una app móvil nativa y PM exacto. Centraliza tu gestión en una
                    sola plataforma de rápida implementación.
                  </p>

                  <div data-gsap="cta" className="mb-3 flex flex-wrap items-center gap-4">
                    <GsapMagnetic strength={0.3}>
                      <Button
                        size="lg"
                        className="cursor-pointer rounded-xl px-8 text-[15px] font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.24),inset_0_-1px_0_rgba(0,0,0,0.18),0_8px_34px_rgba(36,89,168,0.48)]"
                        onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Ver demo en vivo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </GsapMagnetic>
                    <Button
                      size="lg"
                      variant="outline"
                      className="cursor-pointer rounded-xl border-white/[0.1] bg-white/[0.04] px-8 text-[15px] text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-sm hover:bg-white/[0.08] hover:text-foreground"
                      onClick={() => window.open("https://app.nexustml.cl", "_blank")}
                    >
                      Explorar plataforma →
                    </Button>
                  </div>

                  <div data-gsap="cta" className="flex items-center gap-5 border-t border-white/[0.055] pt-3">
                    <div className="flex -space-x-2.5">
                      {["JP", "MR", "AL", "CS"].map((initials) => (
                        <div
                          key={initials}
                          className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-background bg-gradient-to-br from-primary/70 to-primary/30 text-[10px] font-bold text-primary-foreground shadow-[0_2px_8px_rgba(0,0,0,0.32)]"
                        >
                          {initials}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-foreground">+200 técnicos activos</p>
                      <p className="text-[11.5px] text-muted-foreground/50">confían su operación diaria a Nexus TML</p>
                    </div>
                  </div>
                </div>

                {/* Right — Device mockup with floating chips */}
                <div data-gsap="image" className="relative origin-top-right scale-[0.88] lg:scale-[0.92]">
                  {/* Device */}
                  <div className="relative" style={{ animation: "hero-device-float 10s ease-in-out infinite", filter: "drop-shadow(0 50px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 50px rgba(36,89,168,0.2))" }}>
                    <div className="overflow-hidden rounded-[13px] border border-white/[0.1] bg-[#04091a] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.55)]">
                      <div className="flex h-8 items-center gap-3 border-b border-white/[0.052] px-3.5" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.055), rgba(255,255,255,0.018))" }}>
                        <div className="flex gap-[5px]">
                          <span className="block h-[9px] w-[9px] rounded-full bg-[rgba(255,95,87,0.75)]" />
                          <span className="block h-[9px] w-[9px] rounded-full bg-[rgba(254,188,46,0.75)]" />
                          <span className="block h-[9px] w-[9px] rounded-full bg-[rgba(40,200,65,0.75)]" />
                        </div>
                        <div className="mx-auto max-w-[220px] rounded-[5px] border border-white/[0.07] bg-white/[0.05] px-3 py-[3px] text-center font-mono text-[10px] text-white/20 tracking-[0.03em]">
                          app.nexustml.cl/dashboard
                        </div>
                      </div>
                      <HeroDashboardMockup />
                    </div>
                  </div>

                  {/* Floating KPI chips */}
                  <div className="pointer-events-none absolute -top-[18px] -left-7 z-10 hidden rounded-2xl border border-white/[0.1] bg-[rgba(3,8,20,0.92)] p-3.5 shadow-[0_28px_60px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.11)] backdrop-blur-[36px] md:block" style={{ animation: "hero-chip-a 8s ease-in-out infinite" }}>
                    <div className="text-[9.5px] font-semibold tracking-[0.1em] text-muted-foreground/50 uppercase">Disponibilidad</div>
                    <div className="text-2xl font-extrabold text-primary">98.2%</div>
                    <div className="text-[10.5px] text-muted-foreground/40">Actualizado en tiempo real</div>
                  </div>

                  <div className="pointer-events-none absolute -bottom-1 -right-8 z-10 hidden rounded-2xl border border-white/[0.1] bg-[rgba(3,8,20,0.92)] p-3.5 shadow-[0_28px_60px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.11)] backdrop-blur-[36px] md:block" style={{ animation: "hero-chip-b 10s ease-in-out infinite" }}>
                    <div className="text-[9.5px] font-semibold tracking-[0.1em] text-muted-foreground/50 uppercase">Cumplimiento PM</div>
                    <div className="text-2xl font-extrabold text-teal-400">97%</div>
                    <div className="text-[10.5px] text-muted-foreground/40">Meta: &gt;90%</div>
                  </div>

                  <div className="pointer-events-none absolute -top-3.5 -right-8 z-10 hidden rounded-2xl border border-white/[0.1] bg-[rgba(3,8,20,0.92)] p-3.5 shadow-[0_28px_60px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.11)] backdrop-blur-[36px] md:block" style={{ animation: "hero-chip-a 12s ease-in-out infinite 2s" }}>
                    <div className="text-[9.5px] font-semibold tracking-[0.1em] text-muted-foreground/50 uppercase">OTs críticas</div>
                    <div className="text-2xl font-extrabold text-amber-400">0</div>
                    <div className="text-[10.5px] text-teal-400/60">Sin urgencias</div>
                  </div>

                  <div className="pointer-events-none absolute top-[46%] -left-7 z-10 hidden rounded-2xl border border-white/[0.1] bg-[rgba(3,8,20,0.92)] p-3.5 shadow-[0_28px_60px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.11)] backdrop-blur-[36px] md:block" style={{ animation: "hero-chip-a 11s ease-in-out infinite 3s" }}>
                    <div className="text-[9.5px] font-semibold tracking-[0.1em] text-muted-foreground/50 uppercase">MTTR</div>
                    <div className="text-2xl font-extrabold text-indigo-400">2.4h</div>
                    <div className="text-[10.5px] text-muted-foreground/40">Tiempo medio de reparación</div>
                  </div>
                </div>

              </div>
            </GsapHeroSequence>
          </div>
        </section>

        {/* ── INDUSTRIES BAR ── */}
        <IndustriesBar />

        {/* ── PAIN POINTS ── */}
        <GsapScrollReveal animation="fade-up">
          <section id="problema" className="border-t border-border py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <p className="section-label mb-3">El problema</p>
                <GsapTextReveal
                  text="El mantenimiento reactivo le está costando millones a tu planta"
                  split="words"
                  animation="fade-up"
                  as="h2"
                  className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
                />
                <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
                  La mayoría de las plantas industriales operan con herramientas fragmentadas, procesos manuales
                  y cero visibilidad sobre sus activos. El resultado es predecible:
                </p>
              </div>

              <GsapStaggerGrid
                animation="scale"
                from="center"
                staggerAmount={0.5}
                ease="back.out(1.4)"
                className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
              >
                {painPoints.map((pain) => (
                  <div
                    key={pain.title}
                    className="group relative overflow-hidden rounded-2xl border border-red-500/10 bg-red-500/[0.03] p-8 transition-colors hover:border-red-500/20"
                  >
                    <pain.icon className="mb-4 h-8 w-8 text-red-400/80" />
                    <div className="mb-2 font-mono text-4xl font-bold text-red-400">{pain.stat}</div>
                    <h3 className="mb-3 text-lg font-semibold">{pain.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{pain.description}</p>
                  </div>
                ))}
              </GsapStaggerGrid>
            </div>
          </section>
        </GsapScrollReveal>

        {/* ── VS COMPARISON ── */}
        <VsComparison />

        {/* ── STATS ── */}
        <GsapScrollReveal animation="clip-up">
          <section id="stats" className="border-t border-border py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="section-label mb-3">Resultados medibles</p>
                <GsapTextReveal
                  text="Métricas reales de plantas en producción"
                  split="words"
                  animation="fade-up"
                  as="h2"
                  className="text-3xl font-bold tracking-tight md:text-4xl"
                />
              </div>

              <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:gap-8 lg:grid-cols-4">
                {[
                  { value: 99.99, suffix: "%", label: "Disponibilidad Mtto", description: "Uptime de activos críticos" },
                  { value: 28, suffix: "d", label: "MTBF promedio", description: "Tiempo medio entre fallas" },
                  { value: 2, suffix: "h", label: "MTTR promedio", description: "Tiempo medio de reparación" },
                  { value: 8, suffix: " sem", label: "Go-live completo", description: "De kickoff a producción" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center md:p-8"
                  >
                    <div className="flex items-center justify-center gap-0.5">
                      <NumberTicker
                        value={stat.value}
                        className="font-mono text-3xl font-bold tracking-tight text-primary md:text-5xl"
                      />
                      <span className="text-xl font-bold text-primary/60 md:text-2xl">{stat.suffix}</span>
                    </div>
                    <p className="mt-2 text-sm font-semibold">{stat.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </GsapScrollReveal>

        {/* ── FEATURES — Module Grid ── */}
        <GsapScrollReveal animation="fade-up">
          <section id="features" className="border-t border-border py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="section-label mb-3">La plataforma</p>
                <GsapTextReveal
                  text="Todo lo que necesitas para pasar de reactivo a predictivo"
                  split="words"
                  animation="fade-up"
                  as="h2"
                  className="text-3xl font-bold tracking-tight md:text-4xl"
                />
                <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                  Seis módulos integrados que cubren el ciclo completo de mantenimiento —
                  desde el aviso inicial hasta el análisis de causa raíz.
                </p>
              </div>

              <GsapStaggerGrid
                animation="scale"
                from="center"
                staggerAmount={0.6}
                ease="back.out(1.4)"
                className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {modules.map((mod) => (
                  <div
                    key={mod.title}
                    className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all hover:border-primary/20 hover:bg-white/[0.04] hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]"
                  >
                    <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3.5 transition-colors group-hover:bg-primary/20">
                      <mod.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{mod.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{mod.description}</p>
                  </div>
                ))}
              </GsapStaggerGrid>
            </div>
          </section>
        </GsapScrollReveal>

        {/* ── MOBILE SHOWCASE ── */}
        <GsapScrollReveal animation="fade-up">
          <section className="border-t border-border">
            <MobileShowcase />
          </section>
        </GsapScrollReveal>

        {/* ── SECURITY GATES ── */}
        <GsapScrollReveal animation="fade-up">
          <section className="border-t border-border">
            <SecurityGates />
          </section>
        </GsapScrollReveal>

        {/* ── IMPLEMENTATION PROCESS ── */}
        <GsapParallaxSection className="border-t border-border py-20 md:py-28">
          <GsapParallax speed={-0.2} className="absolute inset-0">
            <DotPattern className="opacity-20 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
          </GsapParallax>

          <div id="process" className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <GsapScrollReveal animation="fade-left">
              <div className="mx-auto mb-14 max-w-3xl text-center">
                <p className="section-label mb-3">Implementación</p>
                <GsapTextReveal
                  text="De 0 a productivo en 8 semanas"
                  split="words"
                  animation="blur"
                  as="h2"
                  className="text-3xl font-bold tracking-tight md:text-4xl"
                />
                <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                  Un proceso estructurado con acompañamiento continuo. Líder de proyecto dedicado,
                  consultor TI y entrenamiento por perfil funcional incluidos.
                </p>
              </div>
            </GsapScrollReveal>

            <div className="mx-auto max-w-5xl">
              <GsapStaggerGrid
                animation="fade-up"
                from="start"
                staggerAmount={0.8}
                className="flex flex-col gap-6"
              >
                {implementationSteps.map((step) => (
                  <div
                    key={step.number}
                    className="group flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-primary/20 hover:bg-white/[0.04] md:p-7"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      {step.number !== "05" && <div className="mt-2 h-full w-px bg-border" />}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1.5 flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <span className="rounded-full bg-primary/10 px-3 py-0.5 font-mono text-xs font-medium text-primary">
                          {step.weeks}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </GsapStaggerGrid>
            </div>
          </div>
        </GsapParallaxSection>

        {/* ── FAQ ── */}
        <GsapScrollReveal animation="fade-up">
          <section className="border-t border-border">
            <Faq4 title="Preguntas Frecuentes" description="FAQ" items={faqItems} />
          </section>
        </GsapScrollReveal>

        {/* ── TESTIMONIALS ── */}
        <GsapScrollReveal animation="fade-up">
          <Testimonials />
        </GsapScrollReveal>

        {/* ── CTA FINAL ── */}
        <GsapScrollReveal animation="scale-up">
          <section id="cta" className="relative overflow-hidden border-t border-border py-20 md:py-28">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-transparent" />
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left — Copy */}
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                    <CalendarCheck className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Demo personalizada de 30 minutos</span>
                  </div>
                  <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                    ¿Listo para operar<br />con{" "}
                    <span className="text-gradient-accent">datos reales?</span>
                  </h2>
                  <p className="mb-8 max-w-lg text-muted-foreground md:text-lg">
                    Solicita una demo personalizada y te mostramos Nexus TML funcionando
                    con datos de tu industria, en menos de 30 minutos.
                  </p>
                  <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      Sin tarjeta de crédito
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      Implementación en 8 semanas
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      Soporte dedicado en español
                    </span>
                  </div>
                </div>

                {/* Right — Form */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 shadow-[0_20px_60px_-10px_rgba(0,100,255,0.1)] backdrop-blur-sm">
                  <h3 className="mb-6 text-xl font-semibold">Solicitar demo gratuita</h3>
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => {
                      e.preventDefault()
                      const form = e.currentTarget
                      const data = new FormData(form)
                      const name = data.get("name")
                      const email = data.get("email")
                      const company = data.get("company")
                      const phone = data.get("phone")
                      window.open(
                        `mailto:contacto@nexuslabs.com?subject=Solicitud Demo — ${company}&body=Nombre: ${name}%0AEmail: ${email}%0AEmpresa: ${company}%0ATeléfono: ${phone}`,
                        "_blank"
                      )
                    }}
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="cta-name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                          Nombre completo
                        </label>
                        <input
                          id="cta-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Juan Pérez"
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary/40 focus:bg-white/[0.06]"
                        />
                      </div>
                      <div>
                        <label htmlFor="cta-email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                          Email corporativo
                        </label>
                        <input
                          id="cta-email"
                          name="email"
                          type="email"
                          required
                          placeholder="juan@empresa.cl"
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary/40 focus:bg-white/[0.06]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="cta-company" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                          Empresa
                        </label>
                        <input
                          id="cta-company"
                          name="company"
                          type="text"
                          required
                          placeholder="Nombre de tu empresa"
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary/40 focus:bg-white/[0.06]"
                        />
                      </div>
                      <div>
                        <label htmlFor="cta-phone" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                          Teléfono
                        </label>
                        <input
                          id="cta-phone"
                          name="phone"
                          type="tel"
                          placeholder="+56 9 1234 5678"
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors focus:border-primary/40 focus:bg-white/[0.06]"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="mt-2 w-full cursor-pointer rounded-xl text-base font-semibold shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                    >
                      Solicitar demo gratuita
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground/40">
                      Sin compromiso · Respuesta en menos de 24h
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </GsapScrollReveal>

        {/* ── FOOTER ── */}
        <footer className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Top: Brand + Nav Columns */}
            <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-12 md:py-16">
              {/* Brand column */}
              <div className="md:col-span-4 lg:col-span-5">
                <div className="flex items-center gap-2.5">
                  <Image src="/images/logo-nexus.png" alt="TML NEXUS" width={36} height={36} className="rounded-lg" />
                  <span className="text-lg font-bold tracking-tight">TML NEXUS</span>
                </div>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  Plataforma SaaS para la gestión integral de mantenimiento industrial.
                  Centraliza datos, automatiza flujos y transforma tu operación.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                  >
                    <LinkedInLogoIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Nav columns */}
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 lg:col-span-7">
                <div>
                  <h4 className="mb-4 text-sm font-semibold">Plataforma</h4>
                  <ul className="space-y-3">
                    {[
                      { text: "Funcionalidades", href: "#features" },
                      { text: "Dashboard de KPIs", href: "#features" },
                      { text: "Integraciones", href: "#features" },
                      { text: "Métricas", href: "#stats" },
                    ].map((link) => (
                      <li key={link.text}>
                        <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 text-sm font-semibold">Empresa</h4>
                  <ul className="space-y-3">
                    {[
                      { text: "Implementación", href: "#process" },
                      { text: "Preguntas Frecuentes", href: "#faq" },
                      { text: "Contactar Ventas", href: "#cta" },
                      { text: "Agendar Demo", href: "#cta" },
                    ].map((link) => (
                      <li key={link.text}>
                        <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 text-sm font-semibold">Legal</h4>
                  <ul className="space-y-3">
                    {[
                      "Política de Privacidad",
                      "Términos de Servicio",
                      "Política de Cookies",
                    ].map((text) => (
                      <li key={text}>
                        <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 sm:flex-row">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} TML NEXUS. Todos los derechos reservados.
              </p>
              <p className="text-xs text-muted-foreground/50">
                Hecho en Chile
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
