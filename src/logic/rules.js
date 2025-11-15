//* Funciones para determiar la estacion

import { spring } from "../data/seasons.js";

const RULES = [
  {
    name: "Pirmavera Clara (Ligth Spring)",
    match: (r) =>
      r.tono_piel === "Clara" &&
      r.subtono_piel === "Calido" &&
      (r.color_cabello === "Rubio Miel" ||
        r.color_cabello === "Rubio Dorado") &&
      (r.color_ojos === "Azul Brillante" || r.color_ojos === "Verde Claro"),
    result: spring,
  },
  {
    name: "Primavera Calida (Warm Spring)",
    match: (r) =>
      (r.tono_piel === "Media" &&
        r.subTono_piel === "Calido" &&
        r.color_cabello === "Rubio Dorado") ||
      (r.color_cabello === "Castaño Claro" &&
        r.destellos === "Dorados o Calidos" &&
        r.color_ojos === "Marron Dorado") ||
      (r.color_ojos === "Marron Avellana" &&
        r.destellos === "Dorados o Calidos"),
    result: spring,
  },
];

export default RULES;
