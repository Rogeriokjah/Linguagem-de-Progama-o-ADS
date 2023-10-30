function CalcTabuada (numero) {
    var  resultado = "Tabuada de " + numero + ":\n"

    for (var i = 1; i <=10; i++){
        var l =  numero + " x " +  i + " = " + (numero * i) + "\n";
        resultado += l;

    }

    return  resultado ;

}

//var testeTabuada = CalcTabuada (5);
//console.log(testeTabuada.resultado);