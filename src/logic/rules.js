//* Funciones para determiar la estacion

import { spring, summer, autumn, winter } from "../data/seasons.js";
import {
  springLight,
  springTrue,
  springBright,
  summerLight,
  summerTrue,
  summerSoft,
  autumnSoft,
  autumnTrue,
  autumnDeep,
  winterDeep,
  winterTrue,
  winterBright,
} from "../data/cautionColors.js";
const RULES = [
  // ==========================================
  // REGLAS MÁS ESPECÍFICAS PRIMERO
  // ==========================================

  // 1. Primavera Cálida (Warm Spring) - MÁS ESPECÍFICA
  // Todo es dorado, miel o cobrizo
  {
    name: "Primavera Calida (Warm Spring)",
    match: (r) =>
      ["clara", "morena"].includes(r.tono_piel) &&
      r.subTono_piel === "calido" &&
      // Cabellos cálidos específicos
      ["rubioDorado", "castañoMiel", "castañoCaramelo", "cobrizo"].includes(
        r.color_cabello,
      ) &&
      // Ojos cálidos PERO NO terr osos (marronAvellana es terroso)
      ["verdeOjos", "azulBrillante"].includes(r.color_ojos) &&
      // Preferencia calida ESPECÍFICA
      r.ropa === "coloresCalidos",
    textResult:
      "Tus peores enemigos son los colores fríos de base azulada (como el fucsia o el azul hielo) y los tonos grises apagados que drenan tu calidez dorada.",
    result: spring,
    cautionResult: springTrue,
  },

  // 2. Primavera Brillante (Bright Spring)
  // Contraste Alto: Pelo oscuro + Ojos brillantes
  {
    name: "Primavera Brillante (Bright Spring)",
    match: (r) =>
      ["clara", "morena"].includes(r.tono_piel) &&
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
    textResult:
      "Huye de los colores suaves, empolvados y 'tristes'. Tu coloración vibrante necesita intensidad; los tonos apagados te hacen ver cansada.",
    result: spring,
    cautionResult: springBright,
  },

  // 3. Primavera Clara (Light Spring)
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
      r.accesorios !== "plateados" &&
      r.ropa !== "coloresFrios",
    textResult:
      "Evita los colores oscuros y pesados que abruman tu delicada coloración, así como los tonos fríos y polvorientos que te hacen ver pálida.",
    result: spring,
    cautionResult: springLight,
  },

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
    textResult:
      "Aléjate de los colores oscuros y profundos que endurecen tus facciones, y de los tonos cálidos y anaranjados que chocan con tu subtono rosado.",
    result: summer,
    cautionResult: summerLight,
  },

  // 5. Verano Frio (Cool Summer)
  // El verano clásico "cenizo"
  {
    name: "Verano Frio (Cool Summer)",
    match: (r) =>
      ["clara", "morena"].includes(r.tono_piel) &&
      r.subTono_piel === "frio" &&
      // Tonos cenizos medios
      ["rubioCenizo", "cenizo", "cafeCenizo"].includes(r.color_cabello) &&
      ["azulClaro", "gris", "azulBrillante"].includes(r.color_ojos),
    textResult:
      "Tu paleta es puramente fría. Evita cualquier color con base amarilla o dorada (como naranjas, marrones tierra o dorados) ya que te darán un aspecto enfermizo.",
    result: summer,
    cautionResult: summerTrue,
  },

  // 6. Verano Suave (Soft Summer)
  // Neutro, bajo contraste, tonos "polvorientos"
  {
    name: "Verano Suave (Soft Summer)",
    match: (r) =>
      ["clara", "morena"].includes(r.tono_piel) &&
      ["neutro", "frio"].includes(r.subTono_piel) &&
      // Cabello "ratón" o neutro
      ["cenizo", "castañoClaro", "rubioOscuro"].includes(r.color_cabello) &&
      // Ojos suaves
      ["gris", "marronAvellana", "verdeOjos"].includes(r.color_ojos) &&
      // Desempate: Prefiere plata o fríos
      (r.ropa === "coloresFrios" || r.accesorios === "plateados"),
    textResult:
      "Evita los colores extremadamente brillantes, neones o muy oscuros. Tu belleza es suave y los contrastes fuertes te hacen 'desaparecer' detrás del color.",
    result: summer,
    cautionResult: summerSoft,
  },

  // 7. Otoño Oscuro (Dark Autumn) - ANTES DE OTOÑO CÁLIDO
  // Cabello oscuro pero cálido
  {
    name: "Otoño Oscuro (Dark Autumn)",
    match: (r) =>
      ["morena", "oscura"].includes(r.tono_piel) &&
      ["calido", "neutro"].includes(r.subTono_piel) &&
      ["castañoOscuro", "negroSuave", "caoba"].includes(r.color_cabello) &&
      ["marronOscuro", "marronAvellana", "verdeOjos"].includes(r.color_ojos) &&
      // Desempate contra Invierno - PREFERENCIA CALIDA
      (r.ropa === "coloresCalidos" || r.accesorios === "dorados"),
    textResult:
      "Aunque toleras la oscuridad, evita los colores claros, pasteles y 'helados' que no tienen la profundidad suficiente para equilibrar tu intensidad.",
    result: autumn,
    cautionResult: autumnDeep,
  },

  // 8. Otoño Calido (Warm Autumn)
  // Pelirojos y castaños rojizos intensos
  {
    name: "Otoño Calido (Warm Autumn)",
    match: (r) =>
      ["clara", "morena"].includes(r.tono_piel) &&
      r.subTono_piel === "calido" &&
      [
        "pelirojo",
        "caoba",
        "cobrizo",
        "cafeChocolate",
        "castañoCaramelo",
      ].includes(r.color_cabello) &&
      ["verdeOjos", "marronAvellana", "marronOscuro"].includes(r.color_ojos),
    textResult:
      "Los colores fríos de base azulada son tu antítesis. Evita los rosas fríos, los azules hielo y los grises azulados que apagan tu rico resplandor dorado.",
    result: autumn,
    cautionResult: autumnTrue,
  },

  // 9. Otoño Suave (Soft Autumn)
  // Neutro, bajo contraste, tonos tierra suave
  {
    name: "Otoño Suave (Soft Autumn)",
    match: (r) =>
      ["clara", "morena"].includes(r.tono_piel) &&
      ["neutro", "calido"].includes(r.subTono_piel) &&
      // Castaños suaves o miel
      ["castañoMiel", "castañoClaro", "rubioOscuro"].includes(
        r.color_cabello,
      ) &&
      ["marronAvellana", "verdeOjos", "marronOscuro"].includes(r.color_ojos) &&
      // Desempate: Prefiere oro o cálidos
      (r.ropa === "coloresCalidos" || r.accesorios === "dorados"),
    textResult:
      "Evita los colores fríos y brillantes que parecen 'duros' contra tu piel suave, así como el blanco puro y el negro total que resultan demasiado severos.",
    result: autumn,
    cautionResult: autumnSoft,
  },

  // 10. Invierno Profundo (Deep Winter)
  // Cabello negro/muy oscuro y piel neutra/fría
  {
    name: "Invierno Profundo (Deep Winter)",
    match: (r) =>
      ["morena", "oscura"].includes(r.tono_piel) &&
      ["frio", "neutro"].includes(r.subTono_piel) &&
      ["negro", "negroAzulado", "negroSuave", "castañoOscuro"].includes(
        r.color_cabello,
      ) &&
      ["marronOscuro", "negro", "marronAvellana"].includes(r.color_ojos) &&
      // Desempate contra Otoño - PREFERENCIA FRIA
      (r.ropa === "coloresFrios" || r.accesorios === "plateados"),
    textResult:
      "Evita los colores cálidos y terrosos que parecen 'sucios' junto a tu alto contraste, así como los pasteles suaves que no tienen la fuerza para definir tus rasgos.",
    result: winter,
    cautionResult: winterDeep,
  },

  // 11. Invierno Brillante (Bright Winter)
  // Tipo "Blancanieves": Piel clara, Pelo negro, Ojos claros
  {
    name: "Invierno Brillante (Bright Winter)",
    match: (r) =>
      ["clara", "morena"].includes(r.tono_piel) &&
      ["frio", "neutro"].includes(r.subTono_piel) &&
      ["negro", "negroAzulado", "castañoOscuro"].includes(r.color_cabello) &&
      ["azulBrillante", "verdeOjos", "azulClaro"].includes(r.color_ojos),
    textResult:
      "Eres intensidad pura. Tus peores colores son los apagados, polvorientos y grises medios que 'ensucian' tu claridad y te hacen ver fatigada.",
    result: winter,
    cautionResult: winterBright,
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
    textResult:
      "Tu paleta no tolera la calidez. Huye de los naranjas, dorados, marrones rojizos y cualquier tono con matiz amarillo que choque con tu frialdad natural.",
    result: winter,
    cautionResult: winterTrue,
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
    cautionResult: springLight,
    result: spring,
  },

  {
    name: "Verano (General)",
    match: (r) =>
      ["frio", "neutro"].includes(r.subTono_piel) &&
      r.ropa !== "coloresCalidos" &&
      r.accesorios !== "dorados" &&
      ["muyClara", "clara", "morena"].includes(r.tono_piel),
    cautionResult: summerLight,
    result: summer,
  },

  {
    name: "Otoño (General)",
    match: (r) =>
      ["calido", "neutro"].includes(r.subTono_piel) &&
      r.ropa !== "coloresFrios" &&
      r.accesorios !== "plateados",
    cautionResult: autumnSoft,
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
    cautionResult: winterBright,
    result: winter,
  },
  // Catch-all
  {
    name: "Resultado por defecto Primavera",
    match: (r) => true,
    textResult:
      "No encontramos una coincidencia clara. Te recomdendamos realizar el test nuevamente.",
    cautionResult: springLight,
    result: spring,
  },
];

export default RULES;
