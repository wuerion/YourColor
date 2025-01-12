// sections functions 
function tonoDePiel() {
    if (muyClaraPiel.checked) return 'Muy clara';
    if (claraPiel.checked) return 'Clara';
    if (mediaPiel.checked) return 'Media';
    if (oscuraPiel.checked) return 'Oscura'
    return '';
}

function subTonoPiel() {
    if(calidoSubPiel.checked) return 'Calido';
    if(frioSubPiel.checked) return 'Frio';
    if(neutroSubPiel.checked) return 'Neutro';
    return '';
}

function reactionOfTheSun() {
    if(quema.checked) return 'Se quema facil';
    if(broncea.checked) return 'Se broncea ligeramente';
    if(bronceaFacil.checked) return 'Se broncea facil';
    if(quemaLigeramenteYBroncea.checked) return 'Se quema ligeramente y broncea';
    return '';
}

function colorVeins() {
    if(azulOMorado.checked) return 'Azul o Morado';
    if(verde.checked) return 'Verde';
    if(neutro.checked) return 'Neutro';
    return '';
}

function colorCabello() {
    if(caoba.checked) return 'Caoba';
    if(negro.checked) return 'Negro';
    if(castañoOscuro.checked) return 'Castaño Oscuro';
    if(castañoMedio.checked) return 'Castaño Medio';
    if(castañoClaro.checked) return 'Castaño Claro'
    if(castañoDorado.checked) return 'Castaño Dorado';
    if(castañoRojizo.checked) return 'Castaño Rojizo';
    if(castañoCenizo.checked) return 'Castaño Cenizo';
    if(castañoNeutro.checked) return 'Castaño Neutro';
    if(rubioOscuro.checked) return 'Rubio Oscuro';
    if(rubioClaro.checked) return 'Rubio Claro';
    if(rubioCenizo.checked) return 'Rubio Cenizo';
    if(rubioMiel.checked) return 'Rubio Miel';
    if(rubioNeutro.checked) return 'Rubio Neutro';
    if(rubioDorado.checked) return 'Rubio Dorado';
    if(rojoIntenso.checked) return 'Rojo Intenso';
    if(rojoCobrizo.checked) return 'Rojo Cobrizo';
    if(pelirojo.checked) return 'Pelirojo';
    if(negro.checked) return 'Negro';
    if(negroAzulado.checked) return 'Negro Azulado';
    if(negroNatural.checked) return 'Negro Natural';
    return '';
}

function colorOjos() {
    if(azul.checked) return 'Azul';
    if(azulClaro.checked) return 'Azul Claro';
    if(azulBrillante.checked) return 'Azul Brillante';
    if(azulGrisaceo.checked) return 'Azul Grisaceo';
    if(azulAcero.checked) return 'Azul Acero';
    if(azulHielo.checked) return 'Azul Hielo';
    if(azulVerdoso.checked) return 'Azul Verdoso';
    if(azulTurquesa.checked) return 'Azul Turquesa';
    if(verdeOjos.checked) return 'Verde';
    if(verdeBrillante.checked) return 'Verde Brillante';
    if(verdeClaro.checked) return 'Verde Claro';
    if(verdeOliva.checked) return 'Verde Oliva';
    if(verdeJade.checked) return 'Verde Jade';
    if(marron.checked) return 'Marron';
    if(marronClaro.checked) return 'Marron Claro';
    if(marronDorado.checked) return 'Marron Dorado';
    if(marronMiel.checked) return 'Marron Miel';
    if(marronAvellana.checked) return 'Marron Avellana';
    if(marronOscuro.checked) return 'Marron Oscuro';
    if(gris.checked) return 'Gris';
    if(grisClaro.checked) return 'Gris Claro';
    if(grisVerde.checked) return 'Gris Verde';
    if(grisAcero.checked) return 'Gris Acero';
    if(grisAzulado.checked) return 'Gris Azulado';
    if(grisPlateado.checked) return 'Gris Plateado';
    return '';
}

function destellos() {
    if(doradoOCalido.checked) return 'Dorados o Calidos';
    if(plateadoOFrio.checked) return 'Plateados o Frios';
    return '';
}

function ropa() {
    if(coloresCalidos.checked) return 'Colores Calidos';
    if(coloresFrios.checked) return 'Colores Frios';
    if(coloresNeutros.checked) return 'Colores Neutros';
    return '';
}

