import { runMermaidDiagrams } from "../utils/mermaidSetup.js";

export async function renderEsquemaTickets(main) {
  main.innerHTML = `
        <div class="top-ribbon d-flex align-items-center justify-content-between w-100 mt-3">
            <h4 class="fw-bold">
                <i data-lucide="scale"></i> 
                Módulo de Tickets
                </h4>
            <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check-icon lucide-badge-check">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
                Vigente
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Descripción del módulo</span>

            <span class="subsection-desc">
                Mesa de ayuda interna para que los usuarios reporten incidencias o soliciten soporte técnico, con priorización automática.
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Asignación automática de prioridad</span>

            <ol class="list-group list-group-numbered">

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Búsqueda en tiempo real (debounce):</div>
                            Cruza urgencia e impacto en una matriz de prioridades (estilo ITIL) para calcular la prioridad del ticket al momento de crearlo.
                    </div>
                    <span class="badge text-bg-primary p-2">Prioridades</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Recalculo de prioridad</div>
                            Si las condiciones del ticket cambian (por ejemplo, se actualiza la urgencia o el impacto), el sistema vuelve a pasar los datos por la matriz y ajusta la prioridad, en vez de dejarla fija desde la creación.
                    </div>
                    <span class="badge text-bg-primary p-2">Prioridades</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Adjuntar evidencia:</div>
                            El usuario puede subir capturas o archivos que respalden el problema reportado.
                    </div>
                    <span class="badge text-bg-primary p-2">Flexibilidad</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Sin duplicación de acciones:</div>
                            Evita que una misma acción (cerrar, responder) se dispare varias veces por error en la lista de tickets.
                    </div>
                    <span class="badge text-bg-primary p-2">Herramientas</span>
                </li>

            </ol>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Diagrama de Flujo</span>

            <div class="d-flex justify-content-center w-100 border rounded-4 p-4">
                <pre class="mermaid">
                    flowchart TD
                        A(Usuario reporta un problema) --> B(Completa formulario: urgencia e impacto)
                        B --> C(Adjunta captura o archivo opcional)
                        C --> D(Envío del ticket)
                        D --> E(Matriz de prioridades calcula la prioridad inicial)
                        E --> F(Ticket registrado y visible para soporte)
                        F --> G{¿Cambian urgencia o impacto?}
                        G -- Si --> H(Matriz recalcula la prioridad)
                        H --> F
                        G -- No --> I(Soporte da seguimiento y cierra el ticket)
                        
                </pre>
            </div>
        </div>
        
    `;
  await runMermaidDiagrams();
}
