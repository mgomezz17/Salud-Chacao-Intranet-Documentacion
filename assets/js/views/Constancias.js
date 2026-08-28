import { runMermaidDiagrams } from "../utils/mermaidSetup.js";

export async function renderEsquemaConstancias(main) {
  main.innerHTML = `
        <div class="top-ribbon d-flex align-items-center justify-content-between w-100 mt-3">
            <h4 class="fw-bold">
                <i data-lucide="scale"></i> 
                Módulo de Constancias
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
                Módulo de solicitud, revisión, aprobación y emisión de constancias laborales. Cubre todo el ciclo: desde que el empleado la solicita hasta que recibe el documento final en PDF.
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Funcionalidades técnicas</span>

            <ol class="list-group list-group-numbered">

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Flujo de aprobación completo:</div>
                            Una constancia pasa por un proceso de solicitud, revisión y aprobación antes de quedar lista, en vez de generarse directo.
                    </div>
                    <span class="badge text-bg-primary p-2">Seguridad</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Generación de PDF (html2pdf)</div>
                            Convierte la constancia ya aprobada en un archivo PDF descargable, generado como blob directamente en el navegador.
                    </div>
                    <span class="badge text-bg-primary p-2">PDF</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Formato estandarizado por tipo de empleado</div>
                            Se arma el documento con la plantilla correspondiente según el tipo de empleado (por ejemplo, personal fijo vs. contratado), garantizando que cada constancia tenga el formato y las cláusulas correctas sin intervención manual.
                    </div>
                    <span class="badge text-bg-primary p-2">Estandarización</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Sanitización de contenido (HTMLPurifier):</div>
                            Limpia el contenido de la constancia antes de guardarlo o mostrarlo, para evitar que se cuele código malicioso si el texto viene de un editor enriquecido.
                    </div>
                    <span class="badge text-bg-primary p-2">Seguridad</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Arquitectura de funciones dedicada</div>
                            Funciones como verificarEmpleado, aprobarConstancia y construirConstancia separan responsabilidades: comprobar que el empleado existe, aprobar la solicitud, y armar el documento final, cada una como su propio paso.
                    </div>
                    <span class="badge text-bg-primary p-2">Procedimientos</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Búsqueda (Técnica debounce)</div>
                            El buscador de constancias espera a que el usuario deje de escribir antes de consultar, para no disparar una petición por cada tecla
                    </div>
                    <span class="badge text-bg-primary p-2">Espera Activa</span>
                </li>

            </ol>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Diagrama de Flujo</span>

            <div class="d-flex justify-content-center w-100 border rounded-4 p-4">
                <pre class="mermaid">
                    flowchart TD
                        A(Solicitud de constancia) --> B(verificarEmpleado)
                        B --> C{¿Empleado existe?}
                        C -- No --> D(Error: empleado no encontrado)
                        C -- Si --> E(construirConstancia según tipo de empleado)
                        E --> F(Contenido sanitizado con HTMLPurifier)
                        F --> G(aprobarConstancia)
                        G --> H{¿Aprobada?}
                        H -- No --> I(Constancia queda pendiente)
                        H -- Si --> J(Generación de PDF con html2pdf)
                        J --> K(Constancia disponible para descarga)
                        
                </pre>
            </div>
        </div>
        
    `;
  await runMermaidDiagrams();
}
