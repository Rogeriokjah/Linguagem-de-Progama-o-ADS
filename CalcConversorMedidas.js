function CalcConversorMedidas (medidapes) {
    var polegadas = (parseFloat(medidapes) * 12).toFixed(2);
    var jardas = (parseFloat(medidapes) / 3).toFixed(2);
    var milhas = (parseFloat(jardas) / 1760).toFixed(4);
    return{polegadas: polegadas, jardas: jardas, milhas: milhas};
}

//var testeconversor = CalcConversorMedidas(3);
//console.log(testeconversor);
