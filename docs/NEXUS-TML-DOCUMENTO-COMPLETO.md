# TML NEXUS — Documento Completo del Producto

> Plataforma SaaS de Gestión Integral de Mantenimiento Industrial

---

## 1. Qué es TML NEXUS

TML NEXUS es una plataforma SaaS (Software as a Service) de gestión, automatización y optimización del mantenimiento industrial, diseñada para abordar los desafíos reales de productividad, trazabilidad y confiabilidad operativa.

A diferencia de los CMMS tradicionales que solo registran tareas o digitalizan formularios, TML NEXUS está concebido para transformar el mantenimiento en una actividad **estratégica, predictiva y altamente conectada**.

### Problema que resuelve

En las industrias, cada día se generan miles de datos que se dispersan en hojas de cálculo, correos y sistemas desconectados. Esto provoca:

| Problema | Impacto |
|----------|---------|
| 68% del mantenimiento es reactivo | Cuesta hasta 3x más que un programa preventivo bien ejecutado |
| 42% del tiempo se pierde buscando datos | Planillas Excel, papeles y sistemas desconectados generan información fragmentada |
| 5-20% del presupuesto se desperdicia | Sin KPIs, las decisiones se toman a ciegas: repuestos innecesarios, paradas evitables, personal mal asignado |

### Propuesta de valor

TML NEXUS centraliza la información en un solo entorno digital, convirtiendo los datos en decisiones inteligentes y acciones eficientes. Con una interfaz intuitiva y moderna, los equipos pueden:

- Visualizar operaciones en **tiempo real**
- Planificar tareas **preventivas y predictivas**
- Analizar el desempeño de activos desde **cualquier dispositivo**
- Gestionar reglas de mantenimiento complejas
- Integrarse con sistemas **ERP, IoT y plataformas de análisis** (Power BI, SAP PM)

---

## 2. Diferenciación competitiva

### Nexus TML vs. Soluciones Tradicionales

| Soluciones Tradicionales | Nexus TML |
|--------------------------|-----------|
| Implementación de 3-6 meses con consultoras externas | Activos y equipos configurados y operando en **8 semanas** |
| Interfaz de escritorio, alta resistencia al cambio en terreno | App nativa iOS/Android: el técnico cierra OTs en **3 clics** |
| Planificación rígida, desconectada de turnos reales | Programación adaptable a la rotación y carga de trabajo real |
| Análisis reactivo y manual | CMMS con **IA propia**: asistencia inteligente para diagnósticos y pautas |
| Contratos anuales amarrados, soporte lento o en inglés | Pricing flexible sin amarres, soporte técnico **en tiempo real y en español** |
| Datos en silos, requiere exportar a Excel | Dashboard gerencial automático: Disponibilidad, MTBF y MTTR |

### Claim principal

> "Construido para el técnico, no para el consultor."

---

## 3. Industrias objetivo

| Industria | Icono |
|-----------|-------|
| Manufactura | 🏭 |
| Minería | ⛏️ |
| Acuicultura | 🌊 |
| Construcción | 🏗️ |
| Energía | ⚡ |
| Logística | 🚢 |
| Salud | 🏥 |

---

## 4. Módulos de la plataforma

### 4.1 Gestión de Avisos
Creación de tickets de ocurrencias mediante formulario: fecha/hora, ubicación técnica, equipo involucrado, síntomas, detalle textual y evidencia fotográfica. Un solo flujo para todas las ocurrencias.

### 4.2 Órdenes de Trabajo (OTs)
- Creación **automática** de OTs por criticidad
- Las de criticidad máxima se asignan directamente al operador
- Las de menor criticidad pasan al usuario encargado de distribución para evaluación y asignación
- Flujo completo de gestión, asignación y cierre con trazabilidad

### 4.3 Mantenimiento Preventivo - Predictivo
- Planes mapeados e integrados con estándar de frecuencia
- Checklist genérico modificable por el cliente
- Adjunto de datos maestros para planes de inspección con grupos de fallas editables
- Data fotográfica por plan
- Requerimientos de órdenes para finalización de tareas

### 4.4 Gestión de Activos
- Inventario a nivel planta
- Ficha técnica por equipo
- Historial de intervenciones
- Control e inventariado de repuestos

### 4.5 Configuración Multi-Planta
- Integración de sucursales/planta
- Control y creación de usuarios
- Asignación de roles según perfil de usuario
- Templates de procedimientos para planes

### 4.6 Dashboard de KPIs
Panel de indicadores integrales de mantenimiento que consolida información de OTs, planes preventivos, fallas y costos. Incluye:

