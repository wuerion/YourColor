export function determineTheSubTone(answer) {
  let calido = 0;
  let frio = 0;
  let neutro = 0;

  // Venas - Verde es CÁLIDO, Azul/Morado es FRÍO
  if (answer.vein_color === "verde") {
    calido++;
  }
  if (answer.vein_color === "azulOMorado") {
    frio++;
  }
  if (answer.vein_color === "neutro") {
    neutro++;
  }

  // Reacción al sol - ajustado según patrones en tests
  if (["bronceaFacilmente", "seBroncea"].includes(answer.reaction_sun)) {
    calido++;
  }
  if (["bronceaLigeramente"].includes(answer.reaction_sun)) {
    frio++; // Broncea ligeramente = piel sensible (fría/clara)
  }
  if (["seQuema"].includes(answer.reaction_sun)) {
    frio++; // Se quema = piel sensible clara
  }
  if (["seQuemaYBroncea"].includes(answer.reaction_sun)) {
    frio++;
  }

  // Accesorios (del test)
  if (
    answer.accesorios === "dorados" ||
    answer.accesorios === "doradosOCalidos"
  ) {
    calido++;
  }
  if (
    answer.accesorios === "plateados" ||
    answer.accesorios === "plateadosOFrios"
  ) {
    frio++;
  }
  if (answer.accesorios === "ambos") {
    calido++;
    frio++;
  }

  if (calido > frio) return "calido";
  if (frio > calido) return "frio";

  return "neutro";
}