function accesorios() {
    if(dorados.checked) return 'Dorados o Calidos';
    if(plateados.checked) return 'Plateados o Frios';
    if(ambos.checked) return 'Ambos';
    return '';
}

//* Funciones de logica de negocio

//* funcion de resultado
function result() {
    
    items1.innerText = tonoDePiel();
    items2.innerText = subTonoPiel();
    items3.innerText = reactionOfTheSun();
    items4.innerText = colorVeins();
    items5.innerText = colorCabello();
    items6.innerText = colorOjos();
    items7.innerText = ropa();
    items8.innerText = destellos();
    items9.innerText = accesorios();


    // console.log(verano(), otrosDatos())

    let estacion = primavera() || verano() || otoño() || invierno();

    if (estacion) {
        visibleCard(estacion);
        textResult.innerText = `Con los datos ingresados tu estacion es ${estacion}`;
        titlePallet.classList.add('hidden');
    }
    otrosDatos()
}

//* funcion para determinar la estacion de primavera
function primavera() {
    let primavera = null;
    if ((tonoDePiel() === 'Muy Clara' || (tonoDePiel() === 'Clara' && subTonoPiel() === 'Calido' || subTonoPiel() === 'Frio')) &&
        (colorCabello() === 'Rubio Claro' || colorCabello() === 'Castaño Claro' || colorCabello() === 'Rubio Dorado' || colorCabello() === 'Rubio Miel' || colorCabello() === 'Caoba') &&
        (colorOjos() === 'Azul' || colorOjos() === 'Verde' || colorOjos() === 'Marron claro' || colorOjos() === 'Avellana')) {
        primavera = "Primavera"
        visibleCard(primavera);
    }

    //* Primavera Clara (Light Spring)
    if ((tonoDePiel() === 'Clara' && subTonoPiel() === 'Calido') && (colorCabello() === 'Rubio Miel' || colorCabello() === 'Rubio Dorado') && (colorOjos() === 'Azul Brillante' || colorOjos() === 'Verde Claro')) {
        primavera = 'Primavera Clara (Light Spring)';
        // console.log(primavera)
    }

    //* Primavera Calida (Warm Spring)
    if ((tonoDePiel() === 'Media' && subTonoPiel() === 'Calido') && (colorCabello() === 'Rubio Dorado' || (colorCabello() === 'Castaño Claro' && destellos() === 'Dorados o Calidos') && (colorOjos() === 'Marron Dorado' || (colorOjos() === 'Marron Avellana' && destellos() === 'Dorados o Calidos')))) {
        primavera = 'Primavera Calida (Warm Spring)';
        // console.log(primavera)
    }

    //* Primavera Brillante (Bright Spring) 
    if ((tonoDePiel() === 'Media' || tonoDePiel() === 'Clara' && subTonoPiel() === 'Calido') && (colorCabello() === 'Rubio Dorado' || colorCabello() === 'Rubio Miel') && (colorOjos() === 'Azul' || colorOjos() === 'Verde' || colorOjos() === 'Marron Claro')) {
        primavera = 'Primavera Brillante (Bright Spring)';
        // console.log(primavera)
    }

    return primavera;
}

