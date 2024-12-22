// sections functions 
function tonoDePiel() {
    let tonoDePiel;
    if (muyClaraPiel.checked === false) {
        tonoDePiel = 'Muy clara'
    } else if (claraPiel.checked === false) {
        tonoDePiel = "Clara"
    } else if (mediaPiel.checked === false) {
        tonoDePiel = 'Media'
    } else if (morenaPiel.checked === false) {
        tonoDePiel = 'Morena'
    } else if (oscuraPiel.checked === false) {
        tonoDePiel = 'Oscura'
    }
    return tonoDePiel;
}

function subTonoPiel() {
    let subTonoPiel;
    if (calidoSubPiel.checked === false) {
        subTonoPiel = 'Calido'
    } else if (frioSubPiel.checked === false) {
        subTonoPiel = 'Frio'
    } else if (neutroSubPiel.checked === false) {
        subTonoPiel = 'Neutro'
    }
    return subTonoPiel;
}

function reactionSun() {
    let reactionSun;
    if (quema.checked === false) {
        reactionSun = 'Se quema'
    } else if (broncea.checked === false) {
        reactionSun = 'Se broncea ligeramente'
    } else if (bronceaFacil.checked === false) {
        reactionSun = 'Se broncea facil'
    } else if (quemaLigeramenteYBroncea.checked === false) {
        reactionSun = 'Se quema ligeramente y broncea'
    }
    return reactionSun
}

function colorVeins() {
    let colorVeins;
    if (azulOMorado.checked === false) {
        colorVeins = 'Azul o Morado'
    } else if (verde.checked === false) {
        colorVeins = 'Verde'
    } else if (neutro.checked === false) {
        colorVeins = 'Neutro'
    }
    return colorVeins;
}

function colorCabello() {
    let colorCabello;
    if (caoba.checked === false) {
        colorCabello = 'Caoba'
    } else if (negro.checked === false) {
        colorCabello = 'Negro'
    } else if (castañoOscuro.checked === false) {
        colorCabello = 'Castaño Oscuro'
    } else if (castañoClaro.checked === false) {
        colorCabello = 'Castaño Claro'
    } else if (castañoDorado.checked === false) {
        colorCabello = 'Castaño Dorado'
    } else if (castañoRojizo.checked === false) {
        colorCabello = 'Castañ Rojizo'
    } else if (castañoCenizo.checked === false) {
        colorCabello = 'Castaño Cenizo'
    } else if (castañoNeutro.checked === false) {
        colorCabello = 'Castaño Neutro'
    } else if (rubioOscuro.checked === false) {
        colorCabello = 'Rubio Oscuro'
    } else if (rubioClaro.checked === false) {
        colorCabello = 'Rubio Claro'
    } else if (rubioCenizo.checked === false) {
        colorCabello = 'Rubio Cenizo'
    } else if (rubioMiel.checked === false) {
        colorCabello = 'Rubio Miel'
    } else if (rubioNeutro.checked === false) {
        colorCabello = 'Rubio Neutro'
    } else if (rubioDorado.checked === false) {
        colorCabello = 'Rubio Dorado'
    } else if (plateadoOFrio.checked === false) {
        colorCabello = 'Plateado o Frio'
    } else if (rojoIntenso.checked === false) {
        colorCabello = 'Rojo Intenso'
    } else if (rojoCobrizo.checked === false) {
        colorCabello = 'Rojo Cobrizo'
    } else if (pelirojo.checked === false) {
        colorCabello = 'Pelirojo'
    } else if (negro.checked === false) {
        colorCabello = 'Negro'
    } else if (negroAzulado.checked === false) {
        colorCabello = 'Negro Azulado'
    } else if (negroNatural.checked === false) {
        colorCabello = 'Negro Natural'
    }

    return colorCabello;
}

function colorOjos() {
    let colorOjos;
    if (marronONegro.checked === false) {
        colorOjos = 'Marron o Negro'
    } else if (marronClaroOAvellana.checked === false) {
        colorOjos = 'Marron o Avellana'
    } else if (verdeOjos.checked === false) {
        colorOjos = 'Verde'
    } else if (azul.checked === false) {
        colorOjos = 'Azul'
    } else if (gris.checked === false) {
        colorOjos = 'Gris'
    }
    return colorOjos;
}

function destellos() {
    let destellos;
    if (doradoOCalido.checked === false) {
        destellos = 'Dorados o Calidos'
    } else if (plateadoOFrio.checked === false) {
        destellos = 'Plateados o Frios'
    }
    return destellos;
}

function ropa() {
    let ropa;
    if (coloresCalidos.checked === false) {
        ropa = 'Colores Calidos'
    } else if (coloresFrios.checked === false) {
        ropa = 'Colores Frios'
    } else if (coloresNeutros.checked === false) {
        ropa = 'Colores Neutros'
    }
    return ropa;
}

