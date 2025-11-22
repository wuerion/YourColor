import { findDOMNode } from "react-dom";
import calculateResult from "./colorimetryEngie.js";
import result from "./functionsUi.js";
import { swapFunctions } from "astro:transitions/client";

function skinTone() {
  if (muyClaraPiel.checked) return "Muy clara";
  if (claraPiel.checked) return "Clara";
  if (mediaPiel.checked) return "Media";
  if (oscuraPiel.checked) return "Oscura";
  return "";
}

// function subToneSkin() {
//   if (calidoSubPiel.checked) return "Calido";
//   if (frioSubPiel.checked) return "Frio";
//   if (neutroSubPiel.checked) return "Neutro";
//   return "";
// }

function reactionOfTheSun() {
  if (quema.checked) return "Se quema facil";
  if (broncea.checked) return "Se broncea ligeramente";
  if (bronceaFacil.checked) return "Se broncea facil";
  if (quemaLigeramenteYBroncea.checked) return "Se quema ligeramente y broncea";
  return "";
}

function colorVeins() {
  if (azulOMorado.checked) return "Azul o Morado";
  if (verde.checked) return "Verde";
  if (neutro.checked) return "Neutro";
  return "";
}

function hairColor() {
  if (caoba.checked) return "Caoba";
  if (negro.checked) return "Negro";
  if (castañoOscuro.checked) return "Castaño Oscuro";
  if (castañoMedio.checked) return "Castaño Medio";
  if (castañoClaro.checked) return "Castaño Claro";
  if (castañoDorado.checked) return "Castaño Dorado";
  if (castañoRojizo.checked) return "Castaño Rojizo";
  if (castañoCenizo.checked) return "Castaño Cenizo";
  if (castañoNeutro.checked) return "Castaño Neutro";
  if (rubioOscuro.checked) return "Rubio Oscuro";
  if (rubioClaro.checked) return "Rubio Claro";
  if (rubioCenizo.checked) return "Rubio Cenizo";
  if (rubioMiel.checked) return "Rubio Miel";
  if (rubioNeutro.checked) return "Rubio Neutro";
  if (rubioDorado.checked) return "Rubio Dorado";
  if (rojoIntenso.checked) return "Rojo Intenso";
  if (rojoCobrizo.checked) return "Rojo Cobrizo";
  if (pelirojo.checked) return "Pelirojo";
  if (negro.checked) return "Negro";
  if (negroAzulado.checked) return "Negro Azulado";
  if (negroNatural.checked) return "Negro Natural";
  return "";
}

function eyeColor() {
  if (azul.checked) return "Azul";
  if (azulClaro.checked) return "Azul Claro";
  if (azulBrillante.checked) return "Azul Brillante";
  if (azulGrisaceo.checked) return "Azul Grisaceo";
  if (azulAcero.checked) return "Azul Acero";
  if (azulHielo.checked) return "Azul Hielo";
  if (azulVerdoso.checked) return "Azul Verdoso";
  if (azulTurquesa.checked) return "Azul Turquesa";
  if (verdeOjos.checked) return "Verde";
  if (verdeBrillante.checked) return "Verde Brillante";
  if (verdeClaro.checked) return "Verde Claro";
  if (verdeOliva.checked) return "Verde Oliva";
  if (verdeJade.checked) return "Verde Jade";
  if (marron.checked) return "Marron";
  if (marronClaro.checked) return "Marron Claro";
  if (marronDorado.checked) return "Marron Dorado";
  if (marronMiel.checked) return "Marron Miel";
  if (marronAvellana.checked) return "Marron Avellana";
  if (marronOscuro.checked) return "Marron Oscuro";
  if (gris.checked) return "Gris";
  if (grisClaro.checked) return "Gris Claro";
  if (grisVerde.checked) return "Gris Verde";
  if (grisAcero.checked) return "Gris Acero";
  if (grisAzulado.checked) return "Gris Azulado";
  if (grisPlateado.checked) return "Gris Plateado";
  return "";
}

function sparkles() {
  if (doradoOCalido.checked) return "Dorados o Calidos";
  if (plateadoOFrio.checked) return "Plateados o Frios";
  return "";
}

function clothes() {
  if (coloresCalidos.checked) return "Colores Calidos";
  if (coloresFrios.checked) return "Colores Frios";
  if (coloresNeutros.checked) return "Colores Neutros";
  return "";
}

function accessories() {
  if (dorados.checked) return "Dorados o Calidos";
  if (plateados.checked) return "Plateados o Frios";
  if (ambos.checked) return "Ambos";
  return "";
}

startTest.addEventListener("click", (e) => {
  e.preventDefault();

  function determineTheSubTone(dataForm) {
    let subTono;

    let calido = 0;
    let frio = 0;

    if (colorVeins() === "Verde") {
      calido++;
    }
    if (colorVeins() === "Azul o Morado") {
      frio++;
    }

    if (
      ["Se broncea facil", "Se broncea ligeramente"].includes(
        reactionOfTheSun()
      )
    ) {
      calido++;
    }
    if (
      ["Se quema facil", "Se quema ligeramente y broncea"].includes(
        reactionOfTheSun
      )
    ) {
      frio++;
    }

    if (accessories() === "Dorados o Calidos") {
      calido++;
    }
    if (accessories() === "Plateados o Frios") {
      frio++;
    }
    if (accessories() === "Ambos") {
      calido++;
      frio++;
    }

    if (calido > frio) {
      subTono = "Calido";
    } else if (frio > calido) {
      subTono = "Frio";
    } else {
      subTono = "Neutro";
    }
    return subTono;
  }

  const answer = {
    tono_piel: skinTone(),
    subTono_piel: determineTheSubTone(),
    reaction_sun: reactionOfTheSun(),
    vein_color: colorVeins(),
    color_cabello: hairColor(),
    color_ojos: eyeColor(),
    destellos: sparkles(),
    ropa: clothes(),
    accesorios: accessories(),
  };
  console.log(determineTheSubTone());
  const endResult = calculateResult(answer);
  result(endResult);
  windowCard.classList.add("flex");
  windowCard.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  console.log("tu temporada es: ", endResult);
});
