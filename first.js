let userScore = 0;
let computerScore= 0;

let choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const userscorePara = document.querySelector("#userscore");
const compscorePara = document.querySelector("#computerscore");

const genccomChoice = () =>{
    const options=["rock","paper","scissors"];
    const rndIndx=Math.floor(Math.random() *3);
    return options[rndIndx];
}
const drawGame = () =>{
    message.innerText="Game was drawn.Play Again";
    message.style.backgroundColor="blue";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin) {
        userScore++;
        userscorePara.innerText=userScore;
        message.innerText=`You win. Your ${userChoice} beats ${compChoice}`
        message.style.backgroundColor= "green";
    }
    else{
        computerScore++;
        compscorePara.innerText=computerScore;
        message.innerText=`You lose.  ${compChoice} beats  your ${userChoice}`
        message.style.backgroundColor="red";
        
    }
 
}
const playGame = (userChoice) =>{
   const compChoice= genccomChoice();
   if(userChoice === compChoice){
     drawGame();
   }else{
    let userWin = true;
    if (userChoice ==="rock" ){
      userWin =  compChoice === "paper" ? false : true ;
    }else if(userChoice=== "paper"){
       userWin = compChoice=== "scissors" ? false : true ;
    }else {
        userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
   

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
               playGame(userChoice);
    })

})