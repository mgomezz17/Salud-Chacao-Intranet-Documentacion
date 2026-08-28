import { runMermaidDiagrams } from "../utils/mermaidSetup.js";

export async function renderEsquemaRecibos(main) {
  main.innerHTML = `
        <div class="top-ribbon d-flex align-items-center justify-content-between w-100 mt-3">
            <h4 class="fw-bold">
                <i data-lucide="scale"></i> 
                Módulo de Recibos de Pago
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
                Módulo de consulta de recibos de pago históricos por empleado, con búsqueda y filtrado ágil, enfocado principalmente en RRHH.
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Funcionalidades técnicas</span>

            <ol class="list-group list-group-numbered">

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Búsqueda en tiempo real (debounce):</div>
                            Encuentra un recibo específico mientras el usuario escribe, sin saturar el servidor con una consulta por cada letra tecleada.
                    </div>
                    <span class="badge text-bg-primary p-2">Debounce</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Filtro por rango de fechas</div>
                            Permite acotar los recibos a un periodo puntual (por ejemplo, un mes o un año específico).
                    </div>
                    <span class="badge text-bg-primary p-2">Ágil</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Consultas seguras y flexibles:</div>
                            Sin importar qué combinación de filtros use el usuario, la consulta a la base de datos se arma de forma segura contra inyección SQL.
                    </div>
                    <span class="badge text-bg-primary p-2">Base de Datos</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Divisor de archivo matriz:</div>
                            Al cargar el PDF masivo de nómina, el sistema lo divide automáticamente en un archivo individual por empleado, renombrado con nombre, apellido y cédula, y lo envía directo al historial de recibos del perfil correspondiente, sin que RRHH tenga que separar cada recibo a mano.
                    </div>
                    <span class="badge text-bg-primary p-2">Herramientas</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Historial de descarga filtrable:</div>
                            El empleado puede consultar y descargar sus recibos filtrando por año, mes o tipo de nómina.
                    </div>
                    <span class="badge text-bg-primary p-2">Herramientas</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Envío por correo (PHPMailer, en planificación)</div>
                            Pensado para que el empleado pueda recibir su recibo directo al correo, sin entrar a la plataforma.
                    </div>
                    <span class="badge text-bg-primary p-2">Proximamente</span>
                </li>

            </ol>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Diagrama de Flujo</span>

            <div class="d-flex justify-content-center w-100 border rounded-4 p-4">
                <pre class="mermaid">
                    flowchart TD
                        A(RRHH carga el PDF matriz de nómina) --> B(Divisor separa el PDF por empleado)
                        B --> C(Renombra cada archivo: nombre, apellido, cédula)
                        C --> D(Envía cada recibo al historial del perfil correspondiente)

                        E(RRHH ingresa al módulo de recibos) --> F(Filtra por año, mes o tipo de nómina)
                        F --> G(Debounce espera a que termine de escribir/filtrar)
                        G --> H(Consulta segura a la base de datos)
                        H --> I(Recibos filtrados mostrados en pantalla)
                        I --> J(Usuario visualiza o descarga el recibo)

                        D --> I
                        
                </pre>
            </div>
        </div>
        
    `;
  await runMermaidDiagrams();
}