// * funcion para determinar la estacion de verano
function verano() {
    let verano = null;
    if ((tonoDePiel() === 'Clara' || (tonoDePiel() === 'Media' && subTonoPiel() === 'Frio')) && (colorCabello() === 'Rubio Cenizo' || colorCabello() === 'Castaño Claro' || colorCabello() === 'Rubio Oscuro') && (colorOjos() === 'Azul' || colorOjos === 'Gris' || colorOjos() === 'Verde' || colorOjos() === 'Marron o Negro' || colorOjos() === 'Marron Avellana')) {
        verano = 'Verano';
        visibleCard(verano)
    }

    // * Verano Claro (Light Summer)
    if ((tonoDePiel() === 'Muy Clara' && (subTonoPiel() === 'Frio' || subTonoPiel() === 'Neutro')) && (colorCabello() === 'Rubio Claro' || colorCabello() === 'Rubio Cenizo' || (colorCabello() === 'Castaño Claro' && subTonoPiel() === 'Frio')) && (colorOjos() === 'Azul Claro' || colorOjos() === 'Azul Grisaceo' || colorOjos() === 'Verde Claro' || colorOjos() === 'Gris Claro')) {
        verano = 'Verano Claro (Light Summer)';
        visibleCard(verano)
    }

    //* Verano Suave (Soft Summer)
    //TODO: agregar los matices castaño medio etc
    if ((tonoDePiel() === 'Clara' && (subTonoPiel() === 'Frio' || subTonoPiel() === 'Neutro')) && (colorCabello() === 'Rubio Oscuro' || colorCabello() === 'Castaño Claro' || colorCabello() === 'Castaño Medio') && (colorOjos() === 'Azul Grisaceo' || colorOjos() === 'Verde Oliva' || colorOjos() === 'Marron Claro' || colorOjos() === 'Gris Verde')) {
        verano = 'Verano Suave (Soft Summer)';
        visibleCard('Verano Suave (Soft Summer)')
    }

    //* Verano Frio (Cool Summer)
    if ((tonoDePiel() === 'Clara' && subTonoPiel() === 'Frio') && (colorCabello() === 'Rubio Oscuro' || colorCabello() === 'Castaño Medio') && (colorOjos() === 'Azul Acero' || colorOjos() === 'Azul Hielo' || colorOjos() === 'Verde Jade')) {
        verano = 'Verano Frio (Cool Summer)';
        visibleCard(verano)
    }

    return verano;
}

//* function [ara determinar la estacion de Otoño
function otoño() {
    let otoño = null;
    if ((tonoDePiel() === 'Clara' || tonoDePiel() === 'Media' || tonoDePiel() === 'Oscura' && (subTonoPiel() === 'Calido' || subTonoPiel() === 'Neutro')) && (colorCabello() === 'Rubio Oscuro' || (colorCabello() === 'Castaño Neutro' && subTonoPiel() === 'Calido') || colorCabello() === 'Castaño Rojizo' || colorCabello() === 'Pelirojo') && (colorOjos() === 'Verde Oliva' || colorOjos() === 'Marron Avellana' || colorOjos() === 'Azul Grisaceo')) {
        otoño = 'Otoño';
        visibleCard(otoño)
    }

    //* ontoño Claro (Light Autumn)
    if ((tonoDePiel() === 'Clara' || tonoDePiel() === 'Media' && (subTonoPiel() === 'Calido' || subTonoPiel() === 'Neutro')) && (colorCabello() === 'Rubio Oscuro' || colorCabello() === 'Castaño Claro' || colorCabello() === 'Castaño Medio' && (destellos() === 'Dorados o Calidos')) && (colorOjos() === 'Verde Oliva' || colorOjos() === 'Marron Claro' || colorOjos() === 'MarronAvellana' || colorOjos() === 'Azul Grisaceo')) {
        otoño = 'Otoño Claro (Light Autumn)';
        visibleCard(otoño)
    }

    //* Otoño Calido (wram Autumn)
    if ((tonoDePiel() === 'Clara' || tonoDePiel() === 'Media' && (subTonoPiel() === 'Calido')) && (colorCabello() === 'Rubio Oscuro' || colorCabello() === 'Castaño Medio' || colorCabello() === 'Pelirojo') && (colorOjos() === 'Verde Brillante' || colorOjos() === 'Marron Dorado' || colorOjos() === 'Marron Avellan' || colorOjos() === 'Azul Turqueza')) {
        otoño = 'Otoño Calido (Wram Autumn)';
        visibleCard(otoño)
    }

    //* Otoño Oscuro (Dark Autumn)
    if ((tonoDePiel() === 'Media' || tonoDePiel() === 'Oscura' && subTonoPiel() === 'Calido') && (colorCabello() === 'Castaño Oscuro' && subTonoPiel() === 'Calido' || colorCabello() === 'Marron' || colorCabello() === 'Negro' && destellos() === 'Dorados o Calidos') && (colorOjos() === 'Marron Oscuro' || colorOjos() === 'Verde Brillante' || colorOjos() === 'Marron Avella' || colorOjos() === 'Azul Brillante')) {
        otoño = 'Otoño Oscuro (Dark Autumn)'
        visibleCard(otoño)
    }
    return otoño;
}

