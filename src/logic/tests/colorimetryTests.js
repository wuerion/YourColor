/**
 * Tests para validar el engine de colorimetría
 * Cada test contiene:
 * - id: Identificador único
 * - name: Descripción del test
 * - input: Datos de entrada del usuario
 * - expectedResult: Estación esperada
 * - description: Detalles del caso
 */

import { calculateResult } from "../colorimetryEngie.js";

export const COLORIMETRY_TESTS = [
  {
    id: 1,
    name: "Test 1: Invierno Profundo",
    input: {
      tono_piel: "morena",
      reaction_sun: "bronceaLigeramente",
      vein_color: "verde",
      color_cabello: "negro",
      tono_cabello: "negroSuave",
      color_ojos: "marronOscuro",
      ropa: "coloresFrios",
      accesorios: "plateados",
      subTono_piel: "frio", // Se calcula automáticamente
    },
    expectedResult: "Invierno Profundo (Deep Winter)",
    description:
      "Piel morena, venas verdes (cálido), cabello negro, ojos marrones oscuros, prefiere fríos y plateados",
  },

  {
    id: 2,
    name: "Test 2: Otoño Oscuro",
    input: {
      tono_piel: "morena",
      reaction_sun: "bronceaFacilmente",
      vein_color: "roja",
      color_cabello: "caoba",
      tono_cabello: "caoba",
      color_ojos: "marronAvellana",
      ropa: "coloresCalidos",
      accesorios: "dorados",
      subTono_piel: "calido",
    },
    expectedResult: "Otoño Oscuro (Dark Autumn)",
    description:
      "Piel morena, venas rojas (cálido), cabello caoba, ojos marrones avellana, prefiere cálidos y dorados",
  },

  {
    id: 3,
    name: "Test 3: Primavera Brillante",
    input: {
      tono_piel: "clara",
      reaction_sun: "seBroncea",
      vein_color: "azulOMorado",
      color_cabello: "castañoOscuro",
      tono_cabello: "castañoOscuro",
      color_ojos: "azulBrillante",
      ropa: "coloresCalidos",
      accesorios: "dorados",
      subTono_piel: "calido",
    },
    expectedResult: "Primavera Brillante (Bright Spring)",
    description:
      "Piel clara, cabello castaño oscuro, ojos azul brillante, prefiere cálidos",
  },

  {
    id: 4,
    name: "Test 4: Verano Claro",
    input: {
      tono_piel: "clara",
      reaction_sun: "seQuema",
      vein_color: "azulOMorado",
      color_cabello: "rubioCenizo",
      tono_cabello: "rubioCenizo",
      color_ojos: "azulClaro",
      ropa: "coloresFrios",
      accesorios: "plateados",
      subTono_piel: "frio",
    },
    expectedResult: "Verano Claro (Light Summer)",
    description:
      "Piel muy clara, cabello rubio cenizo, ojos azul claro, prefiere fríos y plateados",
  },

  {
    id: 5,
    name: "Test 5: Primavera Cálida",
    input: {
      tono_piel: "clara",
      reaction_sun: "seBroncea",
      vein_color: "roja",
      color_cabello: "rubioDorado",
      tono_cabello: "rubioDorado",
      color_ojos: "verdeOjos",
      ropa: "coloresCalidos",
      accesorios: "dorados",
      subTono_piel: "calido",
    },
    expectedResult: "Primavera Calida (Warm Spring)",
    description:
      "Piel clara cálida, cabello rubio dorado, ojos verdes, todo cálido y dorado",
  },

  {
    id: 6,
    name: "Test 6: Invierno Brillante",
    input: {
      tono_piel: "clara",
      reaction_sun: "seQuema",
      vein_color: "azul",
      color_cabello: "negro",
      tono_cabello: "negro",
      color_ojos: "azulBrillante",
      ropa: "coloresFrios",
      accesorios: "plateados",
      subTono_piel: "frio",
    },
    expectedResult: "Invierno Brillante (Bright Winter)",
    description:
      "Piel clara contrastada con cabello negro, ojos claros brillantes (Blancanieves)",
  },

  {
    id: 7,
    name: "Test 7: Verano Suave",
    input: {
      tono_piel: "clara",
      reaction_sun: "seBroncea",
      vein_color: "azulOMorado",
      color_cabello: "castañoClaro",
      tono_cabello: "castañoClaro",
      color_ojos: "gris",
      ropa: "coloresFrios",
      accesorios: "plateados",
      subTono_piel: "frio",
    },
    expectedResult: "Verano Suave (Soft Summer)",
    description:
      "Tono neutro bajo, cabello ratón, ojos grises, prefiere fríos suaves",
  },

  {
    id: 8,
    name: "Test 8: Otoño Cálido",
    input: {
      tono_piel: "clara",
      reaction_sun: "seBroncea",
      vein_color: "roja",
      color_cabello: "pelirojo",
      tono_cabello: "pelirojo",
      color_ojos: "verdeOjos",
      ropa: "coloresCalidos",
      accesorios: "dorados",
      subTono_piel: "calido",
    },
    expectedResult: "Otoño Calido (Warm Autumn)",
    description: "Cabello pelirojo intenso, ojos verdes, todo cálido y dorado",
  },

  {
    id: 9,
    name: "Test 9: Primavera Clara",
    input: {
      tono_piel: "muyClara",
      reaction_sun: "seQuema",
      vein_color: "azulOMorado",
      color_cabello: "rubio",
      tono_cabello: "rubio",
      color_ojos: "verdeOjos",
      ropa: "coloresCalidos",
      accesorios: "dorados",
      subTono_piel: "frio",
    },
    expectedResult: "Primavera Clara (Light Spring)",
    description:
      "Piel muy clara, rubios claros, ojos verdes, contraste bajo y luminoso",
  },

  {
    id: 10,
    name: "Test 10: Invierno Frío",
    input: {
      tono_piel: "oscura",
      reaction_sun: "seBroncea",
      vein_color: "azulOMorado",
      color_cabello: "negroAzulado",
      tono_cabello: "negroAzulado",
      color_ojos: "azulClaro",
      ropa: "coloresFrios",
      accesorios: "plateados",
      subTono_piel: "frio",
    },
    expectedResult: "Invierno Frio (True Winter)",
    description: "Tipo True Winter con cero calidez, cabello azulado",
  },

  {
    id: 11,
    name: "Test 11: Otoño Suave",
    input: {
      tono_piel: "morena",
      reaction_sun: "seBroncea",
      vein_color: "verde",
      color_cabello: "castañoMiel",
      tono_cabello: "castañoMiel",
      color_ojos: "marronAvellana",
      ropa: "coloresCalidos",
      accesorios: "dorados",
      subTono_piel: "calido",
    },
    expectedResult: "Otoño Suave (Soft Autumn)",
    description:
      "Tonos suaves terrosos, cabello miel, ojos avellana, neutro pero cálido",
  },

  {
    id: 12,
    name: "Test 12: Verano Frío",
    input: {
      tono_piel: "morena",
      reaction_sun: "seBroncea",
      vein_color: "azulOMorado",
      color_cabello: "rubioCenizo",
      tono_cabello: "rubioCenizo",
      color_ojos: "azulBrillante",
      ropa: "coloresFrios",
      accesorios: "plateados",
      subTono_piel: "frio",
    },
    expectedResult: "Verano Frio (Cool Summer)",
    description: "El verano clásico cenizo, bajo contraste, completamente frío",
  },
];

