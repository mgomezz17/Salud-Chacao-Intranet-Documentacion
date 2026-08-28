import { runMermaidDiagrams } from "../utils/mermaidSetup.js";

export async function renderEsquemaNotificaciones(main) {
  main.innerHTML = `
        <div class="top-ribbon d-flex align-items-center justify-content-between w-100 mt-3">
            <h4 class="fw-bold">
                <i data-lucide="scale"></i> 
                Módulo de Notificaciones
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
                Módulo transversal que centraliza los avisos internos del sistema: nuevas constancias, recibos, tickets de soporte, procesamiento de nómina, entre otros. Mantiene informados a los usuarios en tiempo casi real.
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Funcionalidades técnicas</span>

            <ol class="list-group list-group-numbered">

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Centralización:</div>
                            Tabla centralizada notificaciones que almacena todos los eventos del sistema en un solo lugar.
                    </div>
                    <span class="badge text-bg-primary p-2">Data Base</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Notificaciones en lote (batch)</div>
                            Cuando se completa un lote de nómina, se genera una sola tanda de notificaciones para todos los empleados afectados, en vez de disparar una por una.
                    </div>
                    <span class="badge text-bg-primary p-2">Eficiencia</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Polling adaptativo + fetch:</div>
                            El navegador consulta periódicamente mediante polling adaptativo (Page Visibility API) si hay notificaciones nuevas, para que le lleguen al usuario sin que tenga que recargar la página.
                    </div>
                    <span class="badge text-bg-primary p-2">Procesamiento</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Robustez</div>
                            permite generar una notificación aunque el destinatario sea un empleado sin cuenta de usuario, sin que el sistema falle por intentar asociarla a un usuario que no existe.
                    </div>
                    <span class="badge text-bg-primary p-2">Seguridad</span>
                </li>

            </ol>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Diagrama de Flujo</span>

            <div class="d-flex justify-content-center w-100 border rounded-4 p-4">
                <pre class="mermaid">
                    flowchart TD
                        A(Evento del sistema genera notificación) --> B{¿Empleado tiene cuenta de usuario?}
                        B -- No --> C(Se guarda sin asociar a un usuario)
                        B -- Si --> D(crearNotificacion asocia el id_usuario)
                        C --> E(Notificación guardada en la tabla centralizada)
                        D --> E

                        F(Lote de nómina completado) --> G(Genera notificaciones en lote para todos los empleados)
                        G --> E

                        E --> H(Polling setInterval + fetch consulta notificaciones nuevas)
                        H --> I(Notificación mostrada al usuario en la interfaz)
                        
                </pre>
            </div>
        </div>
        
    `;
  await runMermaidDiagrams();
}
