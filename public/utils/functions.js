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
    if (marronONegro.checked === true) {
        colorOjos = 'Marron o Negro'
    } else if (marronClaro.checked === true) {
        colorOjos = 'Marron claro'
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
    // console.log(primavera())


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
    if ((tonoDePiel() === 'Muy clara' || (tonoDePiel() === 'Clara' && subTonoPiel() === 'Calido')) &&
        (colorCabello() === 'Rubio Claro' || colorCabello() === 'Castaño Claro' || colorCabello() === 'Rubio Dorado' || colorCabello() === 'Rubio Miel' || colorCabello() === 'Caoba') &&
        (colorOjos() === 'Azul' || colorOjos() === 'Verde' || colorOjos() === 'Marron claro' || colorOjos() === 'Avellana')) { //!
        primavera = "Primavera"
        visibleCard(primavera);
    }

    //* Primavera Clara (Light Spring)
    if((tonoDePiel() === 'Clara' && subTonoPiel() === 'Calido') && (colorCabello() === 'Rubio Miel' || colorCabello() === 'Rubio Dorado') && (colorOjos() === 'Azul' || colorOjos() === 'Verde')) {
        primavera = 'Primavera Clara (Light Spring)';
        // console.log(primavera)
    }

    //* Primavera Calida (Warm Spring)
    if((tonoDePiel() === 'Media' && subTonoPiel() === 'Calido') && (colorCabello() === 'Rubio Dorado' || (colorCabello() === 'Castaño Claro' && destellos() === 'Dorados o Calidos') && (colorOjos() === 'Verde' || colorOjos() === 'Azul'))) {
        primavera = 'Primavera Calida (Warm Spring)';
        // console.log(primavera)
    }

    //* Primavera Brillante (Bright Spring) 
    if((tonoDePiel() === 'Media' || tonoDePiel() === 'Clara' && subTonoPiel() === 'Calido') && (colorCabello() === 'Rubio Dorado' || colorCabello() === 'Dorado Miel') && (colorOjos() === 'Azul' || colorOjos() === 'Verde' || colorOjos() === 'Marron claro o Avellana')) {
        primavera = 'Primavera Brillante (Bright Spring)';
        // console.log(primavera)
    }

    return primavera;
}

// * funcion para determinar la estacion de verano
function verano() {
    let verano = null;
    if ((tonoDePiel() === 'Clara' || tonoDePiel() === 'Media' && subTonoPiel() === 'Frio') && (colorCabello() === 'Rubio Cenizo' || colorCabello() === 'Castaño Claro' || colorCabello() === 'Rubio Oscuro') && (colorOjos() === 'Azul' || colorOjos() === 'Gris' || colorOjos() === 'Verde' || colorOjos() === 'Marron o Avellana')) {
        verano = 'Verano'
        visibleCard(verano);
        // console.log(verano)
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
        case 'Primavera' || 'Primavera Clara (Light Spring)':
            primaveraCard.classList.remove('hidden');
            primaveraCard.classList.remove('lg:border-gray-400');
            primaveraCard.classList.add('w-full');
            primaveraCard.classList.add('border-white');
            primaveraCard.classList.add('border');
            veranoCard.classList.add('hidden');
            otoñoCard.classList.add('hidden');
            inviernoCard.classList.add('hidden');
            break;
        case 'Verano':
            primaveraCard.classList.add('hidden');
            veranoCard.classList.remove('hidden');
            veranoCard.classList.remove('lg:border-gray-400');
            veranoCard.classList.add('w-full');
            veranoCard.classList.add('border-white');
            veranoCard.classList.add('border');
            otoñoCard.classList.add('hidden');
            inviernoCard.classList.add('hidden');
            break
        case 'Otoño':
            primaveraCard.classList.add('hidden');
            veranoCard.classList.add('hidden');
            otoñoCard.classList.remove('hidden');
            otoñoCard.classList.remove('lg:border-gray-400');
            otoñoCard.classList.add('w-full');
            otoñoCard.classList.add('border-white');
            otoñoCard.classList.add('border');
            inviernoCard.classList.add('hidden');
            break
        case 'Invierno':
            primaveraCard.classList.add('hidden');
            veranoCard.classList.add('hidden');
            otoñoCard.classList.add('hidden');
            inviernoCard.classList.remove('hidden');
            inviernoCard.classList.remove('lg:border-gray-400');
            inviernoCard.classList.add('w-full');
            inviernoCard.classList.add('border-white');
            inviernoCard.classList.add('border');
            break
    };
}

function closeWindow() {
    windowCard.classList.add('hidden');
    windowCard.classList.remove('flex');
    // primaveraCard.classList.add('hidden')
    // veranoCard.classList.add('hidden')
}


// function otrosDatos() {
//     let x = null + 'x';
//     let s = null + 's';
//     let b = null + 'b';

//     if (primavera() === 'Primavera') {
//         x = (reactionSun() === 'Se quema ligeramente y broncea') ? 'Refuerza la Primavera' : 'Es primavera';
//         if (colorVeins() === 'Verde' && accesorios() === 'Dorados o Calidos') {
//             s = 'Refuerza la Primavera'
//         }
//     } else if (verano() === 'Verano') {
//         x = (reactionSun() === 'Se broncea ligeramente') ? 'Refuerza una tonalidad fria de verano' : 'Indica un subtono frio mas neutro';

//         if (colorVeins() === 'Azul o Morado' && accesorios() === 'Plateados o Frios') {
//             s = 'Refuerza una tonalidad fria de verano'
//         }

//         if (ropa() === 'Colores Frios') {
//             b = 'Indicativo de verano';
//         }
//     }

//     otrosDatosList.innerText = x + ' ' + s + ' ' + b;
//     return x, s, b;
// }

// function closeWindow() {
//     windowCard.classList.add('hidden');
//     windowCard.classList.remove('flex');
//     primaveraCard.classList.add('hidden')
//     veranoCard.classList.add('hidden')
// }

// function result() {
//     items1.innerText = tonoDePiel();
//     items2.innerText = subTonoPiel();
//     items3.innerText = reactionSun();
//     items4.innerText = colorVeins();
//     items5.innerText = colorCabello();
//     items6.innerText = colorOjos();
//     items7.innerText = ropa();
//     items8.innerText = destellos();
//     items9.innerText = accesorios();

//     if (primavera() === 'Primavera') {
//         textresultt.innerText = primavera();
//     } else if (verano() === 'Verano') {
//         textresultt.innerText = verano();
//         visibleCard(verano());
//     }

//     primavera()
//     verano()

//     console.log(primavera())
//     console.log(verano())
//     // console.log(otrosDatos())
// }
//* claido asociado con estaciones calidas (Prmavera y Otoño)
//* Firo asociado con estaciones frias (Verano e invierno)
//* neutro puede pertenecer a varias estaciones, dependiendo de otros factores 