function accesorios() {
    let accesorios;
    if (dorados.checked === false) {
        accesorios = 'Dorados o Calidos'
    } else if (plateados.checked === false) {
        accesorios = 'Plateados o Frios'
    } else if (ambos.checked === false) {
        accesorios = 'Ambos'
    }
    return accesorios;
}


function result() {
    items1.innerText = tonoDePiel();
    items2.innerText = subTonoPiel();
    items3.innerText = reactionSun();
    items4.innerText = colorVeins();
    items5.innerText = colorCabello();
    items6.innerText = colorOjos();
    items7.innerText = ropa();
    items8.innerText = destellos();
    items9.innerText = accesorios();

    // Pseudocodigo
    // let estacion;
    // if (subTonoPiel() === 'Calido') {
    //     estacion = (colorCabello() === 'Castaño Claro') ? 'Primavera' : 'Otoño';

    //     if (estacion === 'Primavera') {
    //         console.log(colorsStacions.primavera)
    //     } else if (estacion === 'Otoño') {
    //         console.log(colorsStacions.otoño)
    //     }
    // } else if (subTonoPiel() === 'Frio') {
    //     estacion = (colorCabello() === 'Castaño Oscuro') ? 'Invierno' : 'Verano';
    //     if (estacion === 'Invierno') {
    //         console.log(colorsStacions.invierno)
    //     } else if (estacion === 'Verano') {
    //         console.log(colorsStacions.verano)
    //     }
    // }

    let estacion = primavera() || verano() || otrosDatos();

    if (estacion) {
        visibleCard(estacion);
        textResult.innerText = `con los datos ingresado su colorometria es: ${estacion}`;
    }

    console.log(otrosDatos())
}

function primavera() {
    let primavera = null;
    if ((tonoDePiel() === 'Muy clara' || tonoDePiel() === 'Clara' && subTonoPiel() === 'Calido') &&
        (colorCabello() === 'Rubio Claro' || colorCabello() === 'Castaño Claro' || colorCabello() === 'Rubio Dorado' || colorCabello() === 'Rubio Miel' || colorCabello() === 'Caoba') &&
        (colorOjos() === 'Azul' || colorOjos() === 'Verde' || colorOjos() === 'Marron o Avellana')
    ) {
        primavera = "Primavera"
    }
    return primavera;
}

function verano() {
    let verano = null;
    if ((tonoDePiel() === 'Clara' && subTonoPiel() === 'Frio') &&
        (colorCabello() === 'Rubio Oscuro' || colorCabello() === 'Castaño Claro') &&
        (colorOjos() === 'Azul' || colorOjos === 'Gris' || colorOjos() === 'Verde' || colorOjos() === 'Marron o Avellana')
    ) {
        verano = 'Verano'
    }


    // if ((tonoDePiel() === 'Clara' && subTonoPiel() === 'Frio') && (colorCabello() === 'Rubio ')) {}


    return verano;
}

function otrosDatos() {
    let x = null + 'x';
    let s = null + 's';
    let b = null + 'b';

    if (primavera() === 'Primavera') {
        x = (reactionSun() === 'Se quema ligeramente y broncea') ? 'Refuerza la Primavera' : 'Es primavera';
        if (colorVeins() === 'Verde' && accesorios() === 'Dorados o Calidos') {
            s = 'Refuerza la Primavera'
        }
    } else if (verano() === 'Verano') {
        x = (reactionSun() === 'Se broncea ligeramente') ? 'Refuerza una tonalidad fria de verano' : 'Indica un subtono frio mas neutro';
        if (colorVeins() === 'Azul o Morado' && accesorios() === 'Plateados o Frios') {
            s = 'Refuerza una tonalidad fria de verano'
        }
        if (ropa() === 'Colores Frios') {
            b = 'Indicativo de verano';
        }
    }

    otrosDatosList.innerText = x + ' ' + s + ' ' + b;
    return x, s, b;
}

function closeWindow() {
    windowCard.classList.add('hidden');
    windowCard.classList.remove('flex');
    primaveraCard.classList.add('hidden')
    veranoCard.classList.add('hidden')
}

function visibleCard(x) {
    // colorCard 
    console.log(x)
    containerCards.classList.remove('grid');

    const cards = {
        'Primavera': primaveraCard,
        'Verano': veranoCard,
    }

    const card = cards[x];

    if (card) {
        card.classList.add('w-flex');
        card.classList.add('border-white')
        card.classList.remove('hidden');
        colorCard.classList.remove('lg:border-gray-400');
    } else {
        console.log('No hay datos');
    }
}

//* claido asociado con estaciones calidas (Prmavera y Otoño)
//* Firo asociado con estaciones frias (Verano e invierno)
//* neutro puede pertenecer a varias estaciones, dependiendo de otros factores 
