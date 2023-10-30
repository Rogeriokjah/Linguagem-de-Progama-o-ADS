function CalcIdade (anonasc, anoatual){//acho que tem alguma função para colocar o ano atual automaticamente. Não pesquisei porquê não foi isso que o exercício pediu ^^
    if(anoatual <= anonasc){
        return "Favor inserir valores válidos para o ano de nascimento e o ano atual!";
    }
    else{
        var idade = anoatual - anonasc;
        var idade2050 = idade + (2050 - parseInt(anoatual));

        return { idade: idade, idade2050: idade2050};
    }
}

//var testeidade = CalcIdade (1993, 2023);
//console.log(testeidade);
