//* Funciones para determiar la estacion

import { spring, summer, autumn, winter } from "../data/seasons.js";

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
      ["Rubio Miel", "Rubio Dorado"].includes(r.color_cabello) &&
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
      ["Azul", "Verde", "Marron Claro"].includes(r.color_ojos),
    result: spring,
  },
  //* End Spring
  //* Start Summer
  {
    name: "Verano (Summer)",
    match: (r) =>
      r.tono_piel === "Muy Clara" ||
      ((r.tono_piel === "Media" || r.subTono_piel === "Frio") &&
        (r.color_cabello === "Rubio Claro" ||
          r.color_cabello === "Rubio Cenizo" ||
          (r.color_cabello === "Castaño Claro" && r.subTono_piel === "Frio")) &&
        ["Azul", "Gris", "Verde", "Marron", "Marron Avellana"].includes(
          r.color_ojos
        )),
    result: summer,
  },
  {
    name: "Verano Claro (Light Summer)",
    match: (r) =>
      r.tono_piel === "Clara" &&
      ["Frio", "Neutro"].includes(r.subTono_piel) &&
      (["Rubio Claro", "Rubio Cenizo"].includes(r.color_cabello) ||
        (r.color_cabello === "Castaño Claro" && r.subTono_piel === "Frio")) &&
      ["Azul Claro", "Azul Grizaceo", "Verde Claro", "Gris Claro"].includes(
        r.color_ojos
      ),
    result: summer,
  },
  {
    name: "Verano Suave (Soft Summenr)",
    match: (r) =>
      r.tono_piel === "Clara" &&
      ["Frio", "Neutro"].includes(r.subTono_piel) &&
      ["Rubio Oscuro", "Castaño Claro", "Castaño Medio"].includes(
        r.color_cabello
      ) &&
      ["Azul Grisaceo", "Verde Oliva", "Marron Claro", "Gris Verde"].includes(
        r.color_ojos
      ),
    result: summer,
  },
  {
    name: "Verano Frio (Cool Summer)",
    match: (r) =>
      r.tono_piel === "Clara" &&
      r.subTono_piel === "Frio" &&
      ["Rubio Oscuro", "Castaño Medio"].includes(r.color_cabello) &&
      ["Azul Acero", "Azul hielo", "Verde Jade"].includes(r.color_ojos),
    result: summer,
  },
  //* End Summer
  //* Start Autumn
  {
    name: "Otoño",
    macth: (r) =>
      (["Clara", "Media", "Ocura"].includes(r.tono_piel) &&
        ["Calido", "Neutrpo"].includes(r.subTono_piel) &&
        ["Rubbio Oscuro", "Castaño Rojizo", "Pelirojo"].includes(
          r.color_cabello
        )) ||
      (r.color_cabello === "Castaño Neutro" &&
        r.subTono_piel === "Calido" &&
        ["Verde Oliva Marron Avellana", "Azul Grisaceo"].includes(
          r.color_ojos
        )),
    result: autumn,
  },
  {
    name: "Otoño Claro (Light Autumn)",
    match: (r) =>
      r.tono_piel === "Clara" ||
      (r.tono_piel === "Media" &&
        ["Calido", "Neutro"].includes(r.subTono_piel) &&
        ["Rubio Oscuro", "Castaño Claro"].includes(r.color_cabello)) ||
      (r.color_cabello === "Castaño Medio" &&
        r.destellos === "Dorados o Calidos" &&
        [
          "Verde Oliva",
          "Marron Claro",
          "Marron Avellana",
          "Azul Grisaceo",
        ].includes(r.color_ojos)),
    result: autumn,
  },
  {
    name: "Otoño Calido (Warm Autumn)",
    match: (r) =>
      r.tono_piel === "Clara" ||
      (r.tono_piel === "Media" &&
        r.subTono_piel === "Calido" &&
        ["Rubio Media", "Castaño Medio", "Pelirojo"].includes(
          r.color_cabello
        ) &&
        [
          "Verde Brillante",
          "Marron Dorado",
          "Marron Avellana",
          "Azul Turqueza",
        ].includes(r.color_ojos)),
    result: autumn,
  },
  {
    name: "Otoño Oscuro (Dark Autumn)",
    match: (r) =>
      r.tono_piel === "Media" ||
      (r.tono_piel === "Oscura" &&
        r.subTono_piel === "Calido" &&
        r.color_cabello === "Marron") ||
      (r.color_cabello === "Castaño Oscuro" && r.subTono_piel === "Calido") ||
      (r.color_cabello === "Nergo" &&
        r.destellos === "Dorados o Calidos" &&
        [
          "Marron Oscuro",
          "Verde Brillante",
          "Marron Avellana",
          "Azul Brillante",
        ].includes(r.color_ojos)),
    result: autumn,
  },
  //* End Autumn
  //* Start Winter
  {
    name: "Invierno (Winter)",
    match: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      ["Frio", "Neutro"].includes(r.subTono_piel) &&
      ["Negro", "Castaño Oscuro", "Castaño Medio"].includes(r.color_cabello) &&
      ["Marron Oscuro", "Azul Hielo", "Verde", "Gris Plateado"].includes(
        r.color_ojos
      ),
    result: winter,
  },
  {
    name: "Invierno Profundo (Deep Winter)",
    macth: (r) =>
      (r.tono_piel === "Media" ||
        (r.tono_piel === "Oscuro" && r.subTono_piel === "Frio")) &&
      ["Negro", "Marron Oscuro", "Castaño Medio"].includes(r.color_cabello) &&
      ["Marron Oscuro", "Verde", "Azul Brillante"].includes(r.color_ojos),
    result: winter,
  },
  {
    name: "Invierno Frio (True Winter)",
    macth: (r) =>
      (r.tono_piel === "Clara" ||
        (r.tono_piel === "Media" && r.subTono_piel === "Frio")) &&
      ["Negro", "Castaño Oscuro"].includes(r.color_cabello) &&
      ["Azul Hielo", "Gris Plateado", "Marron", "Verde"].includes(r.color_ojos),
    result: winter,
  },
  {
    name: "Invierno Brillante",
    macth: (r) =>
      (r.tono_piel === "Clara" ||
        (r.tono_piel === "Media" && r.subTono_piel === "Frio")) &&
      ["Negro", "Castaño Oscuro"].includes(r.color_cabello) &&
      [
        "Azul Brillante",
        "Verde Claro",
        "Gris Claro",
        "Marron Avellana",
      ].includes(r.color_ojos),
    result: winter,
  },
  //* End Winter
];

export default RULES;