//*fuction para determinar la estacion de Invierno
function invierno() {
    let invierno = null;
    if ((tonoDePiel() === 'Clara' && subTonoPiel() === 'Frio' || subTonoPiel() === 'Neutro' || tonoDePiel() === 'Media' && (subTonoPiel() === 'Frio' || subTonoPiel() === 'Neutro')) && (colorCabello() === 'Negro' || colorCabello() === 'Castaño Oscuro' || colorCabello() === 'Castaño Medio') && (colorOjos() === 'Marron Oscuro' || colorOjos() === 'Azul Hielo' || colorOjos() === 'Verde' || colorOjos() === 'Gris Plateado')) {
        invierno = 'Invierno';
        visibleCard(invierno)
    }

    //* Invierno Profundo (Deep Winter)
    if ((tonoDePiel() === 'Media' || tonoDePiel() === 'Oscura' && (subTonoPiel() === 'Frio')) && (colorCabello() === 'Negro' || colorCabello() === 'Marron Oscuro' || colorCabello() === 'Castaño Medio') && (colorOjos() === 'Marron Oscuro' || colorOjos() === 'Verde' || colorOjos() === 'Azul Brillante')) {
        invierno = 'Invierno Profundo (Deep Winter)';
        visibleCard(invierno);
    }

    //* Invierno Frio (True Winter)
    if ((tonoDePiel() === 'Clara' || tonoDePiel() === 'Media' && (subTonoPiel() === 'Frio')) && (colorCabello() === 'Negro' || colorCabello() === 'Castaño Oscuro') && (colorOjos() === 'Azul Hielo' || colorOjos() === 'Gris Plateado' || colorOjos() === 'Marron' || colorOjos() === 'Verde')) {
        invierno = 'Invierno Frio (True Winter)';
        visibleCard(invierno);
    }

    //* Invierno Brillante (Bright Winter)
    if ((tonoDePiel() === 'Clara' || tonoDePiel() === 'Media' && (subTonoPiel() === 'Frio')) && (colorCabello() === 'Negro' || colorCabello() === 'Castaño Oscuro') && (colorOjos() === 'Azul Brillante' || colorOjos() === 'Verde Claro' || colorOjos() === 'Gris Claro' || colorOjos() === 'Marron Avellana')) {
        invierno = 'Invierno Brillante (Bright Winter)';
        visibleCard(invierno);
    }

    return invierno;
}

