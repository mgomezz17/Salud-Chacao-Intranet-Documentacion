const modules = [
  {
    nombre: "Evaluación de personal",
    view: "evaluacion",
    descripcion: "Evaluación de desempeño del personal contradado",
    icono: "clipboard-check",
    estado: true,
  },
  {
    nombre: "Perfil/Usuario",
    view: "perfil",
    descripcion: "Visualización del perfil de usuario",
    icono: "user-round",
    estado: true,
  },
  {
    nombre: "Cartelera/Informaciones",
    view: "cartelera",
    descripcion: "Publicación de informaciones institucionales",
    icono: "megaphone",
    estado: true,
  },
  {
    nombre: "Recibos de Pago",
    view: "recibos",
    descripcion: "Gestion, procesamiento y validación de recibos de pago",
    icono: "receipt",
    estado: true,
  },
  {
    nombre: "Notificaciones",
    view: "notificacion",
    descripcion: "Sistema de notificaciones interno",
    icono: "bell",
    estado: true,
  },
  {
    nombre: "Constancias de Trabajo",
    view: "constancias",
    descripcion: "Generación automática de constancias de trabajo",
    icono: "file-check",
    estado: true,
  },
  {
    nombre: "Tickets de soporte",
    view: "tickets",
    descripcion:
      "Reporte, control y gestión de incidencias tecnológicas y de planta física",
    icono: "cable",
    estado: true,
  },
];

export function renderizarTarjetaModulo(container, mod = modules) {
  if (!container) return;

  const html = mod
    .map(
      (module) =>
        `
        <div class="side-bar-button module text-start content-wrapper border border-1 rounded-4 d-flex flex-column gap-3 p-4 shadow bg-body" data-view="${module.view}" data-module="yr">
            <span class="icon p-2 rounded-3">
                <i data-lucide="${module.icono}"></i>
            </span>

            <span class="fw-bold">${module.nombre}</span>
            <span class="subsection-desc">${module.descripcion}</span>

            ${
              module.estado
                ? ` 
                <span class="badge text-bg-success d-flex align-items-center gap-1 mt-auto">
                    <i data-lucide="shield-check" style="color: #FFF;"></i>
                    Activo
                    <span></span>
                </span>
                `
                : `                    
                <span class="badge text-bg-danger d-flex align-items-center gap-1 mt-auto">
                    <i data-lucide="badge-alert"></i>
                    Inactivo
                </span>`
            }
        </div>
    `,
    )
    .join("");

  container.innerHTML = html;
  lucide.createIcons();
}
