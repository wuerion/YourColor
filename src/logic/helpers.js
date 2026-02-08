export function determineTheSubTone(answer) {
  let calido = 0;
  let frio = 0;

  if (answer.vein_color === "verde") {
    calido++;
  }
  if (answer.vein_color === "azulOMorado") {
    frio++;
  }

  if (["bronceaFacil", "broncea"].includes(answer.reaction_sun)) {
    calido++;
  }
  if (["quema", "quemaLigeramenteyBroncea"].includes(answer.reaction_sun)) {
    frio++;
  }

  if (answer.accesorios === "doradosOCalidos") {
    calido++;
  }
  if (answer.accesorios === "plateadosOFrios") {
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