| KPI | Descripción |
|-----|-------------|
| MTBF | Tiempo medio entre fallas |
| MTTR | Tiempo medio de reparación |
| Disponibilidad | Uptime de activos críticos |
| Cumplimiento PM | % de planes preventivos ejecutados |
| Backlog | Trabajo pendiente acumulado |
| Recurrencia de fallas | Patrones por activo/área |
| Costos | Por activo, área y tipo de mantenimiento |

Filtrable por: fecha, equipo y tipo de mantenimiento.

### 4.7 Integraciones Enterprise
- Conexión nativa con **SAP, ERP, IoT y Power BI**
- API abierta para integraciones personalizadas

---

## 5. Seguridad operacional — Gates obligatorios

Los CMMS tradicionales tratan la seguridad como un módulo opcional. En Nexus TML es un **gate obligatorio**: el técnico no puede iniciar una OT sin completar el AST y el LOTO. Sin excepción.

### Flujo de seguridad

```
OT Creada → Gate #1: AST (OBLIGATORIO) → Gate #2: LOTO (SI APLICA) → OT Habilitada
```

### Gate #1 — AST (Análisis de Seguridad en el Trabajo)
- Checklist de 10 puntos
- Análisis de peligros
- Verificación de EPP
- Firma digital de supervisor

### Gate #2 — LOTO (Lockout/Tagout)
- Bloqueo secuencial
- Verificación de energía cero antes de intervenir
- Foto-evidencia por punto de bloqueo
- Firma digital de técnico y supervisor en móvil

---

## 6. App Móvil

El mismo poder del dashboard web en el bolsillo de cada técnico. Disponible para **iOS y Android**.

### Funcionalidades móviles
- Disponibilidad y PM siempre visibles (no al final del mes)
- MTBF y MTTR actualizados: medir si la gestión mejora mes a mes
- Reportes de OTs, performance y análisis de tiempos
- Notificaciones push cuando una OT urgente se abre
- Cierre de OTs en terreno
- Registro fotográfico in-situ

---

## 7. Métricas reales de plantas en producción

| Métrica | Valor | Detalle |
|---------|-------|---------|
| Disponibilidad por mantenimiento | 99.993% | Uptime de activos críticos |
| Disponibilidad por fallas (confiabilidad) | 99.779% | Confiabilidad operativa |
| MTBF promedio | 28 días 23h 45min | Tiempo medio entre fallas |
| MTTR promedio | 2h 8min | Tiempo medio de reparación |
| Go-live completo | 8 semanas | De kickoff a producción |
| Técnicos activos | +200 | Confían su operación diaria a Nexus TML |

---

## 8. Proceso de implementación

Duración total: **8 semanas** desde kickoff hasta producción.

### Fases del proyecto

| Fase | Semanas | Descripción |
|------|---------|-------------|
| 1. Análisis y Diseño | Sem 1-2 | Levantamiento de requerimientos funcionales y técnicos. Definición de alcance, KPIs objetivo y plan de migración de datos. El resultado es un documento de especificación funcional como referencia oficial. |
| 2. Implementación | Sem 2-4 | Configuración de módulos, carga de datos maestros, personalización de flujos y configuración de integraciones. |
| 3. Pruebas QA | Sem 4-5 | Ciclo de pruebas funcionales en ambiente de calidad. Validación de flujos críticos y ajustes antes de producción. |
| 4. Entrenamiento | Sem 5-6 | Programa "Train the Users" diferenciado por perfil: administrador, supervisor y técnico. |
| 5. Puesta en Marcha (enlace productivo) | Sem 5-6 | Promoción al ambiente productivo. |
| 6. Marcha Blanca Productiva | Sem 6-8 | Validación en producción con usuarios finales. Soporte dedicado del equipo TML NEXUS. Duración aprox. 2-4 semanas. |
| 7. Fin Técnico | Sem 8 | Traspaso formal al equipo de soporte permanente. |

### Flujo de inicialización

```
Inicio → Análisis y diseño → Implementación → Pruebas y correcciones
                                                       ↓
                                              Programa de entrenamiento
                                                       ↓
                                              Puesta en marcha productivo
                                                       ↓
                                              Marcha blanca productiva → Fin Técnico
```

### Programa de entrenamiento — "Train the Users"

| Número de usuarios | Sesiones |
|-------------------|----------|
| Hasta 15 usuarios | 2 sesiones — operación general y ejecución de tareas |
| 15 a 50 usuarios | 3 sesiones — prácticas por perfil funcional (administrador, supervisor, técnico) |
| 50 o más usuarios | 4 sesiones — formación teórica, práctica guiada y seguimiento personalizado |

---

