/*
 * Here are the function for user interface
 *
 * fuction for show the result
 * fuction to display the station's color chart
 * function for close window
 * function for reset form
 */

export default function result(y) {
  // items1.innerText = skinTone();
  // items2.innerText = subTonoPiel();
  // items3.innerText = reactionOfTheSun();
  // items4.innerText = colorVeins();
  // items5.innerText = colorCabello();
  // items6.innerText = colorOjos();
  // items7.innerText = ropa();
  // items8.innerText = destellos();
  // items9.innerText = accesorios();

  // console.log(verano(), otrosDatos());

  // let estacion = primavera() || verano() || otoño() || invierno();
  let estacion = y;

  if (estacion) {
    visibleCard(estacion);
    textResult.innerText = `Con los datos ingresados tu estacion es ${estacion}`;
    titlePallet.classList.add("hidden");
  }
  // otrosDatos();
}

function visibleCard(x) {
  containerCards.classList.remove("grid");
  console.log(x);

  switch (x) {
    case "Primavera":
    case "Primavera Clara (Light Spring)":
    case "Primavera Calida (Warm Spring)":
    case "Primavera Brillante (Bright Spring)":
      primaveraCard.classList.remove("hidden");
      primaveraCard.classList.remove("border-gray-400");
      primaveraCard.classList.add("w-full");
      primaveraCard.classList.add("border-white");
      primaveraCard.classList.add("border");
      veranoCard.classList.add("hidden");
      otoñoCard.classList.add("hidden");
      inviernoCard.classList.add("hidden");
      break;
    case "Verano":
    case "Verano Claro (Light Summer)":
    case "Verano Suave (Soft Summer)":
    case "Verano Frio (Cool Summer)":
      primaveraCard.classList.add("hidden");
      veranoCard.classList.remove("hidden");
      veranoCard.classList.remove("border-gray-400");
      veranoCard.classList.add("w-full");
      veranoCard.classList.add("border-white");
      veranoCard.classList.add("border");
      otoñoCard.classList.add("hidden");
      inviernoCard.classList.add("hidden");
      break;
    case "Otoño":
    case "Otoño Claro (Light Autumn)":
    case "Otoño Calido (Wram Autumn)":
    case "Otoño Oscuro (Dark Autumn)":
      primaveraCard.classList.add("hidden");
      veranoCard.classList.add("hidden");
      otoñoCard.classList.remove("hidden");
      otoñoCard.classList.remove("border-gray-400");
      otoñoCard.classList.add("w-full");
      otoñoCard.classList.add("border-white");
      otoñoCard.classList.add("border");
      inviernoCard.classList.add("hidden");
      break;
    case "Invierno":
    case "Invierno Profundo (Deep Winter)":
    case "Invierno Frio (True Winter)":
    case "Invierno Brillante (Bright Winter)":
      primaveraCard.classList.add("hidden");
      veranoCard.classList.add("hidden");
      otoñoCard.classList.add("hidden");
      inviernoCard.classList.remove("hidden");
      inviernoCard.classList.remove("border-gray-400");
      inviernoCard.classList.add("w-full");
      inviernoCard.classList.add("border-white");
      inviernoCard.classList.add("border");
      break;
  }
}

exit.addEventListener("click", function () {
  closeWindow();
  document.body.classList.remove("overflow-hidden");
});

function closeWindow() {
  windowCard.classList.add("hidden");
  windowCard.classList.remove("flex");
  textResult.innerText = " ";
}

resetButton.addEventListener("click", function () {
  reset();
  closeWindow();
});

function reset() {
  muyClaraPiel.checked = false;
  claraPiel.checked = false;
  mediaPiel.checked = false;
  oscuraPiel.checked = false;
  calidoSubPiel.checked = false;
  frioSubPiel.checked = false;
  negroNatural.checked = false;
  quema.checked = false;
  broncea.checked = false;
  bronceaFacil.checked = false;
  quemaLigeramenteYBroncea.checked = false;
  azulOMorado.checked = false;
  verde.checked = false;
  neutro.checked = false;
  caoba.checked = false;
  castañoOscuro.checked = false;
  castañoMedio.checked = false;
  castañoClaro.checked = false;
  castañoDorado.checked = false;
  castañoRojizo.checked = false;
  castañoCenizo.checked = false;
  castañoNeutro.checked = false;
  rubioOscuro.checked = false;
  rubioClaro.checked = false;
  rubioMiel.checked = false;
  rubioCenizo.checked = false;
  rubioNeutro.checked = false;
  rubioDorado.checked = false;
  pelirojo.checked = false;
  platinoFrio.checked = false;
  rojoIntenso.checked = false;
  rojoCobrizo.checked = false;
  pelirojo.checked = false;
  negro.checked = false;
  negroAzulado.checked = false;
  negroNatural.checked = false;
  azul.checked = false;
  azulClaro.checked = false;
  azulBrillante.checked = false;
  azulGrisaceo.checked = false;
  azulAcero.checked = false;
  azulHielo.checked = false;
  azulVerdoso.checked = false;
  azulTurquesa.checked = false;
  verdeOjos.checked = false;
  verdeBrillante.checked = false;
  verdeClaro.checked = false;
  verdeOliva.checked = false;
  verdeJade.checked = false;
  marron.checked = false;
  marronClaro.checked = false;
  marronDorado.checked = false;
  marronMiel.checked = false;
  marronAvellana.checked = false;
  marronOscuro.checked = false;
  gris.checked = false;
  grisClaro.checked = false;
  grisVerde.checked = false;
  grisAcero.checked = false;
  grisAzulado.checked = false;
  grisPlateado.checked = false;
  doradoOCalido.checked = false;
  plateadoOFrio.checked = false;
  coloresCalidos.checked = false;
  coloresFrios.checked = false;
  coloresNeutros.checked = false;
  dorados.checked = false;
  plateados.checked = false;
  ambos.checked = false;

  //* claraPiel.checked = false;
  console.log("datos reseteados");
}
