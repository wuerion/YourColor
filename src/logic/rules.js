//* Funciones para determiar la estacion

import { spring, summer } from "../data/seasons.js";

const RULES = [
  //* Start Spring
  {
    name: "Primavera (Spring)",
    match: (r) =>
      r.tono_piel === "Muy Clara" ||
      (((r.tono_piel === "Clara" && r.subTono_piel === "Calido") ||
        r.subTono_piel === "Frio") &&
        [
          "Rubio Claro",
          "Castaño Claro",
          "Rubio Dorado",
          "Rubio Miel",
          "Caoba",
        ].includes(r.color_cabello) &&
        ["Azul", "Verde", "Marron Claro", "Marron Avellana"].includes(
          r.color_ojos
        )),
    result: spring,
  },
  {
    name: "Pirmavera Clara (Ligth Spring)",
    match: (r) =>
      r.tono_piel === "Clara" &&
      r.subTono_piel === "Calido" &&
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
  {
    name: "Primavera Brillante (Brigth Spring)",
    match: (r) =>
      (r.tono_piel === "Media" ||
        (r.tono_piel === "Clara" &&
          r.subTono_piel === "Calido" &&
          r.color_cabello === "Rubio Dorado") ||
        r.color_cabello === "Rubio Miel") &&
      (r.color_ojos === "Azul" ||
        r.color_ojos === "Verde" ||
        r.color_ojos === "Marron Claro"),
    result: spring,
  },
  //* End Spring
  //* Start Summer
  {
    name: "Verano (Summer)",
    match: (r) =>
      r.tono_piel === "Muy Clara" &&
      (r.tono_piel === "Medio" || r.subTono_piel === "Frio") &&
      (r.color_cabello === "Rubio Claro" ||
        r.color_cabello === "Rubio Cenizo" ||
        (r.color_cabello === "Castaño Claro" && r.subTono_piel === "Frio")) &&
      ["Azul", "Gris", "Verde", "Marron", "Marron Avellana"].includes(
        r.color_ojos
      ),
    result: summer,
  },
];

export default RULES;