// * funcion para determinar otros datos
function otrosDatos() {
    let x = '';
    let s = '';
    let b = '';

    const item1Data = document.getElementById('itemData-1');
    const item2Data = document.getElementById('itemData-2');
    const item3Data = document.getElementById('itemData-3');
    const item4Data = document.getElementById('itemData-4');
    const otrosDatosList = document.getElementById('otrosDatos');

    if (primavera() === 'Primavera' || primavera() === 'Primavera Clara (Light Spring)' || primavera() === 'Primavera Calida (Warm Spring)' || primavera() === 'Primavera Brillante (Bright Spring)') {
        if (reactionOfTheSun() === 'Se quema ligeramente y broncea') {
            x = 'Refuerza la primavera';
        }

        if (colorVeins() === 'Verde' && accesorios() === 'Dorados o Calidos') {
            s = 'Refuerza la Primavera';
        }
        if (ropa() === 'Colores Calidos') {
            b = 'Refuerza la tonalidad de Primavera';
            if (item1Data && item2Data && item3Data && item4Data) {
                item1Data.innerText = 'Casual: ' + ' ' + 'Jersey de color carnel + Jeans en verde oliva' + ' o ' + 'Vestido coral + sandalias beige claro';
                item2Data.innerText = 'Formal: ' + ' ' + 'Traje marron + camisa blanca + corbata en tonos calidos' + ' o ' + 'Falda verde lima + camisa blanca + accesorios dorados';
                item3Data.innerText = 'Elegante: ' + ' ' + 'Traje marron + camisa blanca + corbata en tonos calidos + accesorios dorados' + ' o ' + 'Blusa turquesa + Pantalon crema + Accesorios dorados';
                item4Data.innerText = 'Colores a evitar: ' + ' ' + 'Tonos frios o apagados como gris carbon, azul marino profundo y negro puro, ya que pueden opacar la luminosidad natural de Primavera' + ' y ' + 'Colores demasiado oscuros o terrosos que no reflejen la frescura de esta estacion';
            }
        }
    } else if (verano() === 'Verano' || verano() === 'Verano Claro (Light Summer)' || verano() === 'Verano Suave (Soft Summer)' || verano() === 'Verano Frio (Cool Summer)') {
        if (reactionOfTheSun() === 'Se quema facil') {
            x = 'Refuerza una tonalidad fria de verano';
        }

        if (colorVeins() === 'Azul o Morado' && accesorios() === 'Plateados o Frios') {
            s = 'Refuerza una tonalidad fria de verano';
        }

        if (ropa() === 'Colores Frios') {
            b = 'Indicativo de verano';
            if (item1Data && item2Data && item3Data && item4Data) {
                item1Data.innerText = 'Casual: ' + ' ' + 'Blusa blanca + Pantalon azul marino' + ' o ' + 'Camisa azul cielo + Jeans gris claro';
                item2Data.innerText = 'Formal: ' + ' ' + 'Traje gris + camisa blanca + corbata azul marino' + ' o ' + 'Blusa rosa palo + Pantalon gris o gris perla + Accesorios plateados';
                item3Data.innerText = 'Elegante: ' + ' ' + 'Traje gris + camisa blanca + corbata azul marino + accesorios plateados' + ' o ' + 'Vestido lavanda + accesorios plateados';
                item4Data.innerText = 'Colores a evitar: ' + ' ' + 'Tonos calidos como naranja, amarillo dorado o carnel, que tienden a apagar tu piel y el brillo natural de Verano y no favorecerte' + ' y ' + 'Colores demasiado saturados o intensos, como rojo brillante o negro puro, que pueden dominar su delicada armonia';
            }
        }
    } else if (otoño() === 'Otoño' || otoño() === 'Otoño Claro (Light Autumn)' || otoño() === 'Otoño Calido (Warm Autumn)' || otoño() === 'Otoño Oscuro (Dark Autumn)') {
        if (reactionOfTheSun() === 'Se broncea facil') {
            x = 'Refuerza la tonalidad de otoño';
        }

        if (colorVeins() === 'Verde' && accesorios() === 'Dorados o Calidos') {
            s = 'Refuerza la tonalidad de otoño';
        }
        if (ropa() === 'Colores Calidos') {
            b = 'Indicativo de otoño';
            if (item1Data && item2Data && item3Data && item4Data) {
                item1Data.innerText = 'Casual: ' + ' ' + 'Jersey de color carnel + Jeans en verde oliva';
                item2Data.innerText = 'Formal: ' + ' ' + 'Traje en color marron + Camisa blanca + Corbata en tonos calidos + Accesorios dorados' + ' o ' + 'Blusa mostaza + Pantalon marron chocolate + Accesorios dorados';
                item3Data.innerText = 'Elegante: ' + ' ' + 'Traje en color marron + Camisa blanca + Corbata en tonos calidos + Accesorios dorados' + ' o ' + 'Vestido burdeos calido + accesorios dorados';
                item4Data.innerText = 'Colores a evitar: ' + ' ' + 'Tonos frios y brillantes como fucsia, azul electrico, negro puro o blanco puro, ya que pueden apagar el aspecto calido y armonioso de Otoño' + ' y ' + 'Tonos pastel muy suaves que carezcan de calidez';
            }
        }
    } else if (invierno() === 'Invierno' || invierno() === 'Invierno Profundo (Deep Winter)' || invierno() === 'Invierno Frio (True Winter)' || invierno() === 'Invierno Brillante (Bright Winter)') {
        if (reactionOfTheSun() === 'Se quema facil') {
            x = 'Refuerza la tonalidad de invierno';
        }

        if (colorVeins() === 'Azul o Morado' && accesorios() === 'Plateados o Frios') {
            s = 'Refuerza la tonalidad de invierno';
        }

        if (ropa() === 'Colores Frios' || ropa() === 'Colores Neutros') {
            b = 'Indicativo de invierno';
            if (item1Data && item2Data && item3Data && item4Data) {
                item1Data.innerText = 'Casual: ' + ' ' + 'Blazer azul marino + camisa blanca + pantalon gris';
                item2Data.innerText = 'Formal: ' + ' ' + 'Traje gris + camisa blanca + corbata azul marino o azul zafiro';
                item3Data.innerText = 'Elegante: ' + ' ' + 'Traje + camisa blanca + corbata azul marino o azul zafiro + accesorios plateados' + ' o ' + 'Vestido azul marino + accesorios plateados';
                item4Data.innerText = 'Colores a evitar: ' + ' ' + 'Tonos calidos y terrosos como marron, camel, mostaza y beige calido, ya que pueden apagar tu piel y el tono natural del invierno y no favorecerte' + ' y ' + 'Tonos pasteles y colores claros, ya que no contrastan con tu piel y pueden hacerte ver palida';
            }
        }
    }

    if (primavera() === 'Primavera' || primavera() === 'Primavera Clara (Light Spring)' || primavera() === 'Primavera Calida (Warm Spring)' || primavera() === 'Primavera Brillante (Bright Spring)') {
        otrosDatosList.innerText = x;
    } else if (verano() === 'Verano' || verano() === 'Verano Claro (Light Summer)' || verano() === 'Verano Suave (Soft Summer)' || verano() === 'Verano Frio (Cool Summer)') {
        otrosDatosList.innerText = x + ' ' + s + ' ' + b;
    } else if (otoño() === 'Otoño' || otoño() === 'Otoño Claro (Light Autumn)' || otoño() === 'Otoño Calido (Warm Autumn)' || otoño() === 'Otoño Oscuro (Dark Autumn)') {
        otrosDatosList.innerText = x + ' ' + s + ' ' + b;
    } else if (invierno() === 'Invierno' || invierno() === 'Invierno Profundo (Deep Winter)' || invierno() === 'Invierno Frio (True Winter)' || invierno() === 'Invierno Brillante (Bright Winter)') {
        otrosDatosList.innerText = x + ' ' + s + ' ' + b;
    }
}