## 9. Propuesta comercial

### Servicio e implementación (Setup) — Pago único

| Rol | Alcance | Valor (UF) |
|-----|---------|------------|
| Ingeniero de Software | Módulo de gestión de mantenimiento (tickets, OTs, flujo preventivo, reportes) + Módulo de activos (listas, inventariado repuestos) + Módulo de configuración (sucursales, usuarios, roles, templates) | 80 UF |
| Consultor TI | Programa de entrenamiento y capacitaciones según necesidades de la empresa | 30 UF |
| Líder de Proyecto | Análisis, diseño, reuniones, seguimiento, documentación y gestión | 20 UF |
| **TOTAL NETO** | | **130 UF** |

### Membresía mensual — Licencia Profesional

| Concepto | Valor mensual | Valor por usuario |
|----------|---------------|-------------------|
| Derecho a uso de plataforma (incluye 20 usuarios) | 10 UF | 0.5 UF |
| Usuario adicional NETO | — | 1 UF |

### Condiciones de pago

- Precios elaborados con tipo de cambio vigente a la fecha de emisión
- Actualización anual de precios y tarifas (sin cláusula de renovación automática tras 3 meses)
- Contrato contempla licenciamiento por **1 año de servicio**
- Cobro de SaaS y Setup se inicia inmediatamente al aceptar la propuesta
- Valores netos, **impuestos NO incluidos**

---

## 10. Condiciones de aprobación del proyecto

- **Aceptación y Arranque**: Emisión de primera Orden de Compra (OC) con modalidad de pago. Constituye aceptación formal y vinculante.
- **Plazos de implementación**: Configuración, carga de datos y puesta en marcha en máximo **2 meses** desde aprobación.
- **Facturación de membresías**: Licenciamiento recurrente mensual, determinado por cantidad de usuarios habilitados.
- **Morosidad**: Retraso >30 días hábiles genera alertas automáticas de deuda y restricciones de acceso hasta regularización total.

---

## 11. Solicitud de mejora continua

Para iniciativas de mejora continua (si hay bolsa de horas disponible):
1. El cliente envía solicitud formal por correo al Customer Success asignado
2. Se coordinan reuniones de levantamiento con Customer Success y/o Preventa
3. Se emite propuesta comercial con planificación de ejecución

---

## 12. Análisis métrico — Dashboards

Si hay bolsa de horas para dashboards, se aplica:

1. **Etapa de análisis y diseño (inicio)**: Levantamiento de requerimientos, estimación de esfuerzos, priorización por el cliente
2. **Etapa de desarrollo e implementación**: Construcción entre las pruebas QA y la marcha blanca

Los dashboards se implementan **únicamente en ambiente productivo**. Habilitación en QA requiere esfuerzo adicional.

---

## 13. Testimonios de clientes

> "Antes usábamos Excel y WhatsApp. Con Nexus TML pasamos de 60% a 97% de cumplimiento de PM en tres meses."
> — **Jorge Muñoz**, Jefe de Mantenimiento — Planta Industrial, Región Metropolitana

> "La app móvil fue el cambio real. Mis técnicos registran en terreno, el supervisor ve el estado en tiempo real desde la oficina."
> — **Claudia Pereira**, Supervisora de Operaciones — Centro Acuícola, Región de Los Lagos

> "En 8 semanas teníamos todos los activos cargados, el equipo capacitado y los primeros KPIs en pantalla. Por primera vez pudimos ver nuestro MTBF y MTTR reales."
> — **Roberto Araya**, Gerente de Mantenimiento — Manufactura, Región del Biobío

---

## 14. Identidad y contacto

| Dato | Valor |
|------|-------|
| Nombre del producto | TML NEXUS |
| Tipo | Plataforma SaaS |
| Origen | Hecho en Chile 🇨🇱 |
| URL de la plataforma | app.nexustml.cl |
| Email de contacto | contacto@nexuslabs.com |
| Redes sociales | LinkedIn |
| Tagline | "El Mantenimiento que habla el idioma de tu industria" |

---

## 15. Mensajes clave para comunicación

1. **Velocidad**: De 0 a productivo en 8 semanas
2. **Practicidad**: Construido para el técnico, no para el consultor
3. **Seguridad**: Gates obligatorios AST/LOTO — no se pueden saltar
4. **Visibilidad**: KPIs y analytics en tiempo real
5. **Flexibilidad**: Funciona en cualquier dispositivo, se adapta a tus flujos
6. **Soporte**: En español, sin contratos de permanencia
7. **Local**: Hecho en Chile, confiado por industrias chilenas
8. **IA**: Asistencia inteligente para diagnósticos y pautas
