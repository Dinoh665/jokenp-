const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const resultado = document.querySelector(".winner")
const yourScore = document.querySelector("#human")
const machineScore = document.querySelector("#machine")

let humanScoreNumber = 0
let machineScoreNumber = 0

const player = (userChoice) =>{
    
    result(userChoice, machine())

}



rock.addEventListener("click", () => {
    player("rock")
});

paper.addEventListener("click", () => {
    player("paper")
});

scissors.addEventListener("click", () => {
    player("scissors")
});


const machine = () =>{
    const choices = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * 3)


    return choices[random]
}

const result = (human, machine) =>{
    
    console.log("Humano: " + human + " Maquina: " + machine)

    if(human === machine){
        resultado.innerHTML = "Empate!"
    } else if(human === "paper" && machine === "rock" || human === "rock" && machine === "scissors" || human === "scissors" && machine === "paper"){
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
        resultado.innerHTML = "Parabéns, Você ganhou!"
    } else{ 
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        resultado.innerHTML = "Você perdeu para o robô"
    }
    

}