//* Interfaz

function visibleCard(x) {
    containerCards.classList.remove('grid');

    switch (x) {
        case 'Primavera':
        case 'Primavera Clara (Light Spring)':
        case 'Primavera Calida (Warm Spring)':
        case 'Primavera Brillante (Bright Spring)':
            primaveraCard.classList.remove('hidden');
            primaveraCard.classList.remove('border-gray-400');
            primaveraCard.classList.add('w-full');
            primaveraCard.classList.add('border-white');
            primaveraCard.classList.add('border');
            veranoCard.classList.add('hidden');
            otoñoCard.classList.add('hidden');
            inviernoCard.classList.add('hidden');
            break;
        case 'Verano':
        case 'Verano Claro (Light Summer)':
        case 'Verano Suave (Soft Summer)':
        case 'Verano Frio (Cool Summer)':
            primaveraCard.classList.add('hidden');
            veranoCard.classList.remove('hidden');
            veranoCard.classList.remove('border-gray-400');
            veranoCard.classList.add('w-full');
            veranoCard.classList.add('border-white');
            veranoCard.classList.add('border');
            otoñoCard.classList.add('hidden');
            inviernoCard.classList.add('hidden');
            break;
        case 'Otoño':
        case 'Otoño Claro (Light Autumn)':
        case 'Otoño Calido (Wram Autumn)':
        case 'Otoño Oscuro (Dark Autumn)':
            primaveraCard.classList.add('hidden');
            veranoCard.classList.add('hidden');
            otoñoCard.classList.remove('hidden');
            otoñoCard.classList.remove('border-gray-400');
            otoñoCard.classList.add('w-full');
            otoñoCard.classList.add('border-white');
            otoñoCard.classList.add('border');
            inviernoCard.classList.add('hidden');
            break;
        case 'Invierno':
        case 'Invierno Profundo (Deep Winter)':
        case 'Invierno Frio (True Winter)':
        case 'Invierno Brillante (Bright Winter)':
            primaveraCard.classList.add('hidden');
            veranoCard.classList.add('hidden');
            otoñoCard.classList.add('hidden');
            inviernoCard.classList.remove('hidden');
            inviernoCard.classList.remove('border-gray-400');
            inviernoCard.classList.add('w-full');
            inviernoCard.classList.add('border-white');
            inviernoCard.classList.add('border');
            break;
    };
}

function closeWindow() {
    windowCard.classList.add('hidden');
    windowCard.classList.remove('flex');
    textResult.innerText = ' ';
}

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
    console.log('datos reseteados')
}

