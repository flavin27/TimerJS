const relogio = window.document.getElementById('relogio');
const botaoIniciar = window.document.getElementById('iniciar');
const botaoPausar = window.document.getElementById('pausar');
const botaoReiniciar = window.document.getElementById('reiniciar');
let segundos = 0;
let timer;

function incrementarContador(){
    segundos++;
    relogio.innerHTML = pegaHora(segundos);
}

function iniciar() {
    timer = setInterval(incrementarContador, 1000);
}

function pegaHora(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
function pausar(){
    clearInterval(timer)
}
function reiniciar() {
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = pegaHora(segundos)
}

botaoIniciar.addEventListener('click', iniciar);
botaoPausar.addEventListener('click', pausar);
botaoReiniciar.addEventListener('click', reiniciar);
