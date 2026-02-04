export function determineTheSubTone(answer) {
  let calido = 0;
  let frio = 0;

  if (answer.vein_color === "Verde") {
    calido++;
  }
  if (answer.vein_color === "Azul o Morado") {
    frio++;
  }

  if (
    ["Se broncea facil", "Se broncea ligeramente"].includes(answer.reaction_sun)
  ) {
    calido++;
  }
  if (
    ["Se quema facil", "Se quema ligeramente y broncea"].includes(
      answer.reaction_sun,
    )
  ) {
    frio++;
  }

  if (answer.accesorios === "Dorados o Calidos") {
    calido++;
  }
  if (answer.accesorios === "Plateados o Frios") {
    frio++;
  }
  if (answer.accesorios === "Ambos") {
    calido++;
    frio++;
  }

  if (calido > frio) return "Calido";
  if (frio > calido) return "Frio";
  return "Neutro";
}