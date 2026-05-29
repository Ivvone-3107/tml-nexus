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
import { PhoneNuevaOT } from "@/components/phone-nueva-ot"

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
import { Marquee } from "@/components/ui/marquee"
import {
  Factory,
  Pickaxe,
  Fish,
  HardHat,
  Bolt,
  Ship,
  HeartPulse,
} from "lucide-react"
// Phone screens use real screenshots now
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
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-400 ${scrolled ? "border-b border-white/[0.06] bg-[rgba(10,18,40,0.85)] backdrop-blur-[32px] backdrop-saturate-[180%]" : "border-b border-transparent bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <Image src="/images/logo-nexus-white.png" alt="TML NEXUS" width={36} height={36} className="h-9 w-auto" />
          <span className="text-xl font-bold tracking-tight">TML NEXUS</span>
        </a>
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <GsapMagnetic strength={0.2}>
            <Button
              className="hidden cursor-pointer rounded-full px-6 py-2.5 text-[14px] font-semibold shadow-[0_4px_20px_rgba(59,130,246,0.3)] sm:inline-flex"
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
    <div className="relative border-t border-b border-white/[0.06] py-10 md:py-14">
      <p className="mb-6 text-center text-sm font-semibold tracking-widest text-white/40 uppercase">
        Industrias que operan con Nexus TML
      </p>
      <div className="relative mx-auto max-w-5xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <Marquee className="[--duration:30s] [--gap:3rem]">
          {[
            { icon: Factory, label: "Manufactura" },
            { icon: Pickaxe, label: "Minería" },
            { icon: Fish, label: "Acuicultura" },
            { icon: HardHat, label: "Construcción" },
            { icon: Bolt, label: "Energía" },
            { icon: Ship, label: "Logística" },
            { icon: HeartPulse, label: "Salud" },
          ].map((ind) => (
            <div key={ind.label} className="flex flex-col items-center gap-2.5">
              <ind.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-white/70">{ind.label}</span>
            </div>
          ))}
        </Marquee>
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
        <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">
          <style>{`
            @keyframes pf1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
            @keyframes pf2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
            @keyframes pf3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
            @keyframes glow-pulse { 0%,100%{opacity:0.15} 50%{opacity:0.25} }
          `}</style>

          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {/* Glow behind phones */}
            <div className="absolute top-[15%] right-[10%] h-[600px] w-[600px] rounded-full opacity-[0.14] blur-[120px]" style={{ background: "radial-gradient(circle, oklch(55% 0.22 245), transparent 60%)", animation: "glow-pulse 6s ease-in-out infinite" }} />
            <div className="absolute bottom-[10%] right-[25%] h-[400px] w-[400px] rounded-full opacity-[0.10] blur-[100px]" style={{ background: "radial-gradient(circle, oklch(58% 0.18 260), transparent 60%)" }} />
            {/* Subtle glow left */}
            <div className="absolute top-[30%] -left-[10%] h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: "radial-gradient(circle, oklch(55% 0.15 250), transparent 60%)" }} />
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234488cc' fill-opacity='0.4'%3E%3Cpath d='M0 0h60v1H0zM0 0v60h1V0z'/%3E%3C/g%3E%3C/svg%3E\")", maskImage: "radial-gradient(ellipse 70% 60% at 65% 50%, black, transparent)" }} />
          </div>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-12">
            <GsapHeroSequence steps={heroPresets.dramatic} delay={0.3}>
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">

                {/* Left — Content */}
                <div className="flex flex-col items-start">
                  <div data-gsap="badge" className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_6px_2px_rgba(59,130,246,0.4)]" />
                    <span className="text-[11px] font-medium tracking-[0.1em] text-muted-foreground/60 uppercase">Plataforma CMMS</span>
                  </div>

                  <h1
                    data-gsap="title"
                    className="mb-7 text-5xl font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-6xl lg:text-[62px]"
                  >
                    El control total de tu{" "}
                    <span className="italic text-primary">mantenimiento</span>
                    <br />
                    en una sola app
                  </h1>

                  <p
                    data-gsap="subtitle"
                    className="mb-8 max-w-[440px] text-base leading-[1.75] text-muted-foreground md:text-lg"
                  >
                    Gestiona órdenes de trabajo, activos,
                    solicitudes y más, desde cualquier
                    lugar y en tiempo real.
                  </p>

                  <div data-gsap="cta" className="mb-10 flex flex-wrap items-center gap-4">
                    <GsapMagnetic strength={0.3}>
                      <Button
                        size="lg"
                        className="cursor-pointer rounded-xl px-8 text-[15px] font-semibold shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                        onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Solicitar demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </GsapMagnetic>
                    <Button
                      size="lg"
                      variant="outline"
                      className="cursor-pointer rounded-xl border-white/[0.1] bg-white/[0.04] px-8 text-[15px] text-muted-foreground hover:bg-white/[0.08] hover:text-foreground"
                      onClick={() => window.open("https://app.nexustml.cl", "_blank")}
                    >
                      Explorar plataforma →
                    </Button>
                  </div>

                  <div data-gsap="cta" className="flex flex-wrap items-start gap-8">
                    {[
                      { icon: Shield, label: "Seguro", sublabel: "y Confiable" },
                      { icon: Timer, label: "En Tiempo Real", sublabel: "y Productivo" },
                      { icon: BarChart3, label: "Datos Claros,", sublabel: "Mejores Decisiones" },
                    ].map((feat) => (
                      <div key={feat.label} className="flex flex-col items-center gap-2 text-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12]">
                          <feat.icon className="h-5 w-5 text-white/80" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">{feat.label}</p>
                          <p className="text-[11px] text-muted-foreground/60">{feat.sublabel}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — 3 Phone mockups, tightly grouped */}
                <div data-gsap="image" className="relative mx-auto flex h-[480px] w-full max-w-[540px] items-end justify-center pb-10 md:h-[580px] md:pb-14 lg:h-[640px]">
                  {/* Glow behind phones */}
                  <div className="pointer-events-none absolute bottom-[18%] left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-[0.45] blur-[100px]" style={{ background: "radial-gradient(circle, oklch(48% 0.28 245), transparent 60%)" }} />

                  {/* Phone 1 — Login (left / behind) */}
                  <div
                    className="absolute bottom-0 left-0 z-0 w-[160px] md:w-[185px] lg:w-[200px]"
                    style={{ animation: "pf1 7s ease-in-out infinite" }}
                  >
                    <div className="rounded-[38px] bg-[#1c1c1e] p-[4px] shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.4)]" style={{ border: "2px solid rgba(255,255,255,0.35)" }}>
                      <div className="relative overflow-hidden rounded-[30px]">
                        <div className="pointer-events-none absolute top-0 left-1/2 z-10 h-[18px] w-[55px] -translate-x-1/2 rounded-b-[14px] bg-[#1c1c1e]" />
                        <img src="/images/screen-login.jpeg" alt="TML NEXUS — Login" className="w-full" />
                      </div>
                    </div>
                  </div>

                  {/* Phone 2 — Órdenes (center / front) */}
                  <div
                    className="relative z-20 w-[180px] md:w-[210px] lg:w-[230px]"
                    style={{ animation: "pf2 8s ease-in-out infinite 0.4s" }}
                  >
                    <div className="rounded-[42px] bg-[#1c1c1e] p-[5px] shadow-[0_35px_80px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.4),0_0_40px_rgba(59,130,246,0.06)]" style={{ border: "2px solid rgba(255,255,255,0.35)" }}>
                      <div className="relative overflow-hidden rounded-[34px]">
                        <div className="pointer-events-none absolute top-0 left-1/2 z-10 h-[20px] w-[65px] -translate-x-1/2 rounded-b-[14px] bg-[#1c1c1e]" />
                        <img src="/images/screen-ordenes.jpeg" alt="TML NEXUS — Órdenes de trabajo" className="w-full" />
                      </div>
                    </div>
                  </div>

                  {/* Phone 3 — Sidebar (right / behind) */}
                  <div
                    className="absolute bottom-0 right-0 z-10 w-[160px] md:w-[185px] lg:w-[200px]"
                    style={{ animation: "pf3 9s ease-in-out infinite 0.8s" }}
                  >
                    <div className="rounded-[38px] bg-[#1c1c1e] p-[4px] shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.4)]" style={{ border: "2px solid rgba(255,255,255,0.35)" }}>
                      <div className="relative overflow-hidden rounded-[30px]">
                        <div className="pointer-events-none absolute top-0 left-1/2 z-10 h-[18px] w-[55px] -translate-x-1/2 rounded-b-[14px] bg-[#1c1c1e]" />
                        <img src="/images/screen-sidebar.jpeg" alt="TML NEXUS — Menú de navegación" className="w-full" />
                      </div>
                    </div>
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

              {/* MacBook 3D mockup */}
              <div className="mx-auto mb-16 max-w-4xl">
                <div>
                  {/* Screen */}
                  <div className="rounded-t-2xl border-[3px] border-[#2a2a2e] bg-[#1c1c1e] p-[5px] shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(59,130,246,0.08)]">
                    <div className="flex h-8 items-center gap-2 rounded-t-xl bg-[#2a2a2e] px-4">
                      <div className="flex gap-1.5">
                        <span className="block h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
                        <span className="block h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
                        <span className="block h-[10px] w-[10px] rounded-full bg-[#28c840]" />
                      </div>
                      <div className="mx-auto rounded-md bg-white/[0.06] px-6 py-[3px] text-center font-mono text-[11px] text-white/30">
                        app.nexustml.cl/dashboard
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-b-xl">
                      <img src="/images/screen-dashboard-web.jpeg" alt="TML NEXUS — Dashboard de KPIs en tiempo real" className="w-full" />
                    </div>
                  </div>
                  {/* MacBook base/hinge */}
                  <div className="relative mx-auto h-4 w-[85%] rounded-b-lg bg-gradient-to-b from-[#3a3a3e] to-[#2a2a2e]">
                    <div className="absolute left-1/2 top-[2px] h-[4px] w-[60px] -translate-x-1/2 rounded-full bg-white/[0.08]" />
                  </div>
                  <div className="mx-auto h-[6px] w-[102%] -mt-[1px] rounded-b-xl bg-[#222224] shadow-[0_8px_30px_rgba(0,0,0,0.5)]" />
                </div>
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
                    className="group relative overflow-hidden rounded-2xl border border-violet-500/25 bg-violet-500/[0.08] p-6 transition-colors hover:border-violet-500/40 hover:bg-violet-500/[0.12]"
                  >
                    <pain.icon className="mb-3 h-7 w-7 text-violet-400" />
                    <div className="mb-1.5 font-mono text-3xl font-bold text-violet-400">{pain.stat}</div>
                    <h3 className="mb-2 text-base font-bold text-white">{pain.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{pain.description}</p>
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

              <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:gap-6 lg:grid-cols-4">
                {[
                  { value: 99.99, suffix: "%", label: "Disponibilidad Mtto", description: "Uptime de activos críticos", icon: Shield },
                  { value: 28, suffix: "d", label: "MTBF promedio", description: "Tiempo medio entre fallas", icon: Timer },
                  { value: 2, suffix: "h", label: "MTTR promedio", description: "Tiempo medio de reparación", icon: Zap },
                  { value: 8, suffix: " sem", label: "Go-live completo", description: "De kickoff a producción", icon: CalendarCheck },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 text-center transition-all hover:border-primary/30 hover:bg-primary/[0.08]"
                  >
                    <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex items-baseline justify-center gap-0.5">
                      <NumberTicker
                        value={stat.value}
                        className="font-mono text-4xl font-bold tracking-tight text-white"
                      />
                      <span className="text-lg font-bold text-primary">{stat.suffix}</span>
                    </div>
                    <p className="mt-2 text-sm font-bold text-white/90">{stat.label}</p>
                    <p className="mt-1 text-xs text-white/45">{stat.description}</p>
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
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_280px] lg:gap-12">
                {/* Timeline */}
                <GsapStaggerGrid
                  animation="fade-up"
                  from="start"
                  staggerAmount={0.6}
                  className="relative flex flex-col gap-0"
                >
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

                  {implementationSteps.map((step) => (
                    <div
                      key={step.number}
                      className="group relative flex gap-5 py-3 md:gap-6"
                    >
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 transition-all group-hover:border-primary/60 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <span className="rounded-full bg-primary/10 px-3 py-0.5 font-mono text-xs font-bold text-primary">
                            {step.weeks}
                          </span>
                        </div>
                        <p className="max-w-lg text-base leading-relaxed text-white/50">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </GsapStaggerGrid>

                {/* Phone mockup sticky */}
                <div className="hidden lg:flex lg:items-center lg:justify-center">
                  <div className="sticky top-24 w-[250px]">
                    <div className="pointer-events-none absolute -inset-20 -z-10 rounded-full opacity-[0.60] blur-[60px]" style={{ background: "radial-gradient(circle, oklch(45% 0.28 245), transparent 60%)" }} />
                    <div className="rounded-[36px] bg-[#1c1c1e] p-[4px] shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.06)]" style={{ border: "2px solid rgba(255,255,255,0.35)" }}>
                      <div className="relative overflow-hidden rounded-[32px] bg-white">
                        <div className="pointer-events-none absolute top-0 left-1/2 z-10 h-[16px] w-[55px] -translate-x-1/2 rounded-b-[12px] bg-[#1c1c1e]" />
                        <div className="aspect-[9/19]">
                          <PhoneNuevaOT />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GsapParallaxSection>

        {/* ── FAQ ── */}
        <GsapScrollReveal animation="fade-up">
          <section className="border-t border-border">
            <Faq4 title="Preguntas Frecuentes" description="FAQ" items={faqItems} />
          </section>
        </GsapScrollReveal>

        {/* ── TESTIMONIALS — removed ── */}

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
                  <Image src="/images/logo-nexus-white.png" alt="TML NEXUS" width={32} height={32} />
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
