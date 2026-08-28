import { runMermaidDiagrams } from "../utils/mermaidSetup.js";

export async function renderEsquemaCartelera(main) {
  main.innerHTML = `
        <div class="top-ribbon d-flex align-items-center justify-content-between w-100 mt-3">
            <h4 class="fw-bold">
                <i data-lucide="scale"></i> 
                Módulo de Cartelera de Informaciones
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
                El módulo de Cartelera / Informaciones funciona como el tablón de anuncios institucional de la intranet. Su propósito es centralizar la comunicación interna, mostrando avisos y contenido relevante a todos los usuarios del sistema mediante un componente de carrusel, mientras reserva las acciones de gestión —como el archivado de un aviso— a los roles con permisos administrativos.
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">

            <span class="fw-bold">Funcionalidades técnicas</span>

            <ol class="list-group list-group-numbered">

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Carrusel de anuncios</div>
                            Carrusel para la visualización de la informaciones institucionales más recientes.
                    </div>
                    <span class="badge text-bg-primary p-2">Data Base</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Archivar publicaciones</div>
                        Permite retirar un aviso vencido sin borrarlo de la base de datos. Solo lo ven los roles 1 y 4, y no falla si no está presente en pantalla.
                    </div>
                    <span class="badge text-bg-primary p-2">Historial</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Carrusel de anuncios:</div>
                            Muestra los avisos institucionales de a uno, en un solo espacio, sin saturar la pantalla con una lista larga.
                    </div>
                    <span class="badge text-bg-primary p-2">Historial</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Control de visibilidad por rol</div>
                            Oculta las opciones de gestión a los usuarios comunes; solo el personal autorizado ve controles para administrar la cartelera.
                    </div>
                    <span class="badge text-bg-primary p-2">Acceso por roles</span>
                </li>

                <li class="list-group-item d-flex justify-content-between align-items-start p-4">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold mb-2">Actualización automática (Polling):</div>
                            El carrusel se refresca solo cada 60 segundos mediante polling corto + fetch, consultando al servidor si hay avisos nuevos o archivados. Así el usuario ve la cartelera actualizada sin tener que recargar la página manualmente.
                    </div>
                    <span class="badge text-bg-primary p-2">Procesamiento/span>
                </li>

            </ol>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-3 bg-body">
        

            <span class="fw-bold">Diagrama de Flujo</span>

            <div class="d-flex justify-content-center w-100 border rounded-4 p-4 diagram">
                <pre class="mermaid">
                    flowchart TD
                        A(Acceso al formulario) --> B(Completar datos)
                        B --> C("Envío del formulario AJAX (FormData / Fetch)")
                        C --> D{¿Datos válidos?}
                        D -- No --> E(Error mostrado al usuario)
                        E --> A
                        D -- Si --> F(Insersión en la Base de Datos)
                        F --> G(Aviso visible en el carrusel y la pagina principal)
                </pre>
            </div>
        </div>
        
    `;
  await runMermaidDiagrams();
}
