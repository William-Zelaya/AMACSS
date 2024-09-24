let contador = 0;

const contadorElemento = document.getElementById('contador');
const botonIncrementar = document.getElementById('incrementar');
const botonDecrementar = document.getElementById('decrementar');
const botonReiniciar = document.getElementById('reiniciar');

botonIncrementar.addEventListener('click', () => {
    contador++;
    actualizarContador();
});

botonDecrementar.addEventListener('click', () => {
    contador--;
    actualizarContador();
});

botonReiniciar.addEventListener('click', () => {
    contador = 0;
    actualizarContador();
});

function actualizarContador() {
    contadorElemento.textContent = contador;
}
