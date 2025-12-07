//* Funciones para determiar la estacion

import { spring, summer, autumn, winter } from "../data/seasons.js";
import result from "./functionsUi.js";

const RULES = [
  //* SPRING - 3 subestaciones
  {
    name: "Light Spring",
    match: (r) =>
      ["Muy Clara", "Clara"].includes(r.tono_piel) &&
      ["Neutro", "Calido"].includes(r.subTono_piel) &&
      [
        "Rubio Miel",
        "Rubio Dorado",
        "Azul Hielo",
        "Verde Claro",
        "Azul Brillante",
      ].includes(r.color_ojos),
    result: spring,
  },
  {
    name: "Warm Spring",
    match: (r) =>
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
  {
    name: "Bright Spring",
    match: (r) =>
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

  //* SUMMER - 3 subestaciones
  {
    name: "Light Summer",
    match: (r) =>
      ["Muy Clara", "Clara"].includes(r.tono_piel) &&
      ["Neutro", "Frio"].includes(r.subTono_piel) &&
      ["Rubio Claro", "Rubio Cenizo"].includes(r.color_cabello) &&
      ["Azul Claro", "Azul Hielo", "Gris Claro", "Verde Claro"].includes(
        r.color_ojos
      ),
    result: summer,
  },
  {
    name: "Soft Summer",
    match: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      ["Neutro", "Frio"].includes(r.subTono_piel) &&
      [
        "Castaño Claro",
        "Castaño Medio",
        "Rubio Oscuro",
        "Castaño Neutro",
        "Castaño Cenizo",
      ].includes(r.color_cabello) &&
      ["Gris Verde", "Azul Grisaceo", "Marron Claro", "Verde Oliva"].includes(
        r.color_ojos
      ),
    result: summer,
  },
  {
    name: "Cool Summer",
    match: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      r.subTono_piel === "Frio" &&
      [
        "Castaño Cenizo",
        "Rubio Cenizo",
        "Rubio Oscuro",
        "Castaño Oscuro",
      ].includes(r.color_cabello) &&
      [
        "Azul Acero",
        "Gris Azulado",
        "Azul Grisaceo",
        "Gris Plateado",
        "Azul Hielo",
      ].includes(r.color_ojos),
    result: summer,
  },

  //* AUTUMN - 3 subestaciones
  {
    name: "Soft Autumn",
    match: (r) =>
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
        "Marron Avellana",
        "Marron Miel",
      ].includes(r.color_ojos) &&
      r.destellos === "Dorados o Calidos" &&
      r.accesorios === "Dorados o Calidos",
    result: autumn,
  },
  {
    name: "Warm Autumn",
    match: (r) =>
      (r.tono_piel === "Clara" ||
        (r.tono_piel === "Media" && r.subTono_piel === "Calido")) &&
      [
        "Rubio Miel",
        "Castaño Medio",
        "Pelirojo",
        "Rojo Cobrizo",
        "Rojo Intenso",
      ].includes(r.color_cabello) &&
      [
        "Verde Brillante",
        "Verde Oliva",
        "Marron Dorado",
        "Marron Avellana",
        "Marron Miel",
        "Azul Turquesa",
      ].includes(r.color_ojos),
    result: autumn,
  },
  {
    name: "Deep Autumn",
    match: (r) =>
      ["Media", "Oscura"].includes(r.tono_piel) &&
      ["Negro", "Castaño Oscuro", "Marron Oscuro"].includes(r.color_cabello) &&
      ["Marron Oscuro", "Marron Avellana", "Verde Oliva"].includes(
        r.color_ojos
      ) &&
      r.subTono_piel !== "Frio" &&
      (r.ropa === "Colores Calidos" ||
        r.accesorios === "Dorados o Calidos" ||
        r.destellos === "Dorados o Calidos"),
    result: autumn,
  },

  //* WINTER - 3 subestaciones
  {
    name: "Deep Winter",
    match: (r) =>
      ["Media", "Oscura"].includes(r.tono_piel) &&
      r.subTono_piel !== "Calido" &&
      ["Negro", "Castaño Oscuro", "Negro Azulado"].includes(r.color_cabello) &&
      ["Marron Oscuro", "Verde", "Azul Brillante", "Gris Acero"].includes(
        r.color_ojos
      ) &&
      (r.ropa === "Colores Frios" ||
        r.accesorios === "Plateados o Frios" ||
        r.accesorios === "Ambos"),
    result: winter,
  },
  {
    name: "Cool Winter",
    match: (r) =>
      ["Clara", "Media"].includes(r.tono_piel) &&
      r.subTono_piel === "Frio" &&
      ["Castaño Cenizo", "Negro Azulado", "Negro"].includes(r.color_cabello) &&
      ["Azul Acero", "Gris Acero", "Gris Plateado", "Azul Hielo"].includes(
        r.color_ojos
      ),
    result: winter,
  },
  {
    name: "Bright Winter",
    match: (r) =>
      (r.tono_piel === "Clara" ||
        (r.tono_piel === "Media" && r.subTono_piel === "Frio")) &&
      ["Negro", "Castaño Oscuro", "Negro Azulado"].includes(r.color_cabello) &&
      [
        "Azul Brillante",
        "Verde Claro",
        "Gris Claro",
        "Marron Oscuro",
        "Azul Hielo",
      ].includes(r.color_ojos),
    result: winter,
  },
];

export default RULES;
