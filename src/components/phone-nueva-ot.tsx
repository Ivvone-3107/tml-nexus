export function PhoneNuevaOT() {
  return (
    <div className="flex h-full flex-col bg-white text-[#0B1628]">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 border-b border-gray-100 px-3 py-2.5">
        <span className="absolute left-3 text-[8px] text-[#0B1628]">←</span>
        <div className="flex items-center gap-1">
          <div className="flex h-3 w-3 items-center justify-center rounded bg-[#0B1628]">
            <span className="text-[3px] font-bold text-white">N</span>
          </div>
          <span className="text-[7px] font-bold text-[#0B1628]">TML NEXUS</span>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3 pb-2 text-center">
        <p className="text-[10px] font-bold text-[#0B1628]">Nueva Orden de Trabajo</p>
        <p className="text-[5px] text-gray-400">Complete la información para crear la OT</p>
      </div>

      {/* Form */}
      <div className="flex-1 space-y-2.5 overflow-hidden px-4">
        {/* Tipo de OT */}
        <div>
          <label className="mb-0.5 block text-[6px] font-bold text-[#0B1628]">Tipo de OT</label>
          <div className="flex items-center justify-between rounded-lg border border-gray-200 px-2 py-1.5">
            <span className="text-[7px] text-gray-700">Mantenimiento Correctivo</span>
            <span className="text-[6px] text-gray-400">▼</span>
          </div>
        </div>

        {/* Prioridad */}
        <div>
          <label className="mb-0.5 block text-[6px] font-bold text-[#0B1628]">Prioridad</label>
          <div className="flex items-center justify-between rounded-lg border border-gray-200 px-2 py-1.5">
            <div className="flex items-center gap-1">
              <span className="text-[6px]">⚠️</span>
              <span className="text-[7px] font-semibold text-gray-700">Alta</span>
            </div>
            <span className="text-[6px] text-gray-400">▼</span>
          </div>
        </div>

        {/* Activo */}
        <div>
          <label className="mb-0.5 block text-[6px] font-bold text-[#0B1628]">Activo</label>
          <div className="flex items-center justify-between rounded-lg border border-gray-200 px-2 py-1.5">
            <span className="text-[7px] text-gray-700">Caldera Industrial #1 (CAL-001)</span>
            <span className="text-[6px] text-gray-400">▼</span>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <label className="mb-0.5 block text-[6px] font-bold text-[#0B1628]">Descripción de la Falla</label>
          <div className="rounded-lg border border-gray-200 px-2 py-1.5">
            <p className="text-[6.5px] leading-relaxed text-gray-600">
              Fuga de vapor en la conexión de la válvula de seguridad.
            </p>
            <p className="mt-1 text-right text-[5px] text-gray-400">55/250</p>
          </div>
        </div>

        {/* Ubicación */}
        <div>
          <label className="mb-0.5 block text-[6px] font-bold text-[#0B1628]">Ubicación</label>
          <div className="flex items-center justify-between rounded-lg border border-gray-200 px-2 py-1.5">
            <span className="text-[7px] text-gray-700">Planta Sur &gt; Sala de Calderas</span>
            <span className="text-[6px] text-gray-400">▼</span>
          </div>
        </div>

        {/* Solicitante */}
        <div>
          <label className="mb-0.5 block text-[6px] font-bold text-[#0B1628]">Solicitante</label>
          <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-2 py-1.5">
            <div className="flex h-3 w-3 items-center justify-center rounded-full bg-gray-100">
              <span className="text-[4px] text-gray-500">👤</span>
            </div>
            <span className="text-[7px] text-gray-700">Luis</span>
          </div>
        </div>

        {/* Fecha */}
        <div>
          <label className="mb-0.5 block text-[6px] font-bold text-[#0B1628]">Fecha Programada</label>
          <div className="flex gap-1.5">
            <div className="flex flex-1 items-center gap-1 rounded-lg border border-gray-200 px-2 py-1.5">
              <span className="text-[5px]">📅</span>
              <span className="text-[7px] text-gray-700">20/05/2026</span>
            </div>
            <div className="flex w-[40%] items-center gap-1 rounded-lg border border-gray-200 px-2 py-1.5">
              <span className="text-[7px] text-gray-700">08:00</span>
              <span className="ml-auto text-[5px]">🕐</span>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="px-4 py-3">
        <div className="rounded-xl bg-[#0B1628] py-2 text-center text-[8px] font-bold text-white">
          Crear Orden de Trabajo
        </div>
      </div>
    </div>
  )
}
