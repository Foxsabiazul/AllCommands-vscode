function gerarTabuada() {
    var numero = document.getElementById('numero').value;
    var tabuada = '';

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        tabuada += `${numero} x ${i} = ${resultado}<br>`;
    }

    document.getElementById('tabuada').innerHTML = tabuada;
}
function gerarTabuada() {
    var numero = document.getElementById('numero').value;
    var tabuada = '';

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        tabuada += `${numero} x ${i} = ${resultado}<br>`;
    }

    document.getElementById('tabuada').innerHTML = tabuada;
}

function apagarTabuada() {
    document.getElementById('numero').value = '';
    document.getElementById('tabuada').innerHTML = '';
}

