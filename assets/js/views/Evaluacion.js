import { runMermaidDiagrams } from "../utils/mermaidSetup.js";

export async function renderEsquemaEvaluacion(main) {
  main.innerHTML = `
        <div class="top-ribbon d-flex align-items-center justify-content-between w-100 mt-3">
            <h4 class="fw-bold">
                <i data-lucide="scale"></i> 
                Módulo de evaluación de personal
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
                Módulo para la evaluación de desempeño de los empleados por competencias. Permite a Recursos Humanos registrar evaluaciones, visualizar los resultados de forma gráfica y generar un documento en PDF con el reporte final.
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Funcionalidades técnicas</span>

            <ol class="list-group list-group-numbered">

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Validación en dos capas:</div>
                        Un listener del evento 'submit' en el frontend, más una verificación de integridad de conteo e IDs de competencias en el backend, evitando registros incompletos o manipulados.
                    </div>
                    <span class="badge text-bg-primary p-2">Eventos</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Visualización de resultados:</div>
                        Visualización de resultados mediante una grilla 3x3 de gráficas tipo doughnut (Chart.js), una por cada competencia evaluada. Asimismo, un apartado de resumen cualitativo por competencia.
                    </div>
                    <span class="badge text-bg-primary p-2">Competencias</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Recorridos guiados:</div>
                        Recorridos con Driver.js para orientar al usuario la primera vez que usa el módulo, manteniendo el progreso entre páginas con sessionStorage.
                    </div>
                    <span class="badge text-bg-primary p-2">Guided tours</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Reportes:</div>
                        Generación de reporte en PDF con html2pdf.js y carga automática del archivo al servidor a través del controlador.
                    </div>
                    <span class="badge text-bg-primary p-2">Archivos</span>
                </li>

            </ol>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Diagrama de Flujo</span>

            <div class="d-flex justify-content-center w-100 border rounded-4 p-4">
                <pre class="mermaid">
                    flowchart TD
                        A(Inicio de la evaluación) --> B(Evaluador busca al empleado a evaluar)
                        B --> C(Resultados de la búsqueda)
                        C --> D(Ingresar al perfil del empleado a evaluar)
                        D --> E{¿Primera vez evaluando?}

                        E -- Si --> F("Lanza tour guiado (Driver.js) estado en sessionStorage")
                        F --> G(Modal de Instrucciones)
                        G --> H(Formulario de evaluación)
                        E -- No --> H
                        H --> I{¿Todas las competencias están evaluadas?}
                        I -- Si --> J(Guardar Evaluación)
                        I -- No --> H
                        J --> K{¿Hay cambios?}
                        K -- Si --> L(Editar evaluación)
                        K -- No --> M(Confirmar evaluación)
                        L --> N{¿Hay cambios?}
                        N -- Si --> L
                        N -- No --> M
                        M --> P(Fin de la evaluación)
                        
                </pre>
            </div>
        </div>
        
    `;
  await runMermaidDiagrams();
}
