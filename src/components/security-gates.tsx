"use client"

import {
  FileText,
  ClipboardCheck,
  Lock,
  Play,
  ArrowDown,
  CheckCircle2,
} from "lucide-react"

const checklistItems = [
  "AST con checklist de 10 puntos y análisis de peligros",
  "LOTO con bloqueo secuencial y foto-evidencia por punto",
  "Verificación de energía cero antes de intervenir",
  "Firma digital de técnico y supervisor en móvil",
]

const flowSteps = [
  {
    icon: FileText,
    name: "OT creada",
    description: "Asignada al técnico con prioridad y activo",
    badge: null,
    style: "border-white/[0.08] bg-white/[0.02]",
    iconBg: "bg-white/[0.06]",
  },
  {
    icon: ClipboardCheck,
    name: "Gate #1 — AST",
    description: "10 ítems · peligros · EPP · firma supervisor",
    badge: { text: "OBLIGATORIO", bg: "bg-amber-500/10", color: "text-amber-400", border: "border-amber-500/20" },
    style: "border-amber-500/30 bg-amber-500/[0.04]",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: Lock,
    name: "Gate #2 — LOTO",
    description: "Bloqueo secuencial · energía cero · foto evidencia",
    badge: { text: "SI APLICA", bg: "bg-red-500/10", color: "text-red-400", border: "border-red-500/20" },
    style: "border-red-500/30 bg-red-500/[0.04]",
    iconBg: "bg-red-500/10",
  },
  {
    icon: Play,
    name: "OT en Progreso",
    description: "Solo accesible cuando todos los gates están aprobados",
    badge: { text: "HABILITADA", bg: "bg-teal-500/10", color: "text-teal-400", border: "border-teal-500/20" },
    style: "border-teal-500/30 bg-teal-500/[0.04]",
    iconBg: "bg-teal-500/10",
  },
]

export function SecurityGates() {
  return (
    <section id="seguridad" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.06] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              <span className="text-xs font-medium text-red-300">Diferenciador único</span>
            </div>

            <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Seguridad que no se puede{" "}
              <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                saltarse
              </span>
            </h2>

            <p className="mb-8 max-w-xl text-muted-foreground md:text-lg">
              Los CMMS tradicionales tratan la seguridad como un módulo opcional. En Nexus TML es
              un gate obligatorio: el técnico no puede iniciar una OT sin completar el AST y el
              LOTO. Sin excepción.
            </p>

            <ul className="space-y-4">
              {checklistItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/[0.04] px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span className="text-sm leading-relaxed text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-3">
            {flowSteps.map((step, i) => (
              <div key={step.name} className="w-full max-w-md">
                <div
                  className={`flex items-center gap-4 rounded-xl border p-4 transition-all hover:translate-x-1 ${step.style}`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${step.iconBg}`}
                  >
                    <step.icon className="h-5 w-5 text-foreground/80" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">{step.name}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>

                  {step.badge && (
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wide ${step.badge.bg} ${step.badge.color} ${step.badge.border}`}
                    >
                      {step.badge.text}
                    </span>
                  )}
                </div>

                {i < flowSteps.length - 1 && (
                  <div className="flex justify-center py-1.5">
                    <ArrowDown className="h-4 w-4 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
