document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formSorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMax = document.getElementById('numero-maximo').value;
        numeroMax = parseInt(numeroMax);

        let numeroAleat = Math.random()*numeroMax;
        numeroAleat = Math.floor(numeroAleat + 1);

        document.getElementById('resultadoValor').innerText = numeroAleat
        document.querySelector('.resultado').style.display =  'block';
    })
})