//* Funciones para determiar la estacion

import { spring, summer, autumn, winter } from "../data/seasons.js";
import result from "./functionsUi.js";
const RULES = [
  // ==========================================
  // PRIMAVERA (SPRING) - CALIDA Y CLARA
  // ==========================================

  // 1. Primavera Brillante (Bright Spring)
  // Contraste Alto: Pelo oscuro + Ojos brillantes
  {
    name: "Primavera Brillante (Bright Spring)",
    match: (r) =>
      ["clara", "media"].includes(r.tono_piel) &&
      ["neutro", "calido"].includes(r.subTono_piel) &&
      // Cabello oscuro o vibrante
      [
        "negroSuave",
        "castañoOscuro",
        "castañoMedio",
        "castañoCaramelo",
      ].includes(r.color_cabello) &&
      // Ojos brillantes
      ["azulBrillante", "verdeOjos", "azulClaro"].includes(r.color_ojos) &&
      // Desempate: La ropa fría NO le favorece
      r.ropa !== "coloresFrios",
    result: spring,
  },

  // 2. Primavera Clara (Light Spring)
  // Contraste Bajo: Todo es claro y luminoso
  {
    name: "Primavera Clara (Light Spring)",
    match: (r) =>
      ["muyClara", "clara"].includes(r.tono_piel) &&
      ["neutro", "calido"].includes(r.subTono_piel) &&
      // Rubios claros
      ["rubio", "rubioDorado", "rubioOscuro", "castañoClaro"].includes(
        r.color_cabello,
      ) &&
      // Ojos Claros
      ["azulClaro", "verdeOjos", "gris"].includes(r.color_ojos) &&
      r.accesorios !== "plateados",
    result: spring,
  },

  // 3. Primavera Calida (Warm Spring)
  // Todo es dorado, miel o cobrizo
  {
    name: "Primavera Calida (Warm Spring)",
    match: (r) =>
      ["clara", "media"].includes(r.tono_piel) &&
      r.subTono_piel === "Calido" &&
      // Cabellos cálidos
      ["rubioDorado", "castañoMiel", "castañoCaramelo", "cobrizo"].includes(
        r.color_cabello,
      ) &&
      // Ojos cálidos
      ["verdeOjos", "marronAvellana", "azulBrillante"].includes(r.color_ojos) &&
      r.ropa === "coloresCalidos",
    result: spring,
  },

  // ==========================================
  // VERANO (SUMMER) - FRIO Y SUAVE
  // ==========================================

  // 4. Verano Claro (Light Summer)
  // Piel clara, pelo claro, subtono frío
  {
    name: "Verano Claro (Light Summer)",
    match: (r) =>
      ["muyClara", "clara"].includes(r.tono_piel) &&
      ["neutro", "frio"].includes(r.subTono_piel) &&
      // Rubios fríos
      ["rubio", "rubioCenizo", "grisOBlanco", "plata", "perla"].includes(
        r.color_cabello,
      ) &&
      // Ojos Claros
      ["azulClaro", "gris", "verdeOjos"].includes(r.color_ojos) &&
      r.accesorios === "plateados",
    result: summer,
  },

  // 5. Verano Frio (Cool Summer)
  // El verano clásico "cenizo"
  {
    name: "Verano Frio (Cool Summer)",
    match: (r) =>
      ["clara", "media"].includes(r.tono_piel) &&
      r.subTono_piel === "frio" &&
      // Tonos cenizos medios
      ["rubioCenizo", "cenizo", "cafeCenizo"].includes(r.color_cabello) &&
      ["azulClaro", "gris", "azulBrillante"].includes(r.color_ojos),
    result: summer,
  },

  // 6. Verano Suave (Soft Summer)
  // Neutro, bajo contraste, tonos "polvorientos"
  {
    name: "Verano Suave (Soft Summer)",
    match: (r) =>
      ["clara", "media"].includes(r.tono_piel) &&
      ["neutro", "frio"].includes(r.subTono_piel) &&
      // Cabello "ratón" o neutro
      ["cenizo", "castañoClaro", "rubioOscuro"].includes(r.color_cabello) &&
      // Ojos suaves
      ["gris", "marronAvellana", "verdeOjos"].includes(r.color_ojos) &&
      // Desempate: Prefiere plata o fríos
      (r.ropa === "coloresFrios" || r.accesorios === "plateados"),
    result: summer,
  },

  // ==========================================
  // OTOÑO (AUTUMN) - CALIDO Y PROFUNDO
  // ==========================================

  // 7. Otoño Suave (Soft Autumn)
  // Neutro, bajo contraste, tonos tierra suave
  {
    name: "Otoño Suave (Soft Autumn)",
    match: (r) =>
      ["clara", "media"].includes(r.tono_piel) &&
      ["neutro", "calido"].includes(r.subTono_piel) &&
      // Castaños suaves o miel
      ["castañoMiel", "castañoClaro", "rubioOscuro"].includes(
        r.color_cabello,
      ) &&
      ["marronAvellana", "verdeOjos", "marronOscuro"].includes(r.color_ojos) &&
      // Desempate: Prefiere oro o cálidos
      (r.ropa === "coloresCalidos" || r.accesorios === "dorados"),
    result: autumn,
  },

  // 8. Otoño Calido (Warm Autumn)
  // Pelirojos y castaños rojizos intensos
  {
    name: "Otoño Calido (Warm Autumn)",
    match: (r) =>
      ["clara", "media"].includes(r.tono_piel) &&
      r.subTono_piel === "Calido" &&
      [
        "pelirojo",
        "caoba",
        "cobrizo",
        "cafeChocolate",
        "castañoCaramelo",
      ].includes(r.color_cabello) &&
      ["verdeOjos", "marronAvellana", "marronOscuro"].includes(r.color_ojos),
    result: autumn,
  },

  // 9. Otoño Oscuro (Dark Autumn)
  // Cabello oscuro pero cálido
  {
    name: "Otoño Oscuro (Dark Autumn)",
    match: (r) =>
      ["media", "oscura"].includes(r.tono_piel) &&
      ["calido", "neutro"].includes(r.subTono_piel) &&
      ["castañoOscuro", "negroSuave", "caoba"].includes(r.color_cabello) &&
      ["marronOscuro", "marronAvellana", "verdeOjos"].includes(r.color_ojos) &&
      // Desempate contra Invierno
      (r.ropa === "coloresCalidos" || r.accesorios === "dorados"),
    result: autumn,
  },

  // ==========================================
  // INVIERNO (WINTER) - FRIO Y PROFUNDO
  // ==========================================

  // 10. Invierno Profundo (Deep Winter)
  // Cabello negro/muy oscuro y piel neutra/fría
  {
    name: "Invierno Profundo (Deep Winter)",
    match: (r) =>
      ["media", "oscura"].includes(r.tono_piel) &&
      ["frio", "neutro"].includes(r.subTono_piel) &&
      ["negro", "negroAzulado", "negroSuave", "castañoOscuro"].includes(
        r.color_cabello,
      ) &&
      ["marronOscuro", "negro", "marronAvellana"].includes(r.color_ojos) &&
      // Desempate contra Otoño
      (r.ropa === "coloresFrios" || r.accesorios === "plateados"),
    result: winter,
  },

  // 11. Invierno Brillante (Bright Winter)
  // Tipo "Blancanieves": Piel clara, Pelo negro, Ojos claros
  {
    name: "Invierno Brillante (Bright Winter)",
    match: (r) =>
      ["clara", "media"].includes(r.tono_piel) &&
      ["frio", "neutro"].includes(r.subTono_piel) &&
      ["negro", "negroAzulado", "castañoOscuro"].includes(r.color_cabello) &&
      ["azulBrillante", "verdeOjos", "azulClaro"].includes(r.color_ojos),
    result: winter,
  },

  // 12. Invierno Frio (True Winter)
  // Canas plateadas, negro azulado, cero calidez
  {
    name: "Invierno Frio (True Winter)",
    match: (r) =>
      r.subTono_piel === "frio" &&
      [
        "negroAzulado",
        "negro",
        "castañoCenizo",
        "plata",
        "grisOBlanco",
      ].includes(r.color_cabello) &&
      ["azulClaro", "gris", "marronOscuro", "azulBrillante"].includes(
        r.color_ojos,
      ),
    result: winter,
  },

  // ==========================================
  // REGLAS GENERALES (CATCH-ALL)
  // Si ninguna específica coincide, usamos estas con exclusión
  // ==========================================

  {
    name: "Primavera (General)",
    match: (r) =>
      ["calido", "neutro"].includes(r.subTono_piel) &&
      r.ropa !== "coloresFrios" &&
      r.accesorios !== "plateados" &&
      !["negro", "negroAzulado", "grisOBlanco"].includes(r.color_cabello),
    result: spring,
  },

  {
    name: "Verano (General)",
    match: (r) =>
      ["frio", "neutro"].includes(r.subTono_piel) &&
      r.ropa !== "coloresCalidos" &&
      r.accesorios !== "dorados" &&
      ["muyClara", "clara", "media"].includes(r.tono_piel),
    result: summer,
  },

  {
    name: "Otoño (General)",
    match: (r) =>
      ["calido", "neutro"].includes(r.subTono_piel) &&
      r.ropa !== "coloresFrios" &&
      r.accesorios !== "plateados",
    result: autumn,
  },

  {
    name: "Invierno (General)",
    match: (r) =>
      ["frio", "neutro"].includes(r.subTono_piel) &&
      r.ropa !== "coloresCalidos" &&
      r.accesorios !== "dorados" &&
      ["negro", "negroAzulado", "castañoOscuro", "grisOBlanco"].includes(
        r.color_cabello,
      ),
    result: winter,
  },
];
export default RULES;
