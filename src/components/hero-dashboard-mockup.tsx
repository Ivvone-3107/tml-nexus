"use client"

import {
  BarChart3,
  Bell,
  Wrench,
  Database,
  Settings,
  LayoutDashboard,
  TrendingUp,
  AlertTriangle,
  ClipboardList,
  FileCheck,
} from "lucide-react"

const sidebarItems = [
  { icon: LayoutDashboard, active: true },
  { icon: ClipboardList },
  { icon: Bell },
  { icon: FileCheck },
  { icon: BarChart3 },
  { icon: Database },
  { icon: Wrench },
  { icon: Settings },
]

const badActors = [
  { name: "Extrusora L6 PVC", hours: "212.7h", count: 14, pct: 95, color: "bg-red-500" },
  { name: "Extrusora L5 PVC", hours: "0.8h", count: 12, pct: 80, color: "bg-red-500" },
  { name: "Enrollador L2 PEBD", hours: "441.4h", count: 7, pct: 55, color: "bg-amber-500" },
]

export function HeroDashboardMockup() {
  return (
    <div className="flex select-none overflow-hidden rounded-b-[10px] text-[10px]">
      {/* Icon sidebar */}
      <div className="hidden w-10 shrink-0 flex-col items-center gap-1 border-r border-white/[0.06] bg-[#0a1628] py-2.5 sm:flex">
        <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-md bg-primary/25 text-[8px] font-bold text-primary">
          N
        </div>
        {sidebarItems.map(({ icon: Icon, active }, i) => (
          <div
            key={i}
            className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${active ? "bg-primary/15 text-primary" : "text-white/20"}`}
          >
            <Icon className="h-3 w-3" />
          </div>
        ))}
        <div className="mt-auto flex h-6 w-6 items-center justify-center rounded-full bg-teal-600/25 text-[6px] font-bold text-teal-300">
          NP
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 bg-[#070f1e] p-2.5 md:p-3">
        <div className="mb-2">
          <p className="text-[7px] text-muted-foreground/35">Buenas Noches, Nelson · Sáb, 18 Abr</p>
          <h3 className="text-[11px] font-bold text-foreground md:text-[12px]">Resumen Operativo</h3>
        </div>

        {/* KPI row */}
        <div className="mb-2 grid grid-cols-4 gap-1">
          {[
            { label: "DISPONIBILIDAD", value: "98.2%", color: "border-emerald-500/30", icon: "●", ic: "text-emerald-400" },
            { label: "OTS CRÍTICAS", value: "0", color: "border-emerald-500/30", icon: "⚡", ic: "text-amber-400" },
            { label: "PREV. VENCIDAS", value: "4", color: "border-red-500/30", icon: "⚠", ic: "text-red-400" },
            { label: "BACKLOG", value: "0.1 sem", color: "border-primary/30", icon: "⏱", ic: "text-primary" },
          ].map((k) => (
            <div key={k.label} className={`rounded-md border ${k.color} bg-white/[0.015] p-1.5`}>
              <span className={`text-[7px] ${k.ic}`}>{k.icon}</span>
              <p className="text-[11px] font-bold leading-tight text-foreground">{k.value}</p>
              <p className="text-[6px] font-semibold text-muted-foreground/40 uppercase">{k.label}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="mb-2 grid grid-cols-12 gap-1">
          {/* PM */}
          <div className="col-span-5 rounded-md border border-white/[0.05] bg-white/[0.015] p-1.5">
            <p className="mb-0.5 text-[7px] font-semibold text-foreground/50">Cumplimiento de PM</p>
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 60 60" className="h-11 w-11">
                <circle cx="30" cy="30" r="22" fill="none" stroke="white" strokeOpacity="0.04" strokeWidth="6" />
                <circle cx="30" cy="30" r="22" fill="none" stroke="#f97316" strokeWidth="6" strokeDasharray="138.2" transform="rotate(-90 30 30)" />
                <circle cx="30" cy="30" r="22" fill="none" stroke="#22c55e" strokeWidth="6" strokeDasharray="121" transform="rotate(-90 30 30)" />
                <text x="30" y="29" textAnchor="middle" className="fill-foreground text-[11px] font-bold">97%</text>
                <text x="30" y="37" textAnchor="middle" className="fill-muted-foreground text-[5px]">completadas</text>
              </svg>
            </div>
          </div>

          {/* Proactivo vs Reactivo */}
          <div className="col-span-4 rounded-md border border-white/[0.05] bg-white/[0.015] p-1.5">
            <p className="mb-0.5 text-[7px] font-semibold text-foreground/50">Proactivo vs Reactivo</p>
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 50 50" className="h-10 w-10">
                <circle cx="25" cy="25" r="23" fill="#ef4444" />
                <path d="M25,25 L25,2 A23,23 0 0,1 46,32 Z" fill="#22c55e" />
              </svg>
            </div>
            <div className="mt-0.5 flex justify-between px-1">
              <span className="text-[6px] text-emerald-400">14%</span>
              <span className="text-[6px] text-red-400">86%</span>
            </div>
          </div>

          {/* OTs bars */}
          <div className="col-span-3 rounded-md border border-white/[0.05] bg-white/[0.015] p-1.5">
            <p className="mb-0.5 text-[7px] font-semibold text-foreground/50">Estado OTs</p>
            <div className="flex items-end justify-center gap-1 pt-1">
              {[{ h: "h-3" }, { h: "h-2" }, { h: "h-6" }].map((b, i) => (
                <div key={i} className={`w-2.5 rounded-sm ${b.h} ${i === 2 ? "bg-emerald-500" : "bg-primary/50"}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-12 gap-1">
          {/* MTBF/MTTR */}
          <div className="col-span-7 rounded-md border border-white/[0.05] bg-white/[0.015] p-1.5">
            <div className="mb-1 flex items-center gap-1">
              <TrendingUp className="h-2 w-2 text-primary/40" />
              <p className="text-[7px] font-semibold text-foreground/50">Confiabilidad (MTBF vs MTTR)</p>
            </div>
            <div className="mb-1 grid grid-cols-3 gap-0.5">
              <div className="rounded bg-primary/10 px-1 py-0.5 text-center">
                <p className="text-[5px] text-primary/50 uppercase">MTBF</p>
                <p className="text-[9px] font-bold text-primary">20.6h</p>
              </div>
              <div className="rounded bg-red-500/10 px-1 py-0.5 text-center">
                <p className="text-[5px] text-red-400/50 uppercase">MTTR</p>
                <p className="text-[9px] font-bold text-red-400">25.5h</p>
              </div>
              <div className="rounded bg-white/[0.03] px-1 py-0.5 text-center">
                <p className="text-[5px] text-muted-foreground/30 uppercase">Fallas</p>
                <p className="text-[9px] font-bold text-foreground/70">35</p>
              </div>
            </div>
            <svg viewBox="0 0 200 28" className="h-4 w-full" preserveAspectRatio="none">
              <path d="M0,22 L40,18 L80,20 L120,15 L160,12 L200,6" fill="none" stroke="oklch(62% 0.19 245)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M0,14 L40,13 L80,14 L120,12 L160,11 L200,8" fill="none" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 2" />
            </svg>
          </div>

          {/* Bad actors */}
          <div className="col-span-5 rounded-md border border-white/[0.05] bg-white/[0.015] p-1.5">
            <div className="mb-1 flex items-center gap-1">
              <AlertTriangle className="h-2 w-2 text-amber-400/40" />
              <p className="text-[7px] font-semibold text-foreground/50">Top 5 Malos Actores</p>
            </div>
            <div className="space-y-1">
              {badActors.map((a) => (
                <div key={a.name}>
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] text-foreground/60">{a.name}</span>
                    <span className="flex h-3 w-3 items-center justify-center rounded-full bg-red-500/20 text-[5px] font-bold text-red-400">{a.count}</span>
                  </div>
                  <div className="mt-0.5 h-[2px] w-full rounded-full bg-white/[0.04]">
                    <div className={`h-full rounded-full ${a.color}`} style={{ width: `${a.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
