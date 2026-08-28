export function renderArquitectura(main) {
  main.innerHTML = `

        <div class="top-ribbon d-flex align-items-center justify-content-between w-100">
            <h4 class="fw-bold">
                <i data-lucide="layers"></i>  
                Arquitectura técnica
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

            <span class="fw-bold">Stack Tecnológico</span>

            <span class="subsection-desc">
                El sistema está desarrollado bajo una arquitectura robusta, modular y moderna, distribuyendo las tecnologías de la siguiente manera:
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">

            <span class="fw-bold">Backend & Base de Datos</span>

            <span class="subsection-desc d-flex align-items-center gap-1">
                <span class="badge-code badge-mysql">
                    <span class="badge-icon" style="background-color:#4479a1;">
                        <i class="devicon-mysql-original"></i>
                    </span>
                    MySQL
                </span>
                <span class="badge-code badge-php">
                    <span class="badge-icon" style="background-color:#777bb4;">
                        <i class="devicon-php-plain"></i>
                    </span>
                    PHP
                </span>
            </span>

            <span class="subsection-desc d-flex align-items-center gap-1">
                <ul class="mt-3 d-flex flex-column gap-3">
                    <li>
                        <strong>Persistencia:</strong>
                        Almacenamiento e integridad de datos gestionado eficientemente mediante MySQL.
                    </li>
                    <li>
                        <strong>Lógica del Servidor:</strong>
                        Desarrollado nativamente en PHP, implementando PDO / MySQLi con sentencias preparadas para garantizar la seguridad del sistema y prevenir inyecciones SQL.
                    </li>
                    <li>
                        <strong>Código procedimental</strong>
                        Código estructurado de forma procedimental para facilitar las labores de depuración institucional.
                    </li>
                </ul>
            </span>

        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">

            <span class="fw-bold">Frontend & Librerías</span>

            <div class="subsection-desc d-flex align-items-center gap-1 flex-wrap">
                <span class="badge-code badge-js" data-bs-toggle="tooltip" data-bs-placement="bottom" title="12.6%" >
                    <span class="badge-icon" style="background-color:#f0db4f; color: rgb(10, 10, 10);">JS</span>
                    JavaScript
                </span>

                <span class="badge-code badge-php" data-bs-toggle="tooltip" data-bs-placement="bottom" title="80.2%">
                    <span class="badge-icon" style="background-color:#777bb4;">
                        <i class="devicon-php-plain"></i>
                    </span>
                    PHP
                </span>

                <span class="badge-code badge-css3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="7.1%">
                    <span class="badge-icon" style="background-color:#1572b6;">
                        <i class="devicon-css3-plain"></i>
                    </span>
                    CSS3
                </span>

                <span class="badge-code badge-bootstrap">
                    <span class="badge-icon" style="background-color:#7952b3;">
                        <i class="devicon-bootstrap-plain"></i>
                    </span>
                    Bootstrap
                </span>
            </div>

            <span class="subsection-desc d-flex align-items-center gap-1">
                <ul class="mt-3 d-flex flex-column gap-3">
                    <li>
                        <strong>Interactividad y Asincronía:</strong>
                        Vanilla JavaScript utilizando Fetch API para la comunicación asíncrona con el backend (logrando cargas dinámicas sin recargar la página).
                    </li>
                    <li>
                        <strong>Maquetación y Estilos:</strong>
                        Estructura semántica en HTML5 combinada con un diseño adaptable mediante CSS3 (Flexbox y Grid).
                    </li>
                    <li>
                        <strong>Procesamiento de Archivos:</strong>
                         Integración de librerías del lado del cliente para la automatización de documentos:
                         <ul class="d-flex flex-column gap-2 mt-2">
                            <li>
                                Generación y formateo de PDFs dinámicos.
                            </li>
                            <li>
                                Compresión y empaquetado de archivos en caliente (jszip, htm2pdf).
                            </li>
                         </ul>
                    </li>
                </ul>
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">

            <span class="fw-bold">Entorno de Desarrollo & Administración</span>

            <span class="subsection-desc d-flex align-items-center gap-1 flex-wrap">

                <span class="badge-code badge-vscode">
                    <span class="badge-icon" style="background-color:#777bb4;">
                        <i class="devicon-vscode-plain"></i>
                    </span>
                    Visual Studio Code
                </span>
                <span class="badge-code badge-phpmyadmin">
                    <span class="badge-icon" style="background-color:#6c78af;">
                        <i class="devicon-gradle-original"></i>
                    </span>
                    phpMyAdmin
                </span>
                <span class="badge-code badge-xampp">
                    <span class="badge-icon" style="background-color:#e34f26;">
                        X
                    </span>
                    xampp
                </span>
                <span class="badge-code badge-apache">
                    <span class="badge-icon" style="background-color:#C82233;">
                        <i class="devicon-apache-plain"></i>
                    </span>
                    Apache
                </span>
                
            </span>

            <span class="subsection-desc d-flex align-items-center gap-1">
                <ul class="mt-3 d-flex flex-column gap-3">
                    <li>
                        <strong>Servidor Local</strong>
                        XAMPP para el entorno de ejecución local (Apache).
                    </li>
                    <li>
                        <strong>Gestión de Base de Datos:</strong>
                        phpMyAdmin como interfaz gráfica de administración de datos.
                    </li>

                    <li>
                        <strong>IDE:</strong>
                         Visual Studio Code como entorno principal de desarrollo de software.
                    </li>
                </ul>
            </span>

        </div>
    `;

  const tooltipTriggerList = main.querySelectorAll(
    '[data-bs-toggle="tooltip"]',
  );
  tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));
  lucide.createIcons();
}
