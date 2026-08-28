import { renderizarTarjetaModulo } from "./modulos.js";
import { sideBarButtonTrigger } from "./sideBar.js";

const mainContentDOM = {
  modulesWrapper: document.querySelector(".modules-wrapper"),
  mainContent: document.querySelector(".content-principal"),
};

renderizarTarjetaModulo(mainContentDOM.modulesWrapper);
sideBarButtonTrigger(mainContentDOM.mainContent);
