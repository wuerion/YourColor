// sections functions 
function tonoDePiel() {
    let tonoDePiel;
    if (muyClaraPiel.checked === true) {
        tonoDePiel = 'Muy clara'
    } else if (claraPiel.checked === true) {
        tonoDePiel = "Clara"
    } else if (mediaPiel.checked === true) {
        tonoDePiel = 'Media'
    } else if (morenaPiel.checked === true) {
        tonoDePiel = 'Morena'
    } else if (oscuraPiel.checked === true) {
        tonoDePiel = 'Oscura'
    }
    return tonoDePiel;
}

function subTonoPiel() {
    let subTonoPiel;
    if (calidoSubPiel.checked === true) {
        subTonoPiel = 'Calido'
    } else if (frioSubPiel.checked === true) {
        subTonoPiel = 'Frio'
    } else if (neutroSubPiel.checked === true) {
        subTonoPiel = 'Neutro'
    }
    return subTonoPiel;
}

function reactionSun() {
    let reactionSun;
    if (quema.checked === true) {
        reactionSun = 'Se quema'
    } else if (broncea.checked === true) {
        reactionSun = 'Se broncea ligeramente'
    } else if (bronceaFacil.checked === true) {
        reactionSun = 'Se broncea facil'
    }
    return reactionSun
}

function colorVeins() {
    let colorVeins;
    if (azulOMorado.checked === true) {
        colorVeins = 'Azul o Morado'
    } else if (verde.checked === true) {
        colorVeins = 'Verde'
    } else if (neutro.checked === true) {
        colorVeins = 'Neutro'
    }
    return colorVeins;
}

function colorCabello() {
    let colorCabello;
    if (negro.checked === true) {
        colorCabello = 'Negro'
    } else if (castañoOscuro.checked === true) {
        colorCabello = 'Castaño Oscuro'
    } else if (castañoClaro.checked === true) {
        colorCabello = 'Castaño Claro'
    } else if (rubioOscuro.checked === true) {
        colorCabello = 'Rubio Oscuro'
    } else if (rubioClaro.checked === true) {
        colorCabello = 'Rubio Claro'
    } else if (pelirojo.checked === true) {
        colorCabello = 'Pelirojo'
    }
    return colorCabello;
}

function colorOjos() {
    let colorOjos;
    if (marronONegro.checked === true) {
        colorOjos = 'Marron o Negro'
    } else if (marronClaroOAvellana.checked === true) {
        colorOjos = 'Marron o Avellana'
    } else if (verdeOjos.checked === true) {
        colorOjos = 'Verde'
    } else if (azul.checked === true) {
        colorOjos = 'Azul'
    } else if (gris.checked === true) {
        colorOjos = 'Gris'
    }
    return colorOjos;
}

function destellos() {
    let destellos;
    if (doradoOCalido.checked === true) {
        destellos = 'Dorados o Calidos'
    } else if (plateadoOFrio.checked === true) {
        destellos = 'Plateados o Frios'
    }
    return destellos;
}

function ropa() {
    let ropa;
    if (coloresCalidos.checked === true) {
        ropa = 'Colores Calidos'
    } else if (coloresFrios.checked === true) {
        ropa = 'Colores Frios'
    } else if (coloresNeutros.checked === true) {
        ropa = 'Colores Neutros'
    }
    return ropa;
}

function accesorios() {
    let accesorios;
    if (dorados.checked === true) {
        accesorios = 'Dorados o Claidos'
    } else if (plateados.checked === true) {
        accesorios = 'Plateados o Frios'
    } else if (ambos.checked === true) {
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

    // Pseudocodigo
    let estacion;
    if (subTonoPiel() === 'Calido') {
        estacion = (colorCabello() === 'Castaño Claro') ? 'Primavera' : 'Otoño';
        if (estacion === 'Primavera') {
            console.log(colorsStacions.primavera)
        } else if (estacion === 'Otoño') {
            console.log(colorsStacions.otoño)
        }
    } else if (subTonoPiel() === 'Frio') {
        estacion = (colorCabello() === 'Castaño Oscuro') ? 'Invierno' : 'Verano';
        if (estacion === 'Invierno') {
            console.log(colorsStacions.invierno)
        } else if (estacion === 'Verano') {
            console.log(colorsStacions.verano)
        }
    }
    visibleCard(estacion)
    console.log(estacion);
    textResult.innerText = `con los datos ingresado su colorometria es: ${estacion}`;
    c()
}


function visibleCard(x) {
    // colorCard
    switch (x) {
        case 'Primavera':
            containerCards.classList.remove('grid')
            primavera.classList.add('w-full');
            verano.classList.add('hidden')
            otoño.classList.add('hidden');
            invierno.classList.add('hidden');
            break;
        case 'Verano':
            containerCards.classList.remove('grid')
            primavera.classList.add('hidden');
            verano.classList.add('w-full')
            otoño.classList.add('hidden');
            invierno.classList.add('hidden');
            break;
        case 'Otoño':
            containerCards.classList.remove('grid')
            primavera.classList.add('hidden');
            verano.classList.add('hidden')
            otoño.classList.add('w-full');
            invierno.classList.add('hidden');
            break;
        case 'Invierno':
            containerCards.classList.remove('grid')
            primavera.classList.add('hidden');
            verano.classList.add('hidden')
            otoño.classList.add('hidden');
            invierno.classList.add('w-full');
            break;
        default:
            break;
    }
}


function closeCard() {
    windowCard.classList = 'hidden'
}

function c() {
    let primavera;
    if (tonoDePiel() === 'Muy clara' || tonoDePiel() === 'Clara' || subTonoPiel() === 'Claido') {
        if (colorCabello() === 'Rubio Claro' || colorCabello() === 'Castaño Claro') {
            if (colorOjos() === 'Azul' || colorOjos() === 'verde' || colorOjos() === 'Marron o Avellana') {
                primavera = 'primavera';
                console.log(tonoDePiel())
            }
        }
    }
    return primavera;
}



//* claido asociado con estaciones calidas (Prmavera y Otoño)
//* Firo asociado con estaciones frias (Verano e invierno)
//* neutro puede pertenecer a varias estaciones, dependiendo de otros factores 
