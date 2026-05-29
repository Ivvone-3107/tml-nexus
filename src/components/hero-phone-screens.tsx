export function LoginScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f8f9fb]">
      <div className="flex flex-1 flex-col items-center justify-center px-5">
        <div className="mb-5 flex h-10 w-24 items-center justify-center rounded-lg bg-[#0B1628]">
          <span className="text-[7px] font-bold tracking-widest text-white">TML NEXUS</span>
        </div>
        <p className="mb-1 text-[11px] font-bold text-[#0B1628]">Bienvenido</p>
        <p className="mb-5 text-[6px] text-gray-400">Ingrese a su cuenta para continuar</p>
        <div className="mb-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2">
          <span className="text-[7px] text-gray-300">tu@email.com</span>
        </div>
        <div className="mb-4 w-full rounded-lg border border-gray-200 bg-white px-3 py-2">
          <span className="text-[7px] text-gray-300">••••••••</span>
        </div>
        <div className="w-full rounded-lg bg-[#3b5998] py-2.5 text-center text-[8px] font-bold text-white">
          Iniciar Sesión
        </div>
      </div>
    </div>
  )
}

export function OrdersScreen() {
  return (
    <div className="relative flex h-full flex-col bg-[#f8f9fb]">
      {/* Header */}
      <div className="bg-white px-4 pt-3 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-extrabold text-[#0B1628]">Órdenes</p>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0B1628] text-[5px] font-bold text-white">AS</div>
        </div>
        <div className="mt-2 flex gap-1">
          {["Todas", "Todas", "Todos"].map((t, i) => (
            <div key={i} className="flex-1 rounded border border-gray-200 bg-white px-1 py-1 text-center text-[5px] text-gray-500">{t}</div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="flex-1 space-y-2 px-3 pt-2">
        <div className="rounded-xl border-l-[3px] border-l-amber-400 bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="mb-1 flex items-center gap-1">
            <span className="rounded bg-red-50 px-1 py-px text-[4px] font-bold text-red-500">ALTA</span>
            <span className="rounded bg-amber-50 px-1 py-px text-[4px] font-bold text-amber-600">PENDIENTE</span>
          </div>
          <p className="text-[7px] font-bold leading-snug text-[#0B1628]">Rotura de Correa Principal — Industrial #1</p>
          <div className="mt-1.5 space-y-px rounded bg-gray-50 p-1.5">
            <div className="h-[3px] w-[70%] rounded-full bg-gray-200" />
            <div className="h-[3px] w-[55%] rounded-full bg-gray-200" />
            <div className="h-[3px] w-[60%] rounded-full bg-gray-200" />
          </div>
        </div>

        <div className="rounded-xl border-l-[3px] border-l-blue-400 bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="mb-1 flex items-center gap-1">
            <span className="rounded bg-blue-50 px-1 py-px text-[4px] font-bold text-blue-500">BAJA</span>
            <span className="rounded bg-amber-50 px-1 py-px text-[4px] font-bold text-amber-600">PENDIENTE</span>
          </div>
          <p className="text-[7px] font-bold leading-snug text-[#0B1628]">Lubricación y Ajuste — A #3</p>
          <div className="mt-1.5 space-y-px rounded bg-gray-50 p-1.5">
            <div className="h-[3px] w-[65%] rounded-full bg-gray-200" />
            <div className="h-[3px] w-[50%] rounded-full bg-gray-200" />
            <div className="h-[3px] w-[58%] rounded-full bg-gray-200" />
          </div>
        </div>

        <div className="rounded-xl border-l-[3px] border-l-emerald-400 bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="mb-1 flex items-center gap-1">
            <span className="rounded bg-emerald-50 px-1 py-px text-[4px] font-bold text-emerald-600">COMPLETADA</span>
          </div>
          <p className="text-[7px] font-bold leading-snug text-[#0B1628]">Inspección Preventiva — Línea 2</p>
          <div className="mt-1.5 space-y-px rounded bg-gray-50 p-1.5">
            <div className="h-[3px] w-[60%] rounded-full bg-gray-200" />
            <div className="h-[3px] w-[45%] rounded-full bg-gray-200" />
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="absolute right-3 bottom-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#2563eb] shadow-lg">
        <span className="text-[14px] font-light leading-none text-white">+</span>
      </div>

      {/* Tab bar */}
      <div className="flex items-center justify-around border-t border-gray-100 bg-white py-2">
        {["Órdenes", "Solicitudes", "Dashboard", "Más"].map((t, i) => (
          <div key={t} className="flex flex-col items-center gap-0.5">
            <div className={`h-1 w-1 rounded-full ${i === 0 ? "bg-[#2563eb]" : "bg-gray-300"}`} />
            <span className={`text-[5px] ${i === 0 ? "font-bold text-[#2563eb]" : "text-gray-400"}`}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SidebarScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 pt-4 pb-3">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#0B1628] text-[4px] font-bold text-white">N</div>
        <span className="text-[9px] font-bold text-[#0B1628]">TML NEXUS</span>
      </div>

      <div className="flex-1 px-3 pt-3">
        <p className="mb-2 px-1 text-[5px] font-bold uppercase tracking-widest text-gray-300">Mantenimiento</p>
        {[
          { label: "Dashboard", active: true },
          { label: "Órdenes de Trabajo" },
          { label: "Solicitudes Correctivas" },
          { label: "Planes de Mantenimiento" },
          { label: "Reportes" },
        ].map((item) => (
          <div
            key={item.label}
            className={`mb-0.5 rounded-lg px-2.5 py-2 ${item.active ? "bg-blue-50" : ""}`}
          >
            <span className={`text-[7px] ${item.active ? "font-bold text-[#2563eb]" : "text-gray-600"}`}>
              {item.active && "● "}{item.label}
            </span>
          </div>
        ))}

        <p className="mb-2 mt-4 px-1 text-[5px] font-bold uppercase tracking-widest text-gray-300">Activos</p>
        {["Lista de Activos", "Repuestos"].map((label) => (
          <div key={label} className="mb-0.5 rounded-lg px-2.5 py-2">
            <span className="text-[7px] text-gray-600">{label}</span>
          </div>
        ))}

        <p className="mb-2 mt-4 px-1 text-[5px] font-bold uppercase tracking-widest text-gray-300">Configuración</p>
        <div className="rounded-lg px-2.5 py-2">
          <span className="text-[7px] text-gray-600">Sucursales</span>
        </div>
      </div>

      {/* User */}
      <div className="flex items-center gap-2 border-t border-gray-100 px-4 py-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1628] text-[5px] font-bold text-white">AS</div>
        <div>
          <p className="text-[6px] font-bold text-[#0B1628]">Administrador</p>
          <p className="text-[5px] text-gray-400">Sistema</p>
        </div>
      </div>
    </div>
  )
}
