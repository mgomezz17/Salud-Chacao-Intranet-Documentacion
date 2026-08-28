import { runMermaidDiagrams } from "../utils/mermaidSetup.js";

export async function renderEsquemaPerfil(main) {
  main.innerHTML = `
        <div class="top-ribbon d-flex align-items-center justify-content-between w-100 mt-3">
            <h4 class="fw-bold">
                <i data-lucide="scale"></i> 
                Módulo de perfil de usuario
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
                Página central de cada usuario del sistema, donde se muestra su información personal, laboral (si aplica) y sus recibos de pago recientes. El contenido se adapta según si la cuenta tiene o no un registro de empleado asociado.
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Funcionalidades técnicas</span>

            <ol class="list-group list-group-numbered">

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Datos del perfil:</div>
                            Consulta de datos con LEFT JOIN para soportar cuentas de usuario sin registro de empleado vinculado, sin que la página falle.
                    </div>
                    <span class="badge text-bg-primary p-2">Data Base</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Información de evaluación</div>
                            Resumen cualitativo y cuantitativo de la última evaluación de desempeño realizada.
                    </div>
                    <span class="badge text-bg-primary p-2">Historial</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Historial de recibos de pago:</div>
                            Tarjetas de recibos de pago con overlay al pasar el mouse (hover), mostrando el detalle sin necesidad de navegar a otra pantalla.
                    </div>
                    <span class="badge text-bg-primary p-2">Historial</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Renderizado condicional</div>
                            Renderizado condicional de secciones del perfil según el rol del usuario (verificarRol / tieneRol).
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
                        A(Acceso al módulo de perfil) --> B{¿Usuario tiene empleado asociado?}
                        B -- No --> C(Muestra estado vacío)
                        B -- Si --> D(Carga datos del empleado y recibos de pago)

                        D --> E(Visualización de datos personales)
                        D --> F(Listado de recibos de pago)

                        E --> G(Edición de datos personales)
                        G --> H("Envío del formulario AJAX (FormData / Fetch)")
                        H --> I{¿Datos válidos?}
                        I -- No --> J(Error mostrado al usuario)
                        J --> G

                        F --> M(Hover sobre tarjeta de recibo muestra overlay)
                        M --> N(Visualización o descarga del recibo)

                        I -- Si --> K(Actualización en la Base de Datos)
                        K --> L(Perfil actualizado visible al usuario)
                        
                </pre>
            </div>
        </div>
        
    `;
  await runMermaidDiagrams();
}
