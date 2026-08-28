import { renderizarTarjetaModulo } from "../modulos.js";

export function renderResumen(main) {
  main.innerHTML = `
    <a href="https://github.com/mgomezz17/Documentacion-Intranet-Chacao.git" class="">
    <img src="assets/images/banner_git.png" alt="banner" width="100%">
    </a>
  <div class="top-ribbon d-flex align-items-center justify-content-between w-100">
        <h4 class="fw-bold">Resumen General</h4>
                <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check-icon lucide-badge-check">
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                        <path d="m9 12 2 2 4-4" />
                    </svg>
                    Vigente
                </span>
            </div>

            <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow bg-body">

                <span class="fw-bold">Sobre el sistema</span>
                <span class="subsection-desc">
                    Cubre gestión de empleados, recibos de pago, constancias de trabajo, evaluaciones de desempeño, tickets de soporte y solicitudes administrativas.
                </span>
            </div>

            <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-1 p-4 mt-2 shadow gap-2 bg-body align-items-center">

                <span class="fw-bold w-100 text-left">Stack Tecnológico</span>

                <div class="subsection-item d-flex gap-2 flex-wrap">

                    <span class="badge-code badge-js">
                        <span class="badge-icon" style="background-color:#f0db4f; color: rgb(10, 10, 10);">JS</span>
                        JavaScript
                    </span>

                    <span class="badge-code badge-php">
                        <span class="badge-icon" style="background-color:#777bb4;">
                            <i class="devicon-php-plain"></i>
                        </span>
                        PHP
                    </span>

                    <span class="badge-code badge-css3">
                        <span class="badge-icon" style="background-color:#1572b6;">
                            <i class="devicon-css3-plain"></i>
                        </span>
                        CSS3
                    </span>

                    <span class="badge-code badge-html5">
                        <span class="badge-icon" style="background-color:#e34f26;">
                            <i class="devicon-html5-plain"></i>
                        </span>
                        HTML5
                    </span>

                    <span class="badge-code badge-mysql">
                        <span class="badge-icon" style="background-color:#4479a1;">
                            <i class="devicon-mysql-original"></i>
                        </span>
                        MySQL
                    </span>

                    <span class="badge-code badge-phpmyadmin">
                        <span class="badge-icon" style="background-color:#6c78af;">
                            <i class="devicon-gradle-original"></i>
                        </span>
                        phpMyAdmin
                    </span>

                    <span class="badge-code badge-bootstrap">
                        <span class="badge-icon" style="background-color:#7952b3;">
                            <i class="devicon-bootstrap-plain"></i>
                        </span>
                        Bootstrap
                    </span>

                    <span class="badge-code badge-apache">
                        <span class="badge-icon" style="background-color:#C82233;">
                            <i class="devicon-apache-plain"></i>
                        </span>
                        Apache
                    </span>

                </div>
            </div>

            <h5 class="fw-bold mt-4">Módulos del sistema</h5>
            <div class="modules-wrapper w-100 modules-grid"></div>`;

  renderizarTarjetaModulo(main.querySelector(".modules-wrapper"));
  lucide.createIcons();
}
