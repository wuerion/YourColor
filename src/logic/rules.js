//* Funciones para determiar la estacion

import { spring, summer, autumn, winter } from "../data/seasons.js";
import result from "./functionsUi.js";

const RULES = [
  //* Start Spring
  // Light Spring
  {
    name: "Primavera Clara (Light Spring)",
    match: (r) =>
      r.tono_piel === "Clara" &&
      r.subTono_piel === "Calido" &&
      ["Rubio Miel", "Rubio Dorado"].includes(r.color_cabello) &&
      (r.color_ojos === "Azul Brillante" || r.color_ojos === "Verde Claro"),
    result: spring,
  },
  // Light Spring - Eterea
  {
    name: "Primavera Clara (Light Spring) - Eterea",
    match: (r) =>
      ["Muy Clara", "Clara"].includes(r.tono_piel) &&
      ["Neutro", "Calido"].includes(r.subTono_piel) &&
      ["Verde Claro", "Verde Claro", "Azul Hielo", "Gris Clarp"].includes(
        r.color_ojos
      ),
    result: spring,
  },
  // Warm Spring
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
  // Warm Spring - Golden
  {
    name: "Primavera Calida (Warm Spring) - Dorada",
    macth: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      r.subTono_piel === "Calido" &&
      ["Rubio Dorado", "Rubio Miel", "Castaño Dorado", "Rojo Cobrizo"].includes(
        r.color_cabello
      ) &&
      ["Verde Claro", "Azul Turquesa", "Marron Dorado", "Marron Miel"].includes(
        r.color_ojos
      ),
    result: spring,
  },
  // Bright Spring
  {
    name: "Primavera Brillante (Bright Spring)",
    match: (r) =>
      (r.tono_piel === "Media" ||
        (r.tono_piel === "Clara" &&
          r.subTono_piel === "Calido" &&
          r.color_cabello === "Rubio Dorado") ||
        r.color_cabello === "Rubio Miel") &&
      ["Azul", "Verde", "Marron Claro"].includes(r.color_ojos),
    result: spring,
  },
  // Bright Spring - Constrast
  {
    name: "Primavera Brillante (Bright Spring) - Contrastada",
    macth: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      ["Neutro", "Calido"].includes(r.subTono_piel) &&
      ["Castaño Oscuro", "Negro", "Castaño Medio"].includes(r.color_cabello) &&
      [
        "Azul Brillante",
        "Verde Brillante",
        "Azul Turqueza",
        "Azul Verdoso",
      ].includes(r.color_ojos),
    result: spring,
  },
  // Default Spring
  {
    name: "Primavera (Spring)",
    match: (r) =>
      r.tono_piel === "Muy Clara" ||
      (r.tono_piel === "Clara" &&
        r.subTono_piel === "Calido" &&
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
  //* End Spring
  //* Start Summer
  // Light Summer
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
  // Light Summer but sub tone cool
  {
    name: "Verano Claro (Light Summer)",
    macth: (r) =>
      ["Muy Clara", "Clara"].includes(r.tono_piel) &&
      ["Neutro", "Frio"].includes(r.subTono_piel) &&
      ["Rubio Claro", "Rubio Cenizo"].includes(r.color_cabello) &&
      ["Azul Claro", "Azul Hielo", "Gris Claro", "Verde Claro"].includes(
        r.color_ojos
      ),
    result: summer,
  },
  // Soft Summer
  {
    name: "Verano Suave (Soft Summer)",
    match: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      ["Neutro", "Frio"].includes(r.subTono_piel) &&
      ["Rubio Cenizo", "Castaño Cenizo", "Castaño Claro"].includes(
        r.color_cabello
      ) &&
      [
        "Azul Grisaceo",
        "Gris Verde",
        " Azul Verdoso",
        "Marron Avellana",
      ].includes(r.color_ojos) &&
      r.destellos === "Plateados o Frios",
    result: summer,
  },
  // Soft Summer - Mistery
  {
    name: "Verano Suave (Soft Summer) - Misterioso",
    match: (r) =>
      ["CLara", "Media"].includes(r.tono_piel) &&
      ["Neutro", "Frio"].includes(r.subTono_piel) &&
      [
        "Castaño Claro",
        "Castaño Medio",
        "Rubio Oscuro",
        "Castaño Neutro",
      ].includes(r.color_cabello) &&
      ["Gris Verde", "Azul Grisaceo", "Marron Claro", "Verde Oliva"].includes(
        r.color_ojos
      ),
    result: summer,
  },
  // Cool Summer
  {
    name: "Verano Frio (Cool Summer)",
    match: (r) =>
      r.tono_piel === "Clara" &&
      r.subTono_piel === "Frio" &&
      ["Rubio Oscuro", "Castaño Medio"].includes(r.color_cabello) &&
      ["Azul Acero", "Azul hielo", "Verde Jade"].includes(r.color_ojos),
    result: summer,
  },
  // Cool Summer - pure
  //? Rubio Medio no esta en el form
  {
    name: "Verano Frio (Cool Summer) - Puro",
    macth: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      r.subTono_piel === "Frio" &&
      ["Castaño Cenizo", "Rubio Cenizo", "Rubio Medio"].includes(
        r.color_cabello
      ) &&
      ["Azul Acero", "Gris Azulado", "Azul Grisaceo", "Gris Plateado"].includes(
        r.color_ojos
      ),
    result: summer,
  },
  // Summer
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
  //* End Summer
  //* Start Autumn
  // Soft Autumn
  {
    name: "Otoño Suave (Soft Autumn)",
    macth: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      ["Neutro", "Calido"].includes(r.subTono_piel) &&
      [
        "Castaño Dorado",
        "Castaño Neutro",
        "Rubio Oscuro",
        "Castaño Claro",
      ].includes(r.color_cabello) &&
      [
        "Verde Oliva",
        "Marron Claro",
        "Azul Verdoso",
        "Marron Avellan",
      ].includes(r.color_ojos) &&
      r.destellos === "Dorados o Calidos",
    result: autumn,
  },
  // Light Autumn
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
  // Warm Autumn Intense
  {
    name: "Otoño Calido Intenso (Warm Autumn) - Intense",
    macth: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      r.subTono_piel === "Calido" &&
      ["Rojo Cobrizo", "Rojo Intenso", "Pelirojo"].includes(r.color_cabello) &&
      [
        "Verde Brillante",
        "Verde Oliva",
        "Marron Miel",
        "Marron Dorado",
        "Azul Turqueza",
      ].includes(r.color_ojos),
    result: autumn,
  },
  // Warm Autumn
  {
    name: "Otoño Calido (Warm Autumn)",
    match: (r) =>
      r.tono_piel === "Clara" ||
      (r.tono_piel === "Media" &&
        r.subTono_piel === "Calido" &&
        ["Rubio Miel", "Castaño Medio", "Pelirojo"].includes(r.color_cabello) &&
        [
          "Verde Brillante",
          "Marron Dorado",
          "Marron Avellana",
          "Azul Turqueza",
        ].includes(r.color_ojos)),
    result: autumn,
  },
  // Dark Autumn
  {
    name: "Otoño Oscuro (Dark Autumn)",
    match: (r) =>
      r.tono_piel === "Media" ||
      (r.tono_piel === "Oscura" &&
        r.subTono_piel === "Calido" &&
        r.color_cabello === "Marron") ||
      (r.color_cabello === "Castaño Oscuro" && r.subTono_piel === "Calido") ||
      (r.color_cabello === "Negro" &&
        r.destellos === "Dorados o Calidos" &&
        [
          "Marron Oscuro",
          "Verde Brillante",
          "Marron Avellana",
          "Azul Brillante",
        ].includes(r.color_ojos)),
    result: autumn,
  },
  // Dark Autumn Neutro
  {
    name: "Otoño Oscuro Neutro",
    macth: (r) =>
      ["Media", "Oscura"].includes(r.tono_piel) &&
      ["Calido", "Neutro"].includes(r.subTono_piel) &&
      ["Negro", "Marron Avellana", "Verde Oliva"].includes(r.color_ojos) &&
      r.destellos === "Dorados o Calidos",
    result: autumn,
  },
  // Autumn
  {
    name: "Otoño",
    match: (r) =>
      (["Clara", "Media", "Oscura"].includes(r.tono_piel) &&
        ["Calido", "Neutro"].includes(r.subTono_piel) &&
        ["Rubio Oscuro", "Castaño Rojizo", "Pelirojo"].includes(
          r.color_cabello
        )) ||
      (r.color_cabello === "Castaño Neutro" &&
        r.subTono_piel === "Calido" &&
        ["Verde Oliva", "Marron Avellana", "Azul Grisaceo"].includes(
          r.color_ojos
        )),
    result: autumn,
  },
  //* End Autumn
  //* Start Winter
  // Deep Winter
  {
    name: "Invierno Profundo (Deep Winter)",
    match: (r) =>
      (r.tono_piel === "Media" ||
        (r.tono_piel === "Oscuro" && r.subTono_piel === "Frio")) &&
      ["Negro", "Marron Oscuro", "Castaño Medio"].includes(r.color_cabello) &&
      ["Marron Oscuro", "Verde", "Azul Brillante"].includes(r.color_ojos),
    result: winter,
  },
  // True Winter
  {
    name: "Invierno Frio (True Winter)",
    match: (r) =>
      (r.tono_piel === "Clara" ||
        (r.tono_piel === "Media" && r.subTono_piel === "Frio")) &&
      ["Negro", "Castaño Oscuro"].includes(r.color_cabello) &&
      ["Azul Hielo", "Gris Plateado", "Marron", "Verde"].includes(r.color_ojos),
    result: winter,
  },
  // True Winter Pure
  {
    name: "Invierno Frio Puro (True/Cool Winter)",
    macth: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      r.subTono_piel === "Frio" &&
      ["Castaño Cenizo", "Negro Azulado"].includes(r.color_cabello) &&
      ["Azul Acero", "Gris Acero", "Marron Oscuro", "Gris Plateado"].includes(
        r.color_ojos
      ),
    result: winter,
  },
  // Bright Winter
  {
    name: "Invierno Brillante (Bright Winter)",
    match: (r) =>
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
  // Bright Winter High Constrast
  {
    name: "Invierno Brillante Contraste Alto (Bright Winter High Constrast)",
    macth: (r) =>
      r.tono_piel === "Clara" &&
      r.subTono_piel === "Frio" &&
      ["Negro Azulado", "Negro", "Castañ Oscuro"].includes(r.color_cabello) &&
      [
        "Azul Brillante",
        "Gris Acero",
        "Marron Oscuro",
        "Gris Plateado",
      ].includes(r.color_ojos),
    result: winter,
  },
  // Winter
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
  //* End Winter
];

export default RULES;
