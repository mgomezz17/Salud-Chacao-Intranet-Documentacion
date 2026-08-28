export function renderLegal(main) {
  main.innerHTML = `
              <a href="https://github.com/mgomezz17/Documentacion-Intranet-Chacao.git" class="">
                <img src="assets/images/banner_git.png" alt="banner" width="100%">
            </a>
        <div class="top-ribbon d-flex align-items-center justify-content-between w-100 mt-3">
            <h4 class="fw-bold">
                <i data-lucide="scale"></i> 
                TÉRMINOS Y CONDICIONES DE USO DE LA INTRANET INSTITUCIONAL
                </h4>
            <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check-icon lucide-badge-check">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
                Vigente
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">

            <div class="d-flex align-items-center justify-content-between gap-2">
                <span class="fw-bold">Naturaleza y Aceptación</span>
                <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                    Ámbitos / Marco Legal
                </span>
            </div>
            <span class="subsection-desc">
                El presente portal de Intranet es un recurso tecnológico de uso exclusivamente interno, confidencial y profesional, propiedad del Instituto Municipal de Cooperación y Atención a la Salud (Salud Chacao). El acceso y uso de esta plataforma por parte de personal médico, administrativo, técnico o directivo implica la aceptación plena de estas condiciones. El incumplimiento de estas normas acarreará sanciones administrativas, civiles y/o penales.
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">

            <div class="d-flex align-items-center justify-content-between gap-2">
                <span class="fw-bold">Credenciales y Seguridad del Acceso</span>
                <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                    Seguridad TI
                </span>
            </div>
            <span class="subsection-desc">
                <ul class="d-flex flex-column gap-3 mt-3">
                    <li>
                        <strong>Carácter Personal e Intransferible:</strong>
                        <span class="subsection-desc">
                            El usuario es responsable absoluto de la custodia de sus credenciales (usuario y contraseña). Queda estrictamente prohibido compartir claves de acceso con terceros o compañeros de trabajo.
                        </span>
                    </li>
                    <li>
                        <strong>Cierre de Sesión:</strong>
                        <span class="subsection-desc">
                            El usuario debe cerrar sesión adecuadamente al retirarse de su puesto de trabajo o terminal asistencial.
                        </span>
                    </li>
                    <li>
                        <strong>Notificación Inmediata:</strong>
                        <span class="subsection-desc">
                            Cualquier sospecha de vulneración, extravío o uso no autorizado de credenciales debe ser reportada de inmediato a la Dirección de Tecnología e Información o soporte técnico de la institución.
                        </span>
                    </li>
                </ul>
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">
            <div class="d-flex align-items-center justify-content-between gap-2">
                <span class="fw-bold">Confidencialidad y Protección de Datos</span>
                <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                    Datos Sensibles
                </span>
            </div>
            <span class="subsection-desc">
                <ul class="d-flex flex-column gap-3 mt-3">
                    <li>
                        <strong>Uso Exclusivo Sanitario/Administrativo:</strong>
                        <span class="subsection-desc">
                            Queda prohibida la consulta, copia, descarga, modificación o divulgación de datos personales sin justificación asistencial o administrativa explícita.
                        </span>
                    </li>
                    <li>
                        <strong>Fuga de Información:</strong>
                        <span class="subsection-desc">
                            La extracción no autorizada de bases de datos o registros de pacientes será sancionada conforme a la Ley Contra los Delitos Informáticos y la Ley del Estatuto de la Función Pública.
                        </span>
                    </li>
                </ul>
            </span>
        </div>

        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">
            <div class="d-flex align-items-center justify-content-between gap-2">
                <span class="fw-bold">Uso Aceptable de la Infraestructura</span>
                <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                    Código de Conducta
                </span>
            </div>
            <span class="subsection-desc">
                El usuario se compromete a utilizar los recursos de la Intranet bajo principios de ética y eficiencia:
            </span>
            <span class="subsection-desc">
                <ul class="d-flex flex-column gap-3 mt-3">
                    <li>
                        <strong>Uso Institucional:</strong>
                        <span class="subsection-desc">
                            La plataforma se destinara de manera exclusiva al desempeño de las funciones laborales asignadas dentro del sistema municipal de salud.
                        </span>
                    </li>
                    <li>
                        <strong>Prohibiciones Específicas:</strong>
                        <span class="subsection-desc">
                            <ul class="d-flex flex-column gap-3 mt-3">
                                <li>
                                    <span class="subsection-desc">
                                        Alterar, borrar o dañar registros médicos o archivos del sistema de forma malintencionada.
                                    </span>
                                </li>
                                <li>
                                    <span class="subsection-desc">
                                        Introducir software malicioso o ejecutar scripts que comprometan la red interna.
                                    </span>
                                </li>
                                <li>
                                    <span class="subsection-desc">
                                        Utilizar los canales internos de mensajería o foros para fines partidistas, comerciales, difamatorios o ajenos al servicio público.
                                    </span>
                                </li>
                            </ul>
                        </span>
                    </li>
                </ul>
            </span>
        </div>

        
        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">
            <div class="d-flex align-items-center justify-content-between gap-2">
                <span class="fw-bold">Auditoría y Monitoreo</span>
                <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                    Supervisión
                </span>
            </div>
            <span class="subsection-desc">
                Salud Chacao se reserva el derecho de supervisar y auditar los registros de actividad (logs) de la Intranet. Esto incluye, sin limitación:

                <ul class="d-flex flex-column gap-3 mt-3">
                    <li>
                        <span class="subsection-desc">
                            Horarios de acceso e IP de origen.
                        </span>
                    </li>
                    <li>
                        <span class="subsection-desc">
                            Registros de modificación de fichas médicas o documentos institucionales.
                        </span>
                    </li>
                    <li>
                        <span class="subsection-desc">
                            Archivos descargados o transmitidos a través de la red interna.
                        </span>
                    </li>
                </ul>
            </span>
        </div>
        
        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">
            <div class="d-flex align-items-center justify-content-between gap-2">
                <span class="fw-bold">Propiedad Intelectual</span>
                <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                    Activos Institucionales
                </span>
            </div>
            <span class="subsection-desc">
                Todos los formatos, manuales operativos, protocolos médicos, sistemas de gestión y software desarrollados o implementados en esta Intranet son propiedad exclusiva de Salud Chacao. Queda prohibida su reproducción externa o difusión fuera del ámbito municipal sin autorización previa por escrito.
            </span>
        </div>
        
        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">
            <div class="d-flex align-items-center justify-content-between gap-2">
                <span class="fw-bold">Régimen Sancionatorio</span>
                <div class="d-flex align-items-center gap-1">
                    <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                        Legal y Disciplinario
                    </span>
                    <span class="badge text-bg-danger d-flex align-items-center gap-1 text-center">
                        IMPORTANTE
                    </span> 
                </div>
            </div>
            <span class="subsection-desc">
                El incumplimiento de los presentes términos podrá dar lugar a:
                                <ul class="d-flex flex-column gap-3 mt-3">
                    <li>
                        <span class="subsection-desc">
                            <strong>Medidas Disciplinarias:</strong>
                            Suspensión temporal o destitución con base en la Ley del Estatuto de la Función Pública o Código de Conducta interno.
                        </span>
                    </li>
                    <li>
                        <span class="subsection-desc">
                            <strong>Acciones Legales:</strong>
                            Denuncia ante los órganos de jurisdicción penal y civil competentes en caso de vulneración del secreto profesional, sabotaje de sistemas o sustracción no autorizada de información confidencial.
                        </span>
                    </li>
                </ul>
            </span>
        </div>
    `;
  lucide.createIcons();
}
