function CalcExercicio5 (num){
    if(num <= 0){
        return "Favor digitar um número maior que 0!";
    }
    else{
        var quadrado = (parseFloat(num) ** 2).toFixed(2);
        var cubo = (parseFloat(num) ** 3).toFixed(2);
        var raizquad = (Math.sqrt(num)).toFixed(2);
        var raizcubo = (Math.cbrt(num)).toFixed(2);
    }
    return { quadrado: quadrado, cubo: cubo, raizquad: raizquad, raizcubo: raizcubo};

}

//var testexerc5 = CalcExercicio5 (125);
//console.log(testexerc5);
