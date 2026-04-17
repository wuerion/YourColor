/**
 * Valida si el usuario hizo selecciones genuinas en el test
 * @param {Object} answers - Respuestas del usuario
 * @returns {Object} { isValid: boolean, message: string }
 */
export const validateTestAnswers = (answers) => {
  // Mapeo de pasos a sus claves
  const expectedKeys = [
    "tono_piel",
    "reaction_sun",
    "vein_color",
    "color_cabello",
    "tono_pelo",
    "color_ojos",
    "ropa",
    "accessories",
    "gander",
  ];

  // Verificar que todas las claves existan
  for (const key of expectedKeys) {
    if (
      !answers.hasOwnProperty(key) ||
      answers[key] === undefined ||
      answers[key] === null ||
      answers[key] === ""
    ) {
      return {
        isValid: false,
        message: `Por favor completa todas las preguntas del test.`,
      };
    }
  }

  // Detectar si seleccionó siempre la primera opción (patrón sospechoso)
  const values = Object.values(answers).filter(
    (v) => v !== null && v !== undefined && v !== "",
  );

  // Si todos los valores son del índice 0 o 1 (primeras opciones)
  const suspiciousPattern = values.every(
    (v) => v === 0 || v === 1 || v === "opcion1" || v === "opcion2",
  );

  if (suspiciousPattern && values.length === expectedKeys.length) {
    return {
      isValid: false,
      message:
        "Detectamos que seleccionaste de forma automática siempre la primera opción. Por favor, responde considerando tus características reales.",
    };
  }

  // Verificar que haya variedad en las respuestas
  const uniqueValues = new Set(values);
  if (uniqueValues.size === 1) {
    return {
      isValid: false,
      message:
        "Las respuestas parecen demasiado uniformes. Por favor, sé honesto con el test.",
    };
  }

  return { isValid: true, message: "" };
};
