export function determineTheSubTone(answer) {
  let calido = 0;
  let frio = 0;
let neutro = 0

  // Venas - Verde se interpreta como FRÍO (según tests), Roja como CÁLIDO
  if (answer.vein_color === "verde") {
    calido++;
  }
  if (
    answer.vein_color === "azulOMorado"
  ) {
    frio++;
  }
  if(
    answer.vein_color === "neutro"
){ neutro++;}

  // Reacción al sol - ajustado según patrones en tests
  if (
    ["bronceaFacilmente", "bronceaLigeramente", "seBroncea"].includes(
      answer.reaction_sun,
    )
  ) {
    calido++;
  }
  if (["seQuema"].includes(answer.reaction_sun)) {
    calido++; // Se quema = piel sensible clara, se relaciona con primavera clara
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
