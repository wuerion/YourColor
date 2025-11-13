function skinTone() {
  if (muyClaraPiel.checked) return "Muy clara";
  if (claraPiel.checked) return "Clara";
  if (mediaPiel.checked) return "Media";
  if (oscuraPiel.checked) return "Oscura";
  return "";
}

function subTonoPiel() {
  if (calidoSubPiel.checked) return "Calido";
  if (frioSubPiel.checked) return "Frio";
  if (neutroSubPiel.checked) return "Neutro";
  return "";
}

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

function colorCabello() {
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

function colorOjos() {
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

function destellos() {
  if (doradoOCalido.checked) return "Dorados o Calidos";
  if (plateadoOFrio.checked) return "Plateados o Frios";
  return "";
}

function ropa() {
  if (coloresCalidos.checked) return "Colores Calidos";
  if (coloresFrios.checked) return "Colores Frios";
  if (coloresNeutros.checked) return "Colores Neutros";
  return "";
}

function accesorios() {
  if (dorados.checked) return "Dorados o Calidos";
  if (plateados.checked) return "Plateados o Frios";
  if (ambos.checked) return "Ambos";
  return "";
}
