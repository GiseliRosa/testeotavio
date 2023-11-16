for(var i = 0; i < 10; i++){
    const nome = prompt('Digite seu nome');
    const peso = parseFloat(prompt('Digite seu peso'));
    const altura = parseFloat(prompt('Digite sua altura'));
    const imc =  peso / (altura * altura);

    if (imc < 18.5)
     {
         console.log('Abaixo do peso normal')
     }
     
    else if (imc < 25.0)
     {
        console.log('Peso adequado')
     }
    else if (imc < 30.0)
     {
        console.log("Excesso de peso")
     }
    else if (imc < 35.0)
     {
        console.log("Obesidade grau I")
     }
    else if (imc < 40.0)
     {
        console.log("Obesidade grau II")
     }
   else if (imc >= 40.0)
     {
        console.log("Obesidade grau III")
     }
    }
