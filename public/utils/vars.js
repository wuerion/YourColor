
//* vars

//* windowCard
let textresultt = document.getElementById('textresultt');
let exit = document.getElementById('exit');
let windowCard = document.getElementById('windowCard');

let items1 = document.getElementById('item-1');
let items2 = document.getElementById('item-2');
let items3 = document.getElementById('item-3');
let items4 = document.getElementById('item-4');
let items5 = document.getElementById('item-5');
let items6 = document.getElementById('item-6');
let items7 = document.getElementById('item-7');
let items8 = document.getElementById('item-8');
let items9 = document.getElementById('item-9');
let items10 = document.getElementById('item-10');

let otrosDatosList = document.getElementById('otrosDatos')

//* stacions crads
let containerCards = document.querySelector('#colorCard #containerCards')
let primaveraCard = document.querySelector('#colorCard #primavera');
let veranoCard = document.querySelector('#colorCard #verano');
let otoñoCard = document.querySelector('#colorCard #otoño');
let inviernoCard = document.querySelector('#colorCard #invierno');

let colorCard = document.getElementById('colorCard');

//* Sub Tono De Piel
//* Tono de piel
const muyClaraPiel = document.getElementById("muyClara");
const claraPiel = document.getElementById('clara');
const mediaPiel = document.getElementById('media');
const morenaPiel = document.getElementById('morena');
const oscuraPiel = document.getElementById('oscura');

//* Describir el tono de piel
const calidoSubPiel = document.getElementById('calido');
const frioSubPiel = document.getElementById('frio');
const neutroSubPiel = document.getElementById('neutro');

//* Reacion ante el sol
const quema = document.getElementById('quema');
const broncea = document.getElementById('broncea');
const bronceaFacil = document.getElementById('bronceaFacil');
const quemaLigeramenteYBroncea = document.getElementById('quemaLigeramenteYBroncea');

//* Color de venas
const azulOMorado = document.getElementById('azulOMorado');
const verde = document.getElementById('verde');
const neutro = document.getElementById('neutro');

//* Color de Cabello
const caoba = document.getElementById('caoba');
const castañoOscuro = document.getElementById('castañoOscuro');
const castañoClaro = document.getElementById('castañoClaro');
const castañoDorado = document.getElementById('castañoDorado');
const castañoRojizo = document.getElementById('castañoRojizo');
const castañoCenizo = document.getElementById('castañoCenizo');
const castañoNeutro = document.getElementById('castañoNeutro');
const rubioOscuro = document.getElementById('rubioOscuro');
const rubioClaro = document.getElementById('rubioClaro');
const rubioMiel = document.getElementById('rubioMiel');
const rubioCenizo = document.getElementById('rubioCenizo');
const rubioNeutro = document.getElementById('rubioNeutro');
const rubioDorado = document.getElementById('rubioDorado');
const pelirojo = document.getElementById('pelirojo');
const platinoFrio = document.getElementById('platinoFrio');
const rojoIntenso = document.getElementById('rojoIntenso');
const rojoCobrizo = document.getElementById('rojoCobrizo');
const negro = document.getElementById('negro');
const negroAzulado = document.getElementById('negroAzulado');
const negroNatural = document.getElementById('negroNatural');

//* Color de ojos
const azul = document.getElementById('azul');
const azulClaro = document.getElementById('azulClaro');
const azulBrillante = document.getElementById('azulBrillante');
const azulGrisaceo = document.getElementById('azulGrisaceo');
const azulTurqueza = document.getElementById('azulTurqueza');

const verdeOjos = document.getElementById('verdeOjos');
const verdeBrillante = doocument.getElementById('verdeBrillante');
const verdeClaro = document.getElementById('vredeClaro');
const verdeOliva = document.getElementById('verdeOliva');
const verdeJade = document.getElementById('verdeJade');

const marronONegro = document.getElementById('marronONegro');
const marronClaro = document.getElementById('marronClaro');
const marronDorado = document.getElementById('marronDorado');
const marronMiel = document.getElementById('marronMiel');
const marronAvellana = document.getElementById('marronAvellana');
const marronOscuro = document.getElementById('marronOscuro');

const gris = document.getElementById('gris');
const grisClaro = document.getElementById('grisClaro');
const grisVerde = document.getElementById('grisVerde');
const grisAcero = document.getElementById('grisAcero');

//* Destellos ojos
const doradoOCalido = document.getElementById('doradosOCalidos');
const plateadoOFrio = document.getElementById('palteadosOFrios');

//* Ropa y Accesorios
//* Ropa
const coloresCalidos = document.getElementById('coloresCalidos');
const coloresFrios = document.getElementById('coloresFrios');
const coloresNeutros = document.getElementById('coloresNeutros');

//* Accesorios
const dorados = document.getElementById('dorados');
const plateados = document.getElementById('plateados');
const ambos = document.getElementById('ambos');

//* Button
const startTest = document.getElementById('startTest');

// test
const colorsStacions = {
    primavera: [
        "#fdd891",
        "#fab394",
        "#fdb8cd",
        "#fea2a6",
        "#ceefc7",
        "#97d3d7",
        "#c0e6fb",
        "#e96d75",
        "#fc8f76",
        "#feb83e",
        "#97ab48",
        "#349951",
        "#38a6a1",
        "#1779b8",
        "#e95182",
        "#fc3c40",
        "#f48221",
        "#ffc734",
        "#1fa14f",
        "#77e8dd",
        "#4159b1"
    ],
    verano: [
        "#fdf9ad",
        "#fec8d8",
        "#fab7e2",
        "#dcc5ed",
        "#b3b9d9",
        "#93bbf8",
        "#a4d4d9",
        "#c1376c",
        "#f984d3",
        "#bd8ec3",
        "#7193c8",
        "#4ea5ee",
        "#448b8c",
        "#737f8f",
        "#ecdfac",
        "#e3aab9",
        "#d985a7",
        "#bc81a7",
        "#84beb5",
        "#8da9c1",
        "#476e93"
    ],
    otoño: [
        "#d4822f",
        "#c06f52",
        "#971a20",
        "#743538",
        "#7c723d",
        "#1d554a",
        "#054467",
        "#ffa944",
        "#ee834a",
        "#ef7a6c",
        "#cb3824",
        "#8e5539",
        "#878b3e",
        "#6a846d",
        "#e7958f",
        "#eeb2b7",
        "#e3c893",
        "#c1b9b0",
        "#acb9a2",
        "#abcdcc",
        "#79acd1"
    ],
    invierno: [
        "#c3337f",
        "#c01b43",
        "#922650",
        "#612b77",
        "#172588",
        "#146059",
        "#38435a",
        "#c31f4b",
        "#fb87b7",
        "#32b888",
        "#5cbfd9",
        "#2666ad",
        "#7853a5",
        "#a0a0a0",
        "#f04b86",
        "#ff65c7",
        "#a66fc7",
        "#416ce2",
        "#08caff",
        "#44bb99",
        "#fef940"
    ]
}

startTest.addEventListener('click', function () {
    result() 
    windowCard.classList.add('flex')
    windowCard.classList.remove('hidden')
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        result()
        windowCard.classList.add('flex')
        windowCard.classList.remove('hidden')
    }
})

exit.addEventListener('click', function () { closeWindow() })

window.addEventListener('kewdown', (e) => {
    if (e.key === 'Esc') {
        windowCard.classList.add('hidden');
        windowCard.classList.remove('flex')
    }
})