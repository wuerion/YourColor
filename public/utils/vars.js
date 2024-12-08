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

//* Color de venas
const azulOMorado = document.getElementById('azulOMorado');
const verde = document.getElementById('verde');
const neutro = document.getElementById('neutro');

//* Color de Cabello
const negro = document.getElementById('negro');
const castañoOscuro = document.getElementById('castañoOscuro');
const castañoClaro = document.getElementById('castañoClaro');
const rubioOscuro = document.getElementById('rubioOscuro');
const rubioClaro = document.querySelector('#rubioClaro');
const pelirojo = document.getElementById('pelirojo');

//* Color de ojos
const marronONegro = document.getElementById('marronONegro');
const marronClaroOAvellana = document.getElementById('marronClaroOAvellana');
const verdeOjos = document.getElementById('verdeOjos');
const azul = document.getElementById('azul');
const gris = document.getElementById('gris');

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

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        result()
    }
})
startTest.addEventListener('click', () => {result()})