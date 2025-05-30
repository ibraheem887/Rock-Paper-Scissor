let btns = document.querySelectorAll(".btns");
let userScore = document.querySelector("#playerScore") ;
let compScore = document.querySelector("#computerScore") ;
let message = document.querySelector("#resultMessage");
let restart = document.querySelector("#reset");

btns.forEach(element => {
    element.addEventListener("click",()=>
    {
       let userChoice = element.innerText ;
       let computerChoice = compMove() ;
       if (userChoice === computerChoice) {
        message.innerText= "Its a Draw!"; // Handle draw case
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        userScore.innerText = parseInt(userScore.innerText) + 1; // Increment user score
        message.innerText= "User wins!";
    } else {
        compScore.innerText = parseInt(compScore.innerText) + 1; // Increment computer score
        message.innerText= "Computer wins!";
    }
    })
});  

restart.addEventListener("click",()=>{
    compScore.innerText = "0";
    userScore.innerText = "0";
    message.innerText = "";
})


const compMove = ()=>{
    let arr = ["Rock" , "Paper" , "Scissors"];
    let index =  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return arr[index];
}