/**
 * Función para ejecutar todos los tests
 * @returns {Array} Array con resultados de los tests
 */
export function runAllTests() {
  const results = COLORIMETRY_TESTS.map((test) => {
    const result = calculateResult(test.input);
    const passed = result?.name === test.expectedResult;

    return {
      testId: test.id,
      testName: test.name,
      description: test.description,
      expectedResult: test.expectedResult,
      actualResult: result?.name || "null",
      passed,
      details: {
        palette: result?.palette ? "✓ Palette encontrada" : "✗ Sin palette",
        cautionPalette: result?.paletteCaution
          ? "✓ Caution encontrada"
          : "✗ Sin caution",
      },
    };
  });

  return results;
}

/**
 * Función para ejecutar un test específico
 * @param {number} testId - ID del test a ejecutar
 * @returns {Object} Resultado del test
 */
export function runSingleTest(testId) {
  const test = COLORIMETRY_TESTS.find((t) => t.id === testId);

  if (!test) {
    return {
      error: `Test ${testId} no encontrado`,
    };
  }

  const result = calculateResult(test.input);
  const passed = result?.name === test.expectedResult;

  return {
    testId: test.id,
    testName: test.name,
    description: test.description,
    input: test.input,
    expectedResult: test.expectedResult,
    actualResult: result?.name || "null",
    passed,
    message: passed ? "✅ Test pasó" : "❌ Test falló",
    resultDetails: result,
  };
}

/**
 * Función para obtener reporte de tests
 * @returns {Object} Reporte con números y porcentaje
 */
export function getTestReport() {
  const results = runAllTests();
  const passed = results.filter((r) => r.passed).length;
  const total = results.length;
  const percentage = ((passed / total) * 100).toFixed(2);

  return {
    totalTests: total,
    passedTests: passed,
    failedTests: total - passed,
    successPercentage: `${percentage}%`,
    results,
  };
}
