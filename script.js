const relogio = window.document.getElementById('reolgio')
const incio = window.document.getElementById('iniciar')
const pausa = window.document.getElementById('pausar')
const reinicio = window.document.getElementById('reinicar')
let segundos = 0
let timer 



function iniciar() {
    timer = setInterval(function() {
        segundos ++
        relogio.innerHTML = pegaHora(segundos);
    }, 1000);
}
function pegaHora(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}





incio.addEventListener('click', function () {
    iniciar();
});
