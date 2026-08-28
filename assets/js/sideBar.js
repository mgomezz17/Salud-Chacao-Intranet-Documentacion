import { renderResumen } from "./views/resumen.js";
import { renderArquitectura } from "./views/arquitectura.js";
import { renderDiccionario } from "./views/diccionario.js";
import { renderLegal } from "./views/legal.js";
import { renderEsquemaEvaluacion } from "./views/Evaluacion.js";
import { renderEsquemaPerfil } from "./views/Perfil.js";
import { renderEsquemaCartelera } from "./views/Cartelera.js";
import { renderEsquemaAdmin } from "./views/Admin.js";
import { renderEsquemaNotificaciones } from "./views/Notificaciones.js";
import { renderEsquemaConstancias } from "./views/Constancias.js";
import { renderEsquemaRecibos } from "./views/Recibos.js";
import { renderEsquemaTickets } from "./views/tickets.js";

const views = {
  resumen: renderResumen,
  arquitectura: renderArquitectura,
  diccionario: renderDiccionario,
  legal: renderLegal,
  evaluacion: renderEsquemaEvaluacion,
  perfil: renderEsquemaPerfil,
  cartelera: renderEsquemaCartelera,
  notificacion: renderEsquemaNotificaciones,
  constancias: renderEsquemaConstancias,
  recibos: renderEsquemaRecibos,
  tickets: renderEsquemaTickets,
};

export function sideBarButtonTrigger(main) {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".side-bar-button[data-view]");
    const content = document.querySelector(".content-principal");

    if (!btn) return;

    const viewName = btn.dataset.view;
    const renderView = views[viewName];

    if (!renderView) {
      console.warn(`No existe una vista para ${viewName}`);
      return;
    }

    const container = btn.closest(".side-bar", ".offcanvas-body") || document;

    const accordionBtn = container.querySelector(".accordion-button");
    const collapseEl = container.querySelector(".accordion-collapse");
    const isInsideAccordion = btn.closest(".accordion-collapse") !== null;

    if (!isInsideAccordion && collapseEl?.classList.contains("show")) {
      const collapeInstance = bootstrap.Collapse.getOrCreateInstance(
        collapseEl,
        {
          toggle: false,
        },
      );
      collapeInstance.hide();
    }

    document.querySelectorAll(".side-bar-button[data-view]").forEach((b) => {
      b.classList.remove("active", "esquema-active");
    });

    accordionBtn?.classList.remove("active");

    if (isInsideAccordion) {
      accordionBtn?.classList.add("active");
    }

    if (btn.dataset.module) {
      document
        .querySelectorAll(`.side-bar-button[data-view="${btn.dataset.view}"]`)
        .forEach((moduleBtn) =>
          moduleBtn.classList.add("esquema-active", "active"),
        );

      document.querySelectorAll(".accordion-button").forEach((accBtn) => {
        accBtn.classList.add("active");
        bootstrap.Collapse.getOrCreateInstance(
          accBtn.closest(".accordion").querySelector(".accordion-collapse"),
          { toggle: false },
        ).show();
      });
    }

    btn.classList.add("active");
    if (btn.classList.contains("esquema")) {
      btn.classList.add("esquema-active");
    }

    renderView(main);
  });
}
