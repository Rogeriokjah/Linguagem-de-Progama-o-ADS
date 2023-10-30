function CalcAumentoSalario(salario) {
    var salarioAnterior = (salario).toFixed(2);
    var aumento = (salario * 0.25).toFixed(2);
    var novoSalario = (salario * 1.25).toFixed(2);

    return { salarioAnterior: salarioAnterior, novoSalario: novoSalario, aumento: aumento};
  }

//var teste = CalcAumentoSalario(5000);
//console.log(teste);
  