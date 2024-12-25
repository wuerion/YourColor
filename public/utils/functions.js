// sections functions 
function tonoDePiel() {
    let tonoDePiel;
    if (muyClaraPiel.checked === true) {
        tonoDePiel = 'Muy Clara'
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
        reactionSun = 'Se quema facil'
    } else if (broncea.checked === true) {
        reactionSun = 'Se broncea ligeramente'
    } else if (bronceaFacil.checked === true) {
        reactionSun = 'Se broncea facil'
    } else if (quemaLigeramenteYBroncea.checked === true) {
        reactionSun = 'Se quema ligeramente y broncea'
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
    if (caoba.checked === true) {
        colorCabello = 'Caoba'
    } else if (negro.checked === true) {
        colorCabello = 'Negro'
    } else if (castañoOscuro.checked === true) {
        colorCabello = 'Castaño Oscuro'
    } else if (castañoMedio.checked === true) {
        colorCabello = 'Castaño Medio'
    } else if (castañoClaro.checked === true) {
        colorCabello = 'Castaño Claro'
    } else if (castañoDorado.checked === true) {
        colorCabello = 'Castaño Dorado'
    } else if (castañoRojizo.checked === true) {
        colorCabello = 'Castañ Rojizo'
    } else if (castañoCenizo.checked === true) {
        colorCabello = 'Castaño Cenizo'
    } else if (castañoNeutro.checked === true) {
        colorCabello = 'Castaño Neutro'
    } else if (rubioOscuro.checked === true) {
        colorCabello = 'Rubio Oscuro'
    } else if (rubioClaro.checked === true) {
        colorCabello = 'Rubio Claro'
    } else if (rubioCenizo.checked === true) {
        colorCabello = 'Rubio Cenizo'
    } else if (rubioMiel.checked === true) {
        colorCabello = 'Rubio Miel'
    } else if (rubioNeutro.checked === true) {
        colorCabello = 'Rubio Neutro'
    } else if (rubioDorado.checked === true) {
        colorCabello = 'Rubio Dorado'
    } else if (plateadoOFrio.checked === true) {
        colorCabello = 'Plateado o Frio'
    } else if (rojoIntenso.checked === true) {
        colorCabello = 'Rojo Intenso'
    } else if (rojoCobrizo.checked === true) {
        colorCabello = 'Rojo Cobrizo'
    } else if (pelirojo.checked === true) {
        colorCabello = 'Pelirojo'
    } else if (negro.checked === true) {
        colorCabello = 'Negro'
    } else if (negroAzulado.checked === true) {
        colorCabello = 'Negro Azulado'
    } else if (negroNatural.checked === true) {
        colorCabello = 'Negro Natural'
    }

    return colorCabello;
}

function colorOjos() {
    let colorOjos;
    if (azul.checked === true) {
        colorOjos = 'Azul'
    } else if (azulClaro.checked === true) {
        colorOjos = 'Azul Claro'
    } else if (azulBrillante.checked === true) {
        colorOjos = 'Azul Brillante'
    } else if (azulGrisaceo.checked === true) {
        colorOjos = 'Azul Grisaceo'
    } else if (azulAcero.checked === true) {
        colorOjos = 'Azul Acero'
    } else if (azulTurquesa.checked === true) {
        colorOjos = 'Azul Turquesa'
    } else if (verdeOjos.checked === true) {
        colorOjos = 'Verde'
    } else if (verdeBrillante.checked === true) {
        colorOjos = 'Verde Brillante'
    } else if (verdeClaro.checked === true) {
        colorOjos = 'Verde Claro'
    } else if (verdeOliva.checked === true) {
        colorOjos = 'Verde Oliva'
    } else if (verdeJade.checked === true) {
        colorOjos = 'Verde Jade'
    } else if (marronONegro.checked === true) {
        colorOjos = 'Marron o Negro'
    } else if (marronClaro.checked === true) {
        colorOjos = 'Marron Claro'
    } else if (marronDorado.checked === true) {
        colorOjos = 'Marron Dorado'
    } else if (marronMiel.checked === true) {
        colorOjos = 'Marron Miel'
    } else if (marronAvellana.checked === true) {
        colorOjos = 'Marron Avellana'
    } else if (marronOscuro.checked === true) {
        colorOjos = 'Marron Oscuro'
    } else if (gris.checked === true) {
        colorOjos = 'Gris'
    } else if (grisClaro.checked === true) {
        colorOjos = 'Gris Claro'
    } else if (grisVerde.checked === true) {
        colorOjos = 'Gris Verde'
    } else if (grisAcero.checked === true) {
        colorOjos = 'Gris Acero'
    } else if (grisAzulado.checked === true) {
        colorOjos = 'Gris Azulado'
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
        accesorios = 'Dorados o Calidos'
    } else if (plateados.checked === true) {
        accesorios = 'Plateados o Frios'
    } else if (ambos.checked === true) {
        accesorios = 'Ambos'
    }
    return accesorios;
}

//* Funciones de logica de negocio

//* funcion de resultado
function result() {
    subTonoPiel()
    items1.innerText = tonoDePiel();
    items2.innerText = subTonoPiel();
    items3.innerText = reactionSun();
    items4.innerText = colorVeins();
    items5.innerText = colorCabello();
    items6.innerText = colorOjos();
    items7.innerText = ropa();
    items8.innerText = destellos();
    items9.innerText = accesorios();


    // console.log(verano(), otrosDatos())

    let estacion = primavera() || verano();

    if (estacion) {
        visibleCard(estacion);
        textResult.innerText = `Con los datos ingresados tu estacion es ${estacion}`;
    }
    otrosDatos()
}

//* funcion para determinar la estacion de primavera
function primavera() {
    // let primaveraText = null;
    let primavera = null;
    // let Primavera
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
        console.log(verano)
    }

    //* Verano Frio (Cool Summer)
    if((tonoDePiel() === 'Clara' && subTonoPiel() === 'Frio') && (colorCabello() === 'Rubio Oscuro' || colorCabello() === 'Castaño Medio') && (colorOjos() === 'Azul Acero' || colorOjos() === 'Gris Azulado' || colorOjos() === 'Verde Jade')) {
        verano = 'Verano Frio (Cool Summer)';
        visibleCard(verano)
    }

    return verano;
}



// * funcion para determinar otros datos
function otrosDatos() {
    let x = '';
    let s = '';
    let b = '';
    if (primavera() === 'Primavera') {
        x = (reactionSun() === 'Se quema ligeramente y broncea') ? 'Refuerza la Primavera' : 'Es primavera';
        if (colorVeins() === 'Verde' && accesorios() === 'Dorados o Calidos') {
            s = 'Refuerza la Primavera'
        }
    } else if (verano() === 'Verano') {
        x = (reactionSun() === 'Se quema facil') ? 'Refuerza una tonalidad fria de verano' : 'Indica un subtono frio mas neutro';
        console.log(x)

        if (colorVeins() === 'Azul o Morado' && accesorios() === 'Plateados o Frios') {
            s = 'Refuerza una tonalidad fria de verano'
            console.log(s)
        }

        if (ropa() === 'Colores Frios') {
            b = 'Indicativo de verano';
            console.log(b)
        }
    }

    if (primavera() === 'Primavera') {
        otrosDatosList.innerText = x
    } else if (verano() === 'Verano') {
        otrosDatosList.innerText = x + ' ' + s + ' ' + b;

    }
    // return x + ' ' + s + ' ' + b;
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
            console.log(x);
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
            console.log(x);
            break;
        case 'Otoño':
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
}


