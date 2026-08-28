/**
 * Estructura de la base de datos `chacao`
 * Generada a partir del dump SQL para poder construir dinámicamente
 * tablas HTML (uno por cada tabla de la BD).
 *
 * Cada tabla tiene:
 *  - name: nombre real de la tabla en la BD
 *  - label: nombre "bonito" para mostrar en el HTML
 *  - primaryKey: columna(s) que forman la PK
 *  - columns: arreglo de columnas con:
 *      - name: nombre de la columna
 *      - type: tipo de dato SQL
 *      - nullable: si acepta NULL
 *      - default: valor por defecto (si aplica)
 *      - enumValues: valores posibles si es ENUM
 *      - foreignKey: { table, column } si es llave foránea
 */

const estructuraBD = [
  {
    name: "cambio_perfil",
    label: "Cambios de Perfil",
    primaryKey: ["id_solicitud"],
    columns: [
      { name: "id_solicitud", type: "int", nullable: false },
      {
        name: "id_usuario_solicitante",
        type: "int",
        nullable: false,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      {
        name: "id_usuario_gestor",
        type: "int",
        nullable: true,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      {
        name: "tipo_campo",
        type: "enum",
        nullable: false,
        enumValues: [
          "Nombres",
          "Apellidos",
          "Cargo",
          "Correo",
          "Contraseña",
          "Usuario",
          "Otro",
        ],
      },
      { name: "valor_anterior", type: "varchar(255)", nullable: true },
      { name: "valor_nuevo", type: "varchar(255)", nullable: true },
      {
        name: "estatus",
        type: "enum",
        nullable: false,
        default: "Pendiente",
        enumValues: ["Pendiente", "Aprobado", "Rechadazo"],
      },
      { name: "desc_camp", type: "text", nullable: true },
      {
        name: "fecha_solicitud",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
      { name: "fecha_resolución", type: "timestamp", nullable: true },
      { name: "descripcion_otro", type: "text", nullable: true },
      {
        name: "resuelto",
        type: "enum",
        nullable: false,
        default: "No",
        enumValues: ["Si", "No"],
      },
    ],
  },
  {
    name: "carga_recibos",
    label: "Cargas de Recibos",
    primaryKey: ["id_carga"],
    columns: [
      { name: "id_carga", type: "int", nullable: false },
      {
        name: "id_usuario",
        type: "int",
        nullable: true,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      { name: "nombre_archivo", type: "varchar(255)", nullable: false },
      { name: "cantidad_recibos", type: "int", nullable: false },
      {
        name: "estado",
        type: "enum",
        nullable: false,
        enumValues: ["Completado", "Error", "Procesando"],
      },
      {
        name: "fecha_carga",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
    ],
  },
  {
    name: "cargos",
    label: "Cargos",
    primaryKey: ["id_cargo"],
    columns: [
      { name: "id_cargo", type: "int", nullable: false },
      { name: "cargo", type: "varchar(100)", nullable: false, unique: true },
      {
        name: "tipo_trabajador",
        type: "enum",
        nullable: false,
        enumValues: ["Asistencial", "Empleado", "Directivo", "Jubilado"],
      },
    ],
  },
  {
    name: "categoria_tickets",
    label: "Categorías de Tickets",
    primaryKey: ["id_categoria"],
    columns: [
      { name: "id_categoria", type: "int", nullable: false },
      { name: "nombre", type: "varchar(100)", nullable: false },
      { name: "id_categoria_padre", type: "int", nullable: true },
      { name: "prioridad", type: "int", nullable: false },
      {
        name: "responsable",
        type: "int",
        nullable: true,
        foreignKey: { table: "direcciones", column: "id_direccion" },
      },
    ],
  },
  {
    name: "codigos_recuperacion",
    label: "Códigos de Recuperación",
    primaryKey: ["id_codigo"],
    columns: [
      { name: "id_codigo", type: "int", nullable: false },
      {
        name: "id_Usuario",
        type: "int",
        nullable: false,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      { name: "codigo", type: "varchar(6)", nullable: false },
      { name: "expira_en", type: "datetime", nullable: false },
      { name: "usado", type: "tinyint", nullable: false, default: 0 },
    ],
  },
  {
    name: "competencias",
    label: "Competencias",
    primaryKey: ["id_competencia"],
    columns: [
      { name: "id_competencia", type: "int", nullable: false },
      { name: "nombre", type: "varchar(255)", nullable: false },
    ],
  },
  {
    name: "condiciones",
    label: "Condiciones",
    primaryKey: ["id_condicion"],
    columns: [
      { name: "id_condicion", type: "int", nullable: false },
      { name: "condicion", type: "varchar(100)", nullable: false },
    ],
  },
  {
    name: "configuracion_cargo",
    label: "Configuración de Cargo",
    primaryKey: ["id_config"],
    columns: [
      { name: "id_config", type: "int", nullable: false },
      {
        name: "id_cargo",
        type: "int",
        nullable: false,
        foreignKey: { table: "cargos", column: "id_cargo" },
      },
      {
        name: "id_especialidad",
        type: "int",
        nullable: true,
        foreignKey: { table: "especialidades", column: "id_especialidad" },
      },
      {
        name: "id_nivel",
        type: "int",
        nullable: true,
        foreignKey: { table: "niveles", column: "id_nivel" },
      },
      { name: "nombre", type: "varchar(100)", nullable: false },
    ],
  },
  {
    name: "dedicacion",
    label: "Dedicación",
    primaryKey: ["id_dedicacion"],
    columns: [
      { name: "id_dedicacion", type: "int", nullable: false },
      { name: "dedicacion", type: "varchar(100)", nullable: false },
    ],
  },
  {
    name: "direcciones",
    label: "Direcciones",
    primaryKey: ["id_direccion"],
    columns: [
      { name: "id_direccion", type: "int", nullable: false },
      { name: "nombre_direccion", type: "varchar(100)", nullable: false },
    ],
  },
  {
    name: "empleados",
    label: "Empleados",
    primaryKey: ["id_empleado"],
    columns: [
      { name: "id_empleado", type: "int", nullable: false },
      { name: "cedula", type: "varchar(20)", nullable: false, unique: true },
      { name: "nombres", type: "varchar(100)", nullable: false },
      { name: "apellidos", type: "varchar(100)", nullable: false },
      { name: "genero", type: "enum", nullable: false, enumValues: ["F", "M"] },
      { name: "fec_nac", type: "date", nullable: false },
      { name: "fec_ingreso", type: "date", nullable: false },
      {
        name: "id_config",
        type: "int",
        nullable: true,
        foreignKey: { table: "configuracion_cargo", column: "id_config" },
      },
      {
        name: "condicion",
        type: "int",
        nullable: true,
        foreignKey: { table: "condiciones", column: "id_condicion" },
      },
      {
        name: "dedicacion",
        type: "int",
        nullable: true,
        foreignKey: { table: "dedicacion", column: "id_dedicacion" },
      },
      {
        name: "tipo_trab",
        type: "int",
        nullable: true,
        foreignKey: { table: "tipo_personal", column: "id_tipo" },
      },
      {
        name: "id_direccion",
        type: "int",
        nullable: true,
        default: 31,
        foreignKey: { table: "direcciones", column: "id_direccion" },
      },
      {
        name: "id_escala",
        type: "int",
        nullable: true,
        foreignKey: { table: "escala_salarial", column: "id_escala" },
      },
    ],
  },
  {
    name: "escala",
    label: "Escala",
    primaryKey: ["id_escala"],
    columns: [
      { name: "id_escala", type: "int", nullable: false },
      { name: "valor_minimo", type: "int", nullable: false },
      { name: "valor_maximo", type: "int", nullable: false },
      { name: "cualitativo", type: "varchar(255)", nullable: false },
    ],
  },
  {
    name: "escala_salarial",
    label: "Escala Salarial",
    primaryKey: ["id_escala"],
    columns: [
      { name: "id_escala", type: "int", nullable: false },
      {
        name: "tipo_trab",
        type: "int",
        nullable: false,
        foreignKey: { table: "tipo_personal", column: "id_tipo" },
      },
      { name: "grado", type: "int", nullable: false },
      { name: "paso", type: "int", nullable: false },
      { name: "horas", type: "int", nullable: false },
      { name: "sbm", type: "decimal(10,2)", nullable: false },
    ],
  },
  {
    name: "especialidades",
    label: "Especialidades",
    primaryKey: ["id_especialidad"],
    columns: [
      { name: "id_especialidad", type: "int", nullable: false },
      {
        name: "especialidad",
        type: "varchar(100)",
        nullable: false,
        unique: true,
      },
    ],
  },
  {
    name: "estados",
    label: "Estados (Tickets)",
    primaryKey: ["id_estado"],
    columns: [
      { name: "id_estado", type: "int", nullable: false },
      { name: "nombre", type: "varchar(50)", nullable: false },
    ],
  },
  {
    name: "evaluaciones",
    label: "Evaluaciones",
    primaryKey: ["id_eval"],
    columns: [
      { name: "id_eval", type: "int", nullable: false },
      {
        name: "id_empleado",
        type: "int",
        nullable: false,
        foreignKey: { table: "empleados", column: "id_empleado" },
      },
      {
        name: "id_evaluador",
        type: "int",
        nullable: false,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      {
        name: "evaluado_el",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
      { name: "desde", type: "date", nullable: false },
      { name: "hasta", type: "date", nullable: false },
      { name: "meses_evaluados", type: "int", nullable: false },
      { name: "calificacion", type: "int", nullable: false },
      {
        name: "en_escala",
        type: "int",
        nullable: false,
        foreignKey: { table: "escala", column: "id_escala" },
      },
      { name: "debilidades", type: "text", nullable: true },
      { name: "observaciones", type: "text", nullable: true },
      {
        name: "confirmada",
        type: "enum",
        nullable: false,
        default: "No",
        enumValues: ["Si", "No"],
      },
      { name: "pdf_path", type: "text", nullable: true },
      {
        name: "periodo",
        type: "int",
        nullable: true,
        foreignKey: { table: "periodo_evaluaciones", column: "id_periodo" },
      },
    ],
  },
  {
    name: "historial_tickets",
    label: "Historial de Tickets",
    primaryKey: ["id_historial"],
    columns: [
      { name: "id_historial", type: "int", nullable: false },
      {
        name: "id_ticket",
        type: "int",
        nullable: true,
        foreignKey: { table: "tickets_tecnicos", column: "id_ticket" },
      },
      { name: "id_usuario", type: "int", nullable: false },
      { name: "accion", type: "varchar(100)", nullable: false },
      {
        name: "fecha",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
    ],
  },
  {
    name: "indicadores",
    label: "Indicadores",
    primaryKey: ["id_indicador"],
    columns: [
      { name: "id_indicador", type: "int", nullable: false },
      { name: "indicador", type: "varchar(255)", nullable: false },
      { name: "valor", type: "int", nullable: false },
      {
        name: "competencia",
        type: "int",
        nullable: false,
        foreignKey: { table: "competencias", column: "id_competencia" },
      },
    ],
  },
  {
    name: "informaciones",
    label: "Informaciones / Anuncios",
    primaryKey: ["id_informacion"],
    columns: [
      { name: "id_informacion", type: "int", nullable: false },
      {
        name: "id_usuario",
        type: "int",
        nullable: true,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      { name: "titulo", type: "text", nullable: false },
      { name: "contenido", type: "longtext", nullable: false },
      {
        name: "fecha_publicacion",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
      {
        name: "visibilidad",
        type: "enum",
        nullable: false,
        default: "all",
        enumValues: ["all", "directives"],
      },
      {
        name: "categoria",
        type: "enum",
        nullable: false,
        enumValues: [
          "Documentos",
          "Asistencia",
          "Evaluación Desempeño",
          "Consignación",
          "General",
        ],
      },
      {
        name: "estado",
        type: "enum",
        nullable: false,
        default: "Visible",
        enumValues: ["Visible", "Archivado", "Programado"],
      },
    ],
  },
  {
    name: "modulos_permisos",
    label: "Módulos de Permisos",
    primaryKey: ["id_modulo"],
    columns: [
      { name: "id_modulo", type: "int", nullable: false },
      { name: "nombre", type: "varchar(100)", nullable: false },
      { name: "descripcion", type: "text", nullable: false },
    ],
  },
  {
    name: "niveles",
    label: "Niveles",
    primaryKey: ["id_nivel"],
    columns: [
      { name: "id_nivel", type: "int", nullable: false },
      { name: "nombre_nivel", type: "varchar(10)", nullable: false },
      { name: "orden", type: "tinyint", nullable: false },
    ],
  },
  {
    name: "nominas",
    label: "Nóminas",
    primaryKey: ["id_nomina"],
    columns: [
      { name: "id_nomina", type: "int", nullable: false },
      {
        name: "nombre_nomina",
        type: "varchar(100)",
        nullable: false,
        unique: true,
      },
    ],
  },
  {
    name: "notificaciones",
    label: "Notificaciones",
    primaryKey: ["id_notificacion"],
    columns: [
      { name: "id_notificacion", type: "int", nullable: false },
      {
        name: "id_usuario",
        type: "int",
        nullable: false,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      {
        name: "tipo",
        type: "enum",
        nullable: false,
        enumValues: [
          "recibo",
          "evaluacion",
          "constancia",
          "ticket",
          "cambios_perfil",
          "cambio_contraseña",
        ],
      },
      { name: "titulo", type: "varchar(150)", nullable: false },
      { name: "mensaje", type: "varchar(255)", nullable: false },
      { name: "url_destino", type: "varchar(255)", nullable: false },
      { name: "leida", type: "tinyint", nullable: false, default: 0 },
      {
        name: "fecha_creacion",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
    ],
  },
  {
    name: "periodo_evaluaciones",
    label: "Períodos de Evaluación",
    primaryKey: ["id_periodo"],
    columns: [
      { name: "id_periodo", type: "int", nullable: false },
      {
        name: "id_usuario",
        type: "int",
        nullable: false,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      { name: "inicia_el", type: "date", nullable: false },
      { name: "finaliza_el", type: "date", nullable: false },
      { name: "captura_desde", type: "datetime", nullable: true },
      { name: "captura_hasta", type: "datetime", nullable: true },
      {
        name: "estatus",
        type: "enum",
        nullable: false,
        enumValues: ["Abierto", "Cerrado", "Programado"],
      },
    ],
  },
  {
    name: "prioridades",
    label: "Prioridades",
    primaryKey: ["id_prioridad"],
    columns: [
      { name: "id_prioridad", type: "int", nullable: false },
      { name: "nombre", type: "varchar(50)", nullable: false },
      { name: "nivel", type: "int", nullable: false },
    ],
  },
  {
    name: "recibos_pago",
    label: "Recibos de Pago",
    primaryKey: ["id_recibo"],
    columns: [
      { name: "id_recibo", type: "int", nullable: false },
      {
        name: "cedula",
        type: "varchar(100)",
        nullable: false,
        foreignKey: { table: "empleados", column: "cedula" },
      },
      {
        name: "id_nomina",
        type: "int",
        nullable: false,
        foreignKey: { table: "nominas", column: "id_nomina" },
      },
      { name: "mes", type: "varchar(10)", nullable: false },
      { name: "desde", type: "date", nullable: false },
      { name: "hasta", type: "date", nullable: false },
      { name: "archivo_path", type: "text", nullable: false },
      {
        name: "fec_carga",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
      {
        name: "lote",
        type: "int",
        nullable: true,
        foreignKey: { table: "carga_recibos", column: "id_carga" },
      },
    ],
  },
  {
    name: "resultados_item",
    label: "Resultados por Ítem",
    primaryKey: ["id_result"],
    columns: [
      { name: "id_result", type: "int", nullable: false },
      {
        name: "id_evaluacion",
        type: "int",
        nullable: false,
        foreignKey: { table: "evaluaciones", column: "id_eval" },
      },
      {
        name: "id_item",
        type: "int",
        nullable: false,
        foreignKey: { table: "indicadores", column: "id_indicador" },
      },
      { name: "calificacion", type: "int", nullable: false },
    ],
  },
  {
    name: "roles",
    label: "Roles",
    primaryKey: ["id_rol"],
    columns: [
      { name: "id_rol", type: "int", nullable: false },
      { name: "nombre_rol", type: "varchar(100)", nullable: false },
      {
        name: "estado",
        type: "enum",
        nullable: false,
        enumValues: ["Activo", "Inactivo"],
      },
    ],
  },
  {
    name: "solicitudes_constancias",
    label: "Solicitudes de Constancias",
    primaryKey: ["id_constancia"],
    columns: [
      { name: "id_constancia", type: "int", nullable: false },
      {
        name: "id_usuario_solicitante",
        type: "int",
        nullable: true,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      {
        name: "id_usuario_gestor",
        type: "int",
        nullable: true,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      {
        name: "fecha_solicitud",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
      { name: "motivo_solicitud", type: "text", nullable: false },
      {
        name: "estatus",
        type: "enum",
        nullable: true,
        default: "Pendiente",
        enumValues: ["Pendiente", "Aprobado", "No aprobada"],
      },
      { name: "fecha_accion", type: "timestamp", nullable: true },
      { name: "motivo_rechazo", type: "text", nullable: true },
      { name: "codigo_verificacion", type: "varchar(8)", nullable: true },
      { name: "hash_seguridad", type: "varchar(64)", nullable: true },
      { name: "metadatos_snapshot", type: "longtext (JSON)", nullable: true },
      { name: "comentarios_rrhh", type: "text", nullable: true },
      { name: "dir", type: "text", nullable: true },
    ],
  },
  {
    name: "tickets_tecnicos",
    label: "Tickets Técnicos",
    primaryKey: ["id_ticket"],
    columns: [
      { name: "id_ticket", type: "int", nullable: false },
      {
        name: "id_usuario_emisor",
        type: "int",
        nullable: false,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      {
        name: "dir_responsable",
        type: "int",
        nullable: true,
        foreignKey: { table: "direcciones", column: "id_direccion" },
      },
      {
        name: "id_categoria",
        type: "int",
        nullable: false,
        foreignKey: { table: "categoria_tickets", column: "id_categoria" },
      },
      {
        name: "id_estado",
        type: "int",
        nullable: false,
        default: 1,
        foreignKey: { table: "estados", column: "id_estado" },
      },
      {
        name: "id_prioridad",
        type: "int",
        nullable: false,
        foreignKey: { table: "prioridades", column: "id_prioridad" },
      },
      { name: "id_bien", type: "varchar(6)", nullable: false },
      { name: "titulo", type: "varchar(150)", nullable: false },
      { name: "descripcion", type: "text", nullable: false },
      { name: "captura", type: "text", nullable: true },
      {
        name: "fecha_creacion",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
      {
        name: "fecha_actualizacion",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
      {
        name: "fecha_cierre",
        type: "datetime",
        nullable: true,
        note: "Se llena automáticamente por trigger tg_cerrar_ticket cuando id_estado = 4",
      },
    ],
  },
  {
    name: "tipo_personal",
    label: "Tipo de Personal",
    primaryKey: ["id_tipo"],
    columns: [
      { name: "id_tipo", type: "int", nullable: false },
      { name: "nombre_tipo", type: "varchar(255)", nullable: false },
    ],
  },
  {
    name: "usuarios",
    label: "Usuarios",
    primaryKey: ["id_Usuario"],
    columns: [
      { name: "id_Usuario", type: "int", nullable: false },
      { name: "usuario", type: "varchar(50)", nullable: false, unique: true },
      { name: "password_hash", type: "varchar(255)", nullable: false },
      {
        name: "correo_usuario",
        type: "varchar(100)",
        nullable: true,
        unique: true,
      },
      { name: "telefono", type: "varchar(20)", nullable: true },
      { name: "ultima_conexion", type: "datetime", nullable: true },
      {
        name: "creado_el",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
      {
        name: "emp_hab",
        type: "int",
        nullable: true,
        unique: true,
        foreignKey: { table: "empleados", column: "id_empleado" },
      },
      {
        name: "rol",
        type: "int",
        nullable: false,
        default: 3,
        foreignKey: { table: "roles", column: "id_rol" },
      },
      {
        name: "estado",
        type: "enum",
        nullable: false,
        default: "Activo",
        enumValues: ["Activo", "Inactivo"],
      },
    ],
  },
  {
    name: "usuarios_permisos",
    label: "Permisos de Usuarios",
    primaryKey: ["id_permiso"],
    columns: [
      { name: "id_permiso", type: "int", nullable: false },
      {
        name: "id_usuario",
        type: "int",
        nullable: false,
        foreignKey: { table: "usuarios", column: "id_Usuario" },
      },
      {
        name: "id_modulo",
        type: "int",
        nullable: false,
        foreignKey: { table: "modulos_permisos", column: "id_modulo" },
      },
      {
        name: "estado",
        type: "enum",
        nullable: false,
        default: "Activo",
        enumValues: ["Activo", "Inactivo"],
      },
      {
        name: "fecha_otorgado",
        type: "timestamp",
        nullable: false,
        default: "current_timestamp()",
      },
    ],
  },
];

function renderTablas(container, datos = []) {
  if (!container) return;

  const html = datos
    .map((dat) => {
      const filasColumnas = dat.columns
        .map((col) => {
          const esPK = dat.primaryKey.includes(col.name);
          const fk = col.foreignKey
            ? `${col.foreignKey.table}.${col.foreignKey.column}`
            : "-";
          const tipo = col.enumValues
            ? `enum(${col.enumValues.join(", ")})`
            : col.type;

          return `
            <tr>
              <td scope="row">
                ${col.name}
                ${esPK ? '<span class="badge text-bg-warning ms-1">PRIMARY_KEY</span>' : ""}
                ${col.unique ? '<span class="badge text-bg-info ms-1">UNIQUE</span>' : ""}
              </td>
              <td style="max-width: 200px;">${tipo}</td>
              <td>${col.nullable ? "Sí" : "No"}</td>
              <td>${col.default ?? "—"}</td>
              <td>${fk}</td>
            </tr>
          `;
        })
        .join("");

      return `
        <div class="content-wrapper w-100 border border-1 rounded-4 d-flex flex-column gap-2 p-4 mt-2 shadow bg-body">

            <div class="d-flex align-items-center justify-content-between gap-2">
                <span class="fw-bold">${dat.label}</span>
                <h5>
                    <span class="badge text-bg-primary d-flex align-items-center gap-1 text-center">
                        ${dat.name}
                    </span>
                </h5>
            </div>

            <hr class="hr hr-blurry">

            <div class="table-responsive">
                <table
                    class="table table-hover align-middle">
                    <thead>
                    <tr>
                        <th scope="col">Columna</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Nulo</th>
                        <th scope="col">Default</th>
                        <th scope="col">Llave foránea</th>
                    </tr>
                </thead>
                    <tbody>
                        ${filasColumnas}
                    </tbody>
                </table>
            </div>
        </div>
        `;
    })
    .join("");
  container.innerHTML = html;
}

export function renderDiccionario(main) {
  main.innerHTML = `
            <h4 class="fw-bold">Diccionario de datos</h4>
            <div class="table-wrapper w-100 d-flex flex-column gap-3"></div>
        `;

  const container = document.querySelector(".table-wrapper");
  renderTablas(container, estructuraBD);
}
