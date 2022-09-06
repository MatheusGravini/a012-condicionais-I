let idade;
let isMaiorIdade;
let isCursandoOutraFaculdade;

let idade1 = +prompt("Insira aqui sua idade!")
let terminouEnsinoM1 = prompt("Você terminou o ensino médio?")
let cursandoFaculdade = prompt("Você está cursando a faculdade?")

if(idade1 >= 18){
 console.log("Maior de idade")
} else { 
 console.log("Menor de idade")
}

if(terminouEnsinoM1 === "sim" && idade1 >= 17){
    console.log("Concluiu o Ensino Médio!")
} else {
    console.log("Não concluiu o Ensino Médio!")
}

if(cursandoFaculdade === "sim" && terminouEnsinoM1 === "sim"){
    console.log("Está cursando alguma faculdade")
} else {
    console.log("Não está cursando nenhuma faculdade")
}