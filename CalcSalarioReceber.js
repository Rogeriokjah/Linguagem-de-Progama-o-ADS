function CalcSalarioReceber(salario) {
  var salariobase = salario.toFixed(2);
  var gratificacao = (salariobase * 0.05).toFixed(2);
  var imposto = (salariobase * 0.07).toFixed(2);
  var salarioreceber = (salario + parseFloat(gratificacao) - parseFloat(imposto)).toFixed(2);
  return { salariobase: salariobase, gratificacao: gratificacao, imposto: imposto, salarioreceber: salarioreceber };
}

//var teste = CalcSalarioReceber(1000);
//console.log(teste);
